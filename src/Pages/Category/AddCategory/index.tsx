import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../../api/product";
import { HeadingV1, InputV1, TitleBoxV1 } from "../../../Components";
import { CategoryInterface } from "../../../interfaces/product.interface";
import { moveToTop } from "../../../utils/index.utils";
import UploadV1 from "../Components/Upload/UploadV1";

const CreateCategory = () => {
  const defaultValues: CategoryInterface = {
    name: "",
    description: "",
    preview: "",
    image: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<CategoryInterface>({
    defaultValues,
  });

  const nav = useNavigate();

  const [isPersist, setIsPersist] = useState(false);

  const { mutate } = useMutation(createCategory);
  const handleOnSubmit = ({ preview, ...data }: CategoryInterface) => {
    const formData = new FormData();
    console.log(data);

    Object.entries(data).forEach(([k, v]) => {
      if (k === "image") {
        const img = (v as FileList)?.[0];
        return formData.append(k, img);
     }
      formData.append(k, v as keyof CategoryInterface);
    });
    mutate(formData, {
      onSuccess: () => {
        moveToTop();
        if (isPersist) {
          return handleOnCancel();
        }
        nav("/e-commerce/category/");
      },
    })
  };

  console.log(errors);

  const handleOnCancel = () => {
    reset(defaultValues);
    moveToTop();
  };

  const preview = watch("preview");
  const handleRemoveImage = () => {
    URL.revokeObjectURL(preview || "");
    setValue("preview", "");
    setValue("image", "");
  };

  console.log(watch("image"));

  useEffect(() => {
    preview && URL.revokeObjectURL(preview);
  }, []);

  return (
    <div>
      <HeadingV1 title="Create Category" />
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="grid grid-cols-11 pb-20 mt-5 gap-x-6">
          <div className="col-span-11 intro-y 2xl:col-span-9">
            <div className="mb-5">
              <UploadV1
                preview={preview || ""}
                onRemove={handleRemoveImage}
                register={(name, option) =>
                  register(name as keyof CategoryInterface, option)
                }
                setValue={setValue}
              />
            </div>

            <div className="p-5 intro-y box">
              <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                <TitleBoxV1 title="Category Information" />'
                <div className="mt-5">
                  <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Category Name</div>
                          <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                            Required
                          </div>
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <InputV1
                        register={() =>
                          register("name", {
                            required: {
                              value: true,
                              message: "Category name is required",
                            },
                          })
                        }
                      />
                      <div className="text-xs text-slate-500 mt-2 text-right">
                        Maximum character 0/20
                      </div>
                    </div>
                  </div>

                  <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">
                            Category Description
                          </div>
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <InputV1
                        register={() =>
                          register("description", {
                            maxLength: {
                              value: 70,
                              message:
                                "Description must be at least 70 characters",
                            },
                          })
                        }
                      />
                      <div className="text-xs text-slate-500 mt-2 text-right">
                        Maximum character 0/70
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-2 mt-5 md:flex-row">
              <button
                type="button"
                onClick={() => handleOnCancel()}
                className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => setIsPersist(true)}
                className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
              >
                Save &amp; Add New Category
              </button>
              <button
                type="submit"
                onClick={() => setIsPersist(false)}
                className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-full py-3 md:w-52"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
