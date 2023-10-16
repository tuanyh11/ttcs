import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import Breadcrumb from '../../components/Breadcrumb';
import FormV1 from '../../components/Form/FormV1';
import InputV1 from '../../components/Form/InputV1';
import FormLayout from '../Form/FormLayout';
import ReactQuill from 'react-quill';
import { useQueriesCustom } from '../hooks/useQueryCustom';
import { getBrands } from '../apis/brand';
import { getCategories } from '../apis/category';
import Select from 'react-select';
import { TCategory } from '../Category/type';
import { TBrand, TImage } from '../../types';
import Dropzone from 'react-dropzone';
import { RiCloseFill, RiGalleryUploadFill } from 'react-icons/ri';
import { useMutation } from 'react-query';
import { deleteImage, uploadImage } from '../apis/upload';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { newProduct } from '../apis/product';
const NewProduct = () => {
  const methods = useForm();

  const {
    setValue,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const imagesData = watch('images');
  const onSubmit = (data: FieldValues) => {
    createProduct(data);
  };

  const data = useQueriesCustom([
    {
      queryFn: getBrands,
      queryKey: 'get-brands',
    },
    {
      queryFn: getCategories,
      queryKey: 'get-categories',
    },
  ]);

  const { mutate } = useMutation({
    mutationFn: uploadImage,
    mutationKey: 'upload-image',
    onSuccess: (res) => {
      setValue('images', res);
      toast.success('Uploaded image successfully');
    },
    onError: () => {
      toast.error('Error uploading image');
    },
  });

  const { mutate: delImg } = useMutation({
    mutationFn: deleteImage,
    mutationKey: 'del-image',
    onSuccess: () => {
      toast.success('delete image successfully');
    },
    onError: () => {
      toast.error('Error deleting image');
    },
  });

  const { mutate: createProduct } = useMutation({
    mutationFn: newProduct,
    mutationKey: 'create-product',
    onSuccess: () => {
      toast.success('Create product successfully');
      reset();
    },
    onError: () => {
      toast.error('Error creating product');
    },
  });

  const handleUpload = (data: File[]) => {
    const formData = new FormData();
    data.forEach((item) => formData.append('images', item));
    mutate(formData);
  };

  const handleDeleteImage = (public_id: string) => {
    delImg(public_id);
    setValue(
      'images',
      imagesData?.filter((item: TImage) => item.public_id !== public_id),
    );
  };

  const finalData = data.map((item) => (item?.data as any)?.data);
  const brands: TBrand[] = finalData?.[0] || [];
  const categories: TCategory[] = finalData?.[1] || [];

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([_, v]) => {
        toast.error(v?.message as string);
      });
    }
  }, [errors]);

  return (
    <>
      <Breadcrumb pageName="New Product" />
      <div>
        <FormProvider {...methods}>
          <FormV1
            title="Create Your Products"
            button={{
              type: 'submit',
              children: 'Create',
            }}
            form={{
              handleOnSubmit: methods.handleSubmit(onSubmit),
            }}
            renderBody={() => {
              return (
                <>
                  <InputV1
                    label="title"
                    input={{
                      name: 'title',
                      placeholder: 'title',
                      validation: {
                        required: {
                          value: true,
                          message: 'title must be provided',
                        },
                      },
                    }}
                  />
                  <InputV1
                    label="description"
                    input={{
                      name: 'description',
                      placeholder: 'description',
                      children: (
                        <ReactQuill
                          theme="snow"
                          value={watch('description')}
                          onChange={(e) => setValue('description', e)}
                        />
                      ),
                      validation: {
                        required: {
                          value: true,
                          message: 'title must be provided',
                        },
                      },
                    }}
                  />
                  <InputV1
                    label="price"
                    input={{
                      name: 'price',
                      placeholder: 'price',
                      type: 'number',
                      validation: {
                        required: {
                          value: true,
                          message: 'the price must be provided',
                        },
                        min: {
                          value: 1000,
                          message: 'the price must greater than 1000',
                        },
                      },
                    }}
                  />
                  <InputV1
                    label="Category"
                    input={{
                      name: 'category',
                      children: (
                        <Select
                          isMulti
                          required
                          name="categories"
                          placeholder="select category"
                          onChange={(value) =>
                            setValue(
                              'categories',
                              value.map((item) => item.value),
                            )
                          }
                          options={categories.map((item) => ({
                            value: item._id,
                            label: item.name,
                          }))}
                        />
                      ),
                    }}
                  />
                  <InputV1
                    label="brand"
                    input={{
                      name: 'brand',
                      children: (
                        <Select
                          isMulti
                          required
                          name="brand"
                          placeholder="select brand"
                          onChange={(value) =>
                            setValue(
                              'brands',
                              value.map((item) => item.value),
                            )
                          }
                          options={brands.map((item: TBrand) => ({
                            value: item._id,
                            label: item.name,
                          }))}
                        />
                      ),
                    }}
                  />
                  <InputV1
                    label="quantity"
                    input={{
                      name: 'quantity',
                      placeholder: 'quantity',
                      type: 'number',
                      validation: {
                        required: {
                          value: true,
                          message: 'quantity must be provided',
                        },
                        min: {
                          value: 1,
                          message: 'the quantity must greater than or equal 1',
                        },
                      },
                    }}
                  />
                  <InputV1
                    label="Image"
                    input={{
                      name: 'image',
                      children: (
                        <Dropzone
                          onDrop={(files) => {
                            handleUpload(files);
                          }}
                        >
                          {({ getRootProps, getInputProps }) => {
                            return (
                              <div className=" items-center justify-center w-full">
                                <label
                                  {...getRootProps()}
                                  htmlFor="dropzone-file"
                                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                >
                                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <RiGalleryUploadFill className="text-4xl" />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                      <span className="font-semibold">
                                        Click to upload
                                      </span>{' '}
                                      or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                                    </p>
                                  </div>
                                  <input
                                    {...getInputProps()}
                                    className="hidden"
                                  />
                                </label>

                                <div className="mt-6">
                                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                                    {imagesData?.map((img: TImage) => {
                                      return (
                                        <div
                                          key={img?.url}
                                          className=" relative"
                                        >
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleDeleteImage(img?.public_id)
                                            }
                                            className=" absolute top-0 bg-danger rounded-full right-0 translate-y-[-50%] translate-x-[50%]"
                                          >
                                            <RiCloseFill className=" fill-white" />
                                          </button>
                                          <img
                                            className=" max-w-full rounded-lg h-40 "
                                            src={img?.url}
                                            alt=""
                                          />
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            );
                          }}
                        </Dropzone>
                      ),
                    }}
                  />
                </>
              );
            }}
          />
        </FormProvider>
      </div>
    </>
  );
};

export default NewProduct;
