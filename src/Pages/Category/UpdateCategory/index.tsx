import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getCategory, updateCategory } from "../../../api/product";
import { HeadingV1, InputV1, TitleBoxV1 } from "../../../Components";
import { CategoryInterface } from "../../../interfaces/product.interface";
import { moveToTop } from "../../../utils/index.utils";
import FormV1 from "../Components/Form/FormV1";
import UploadV1 from "../Components/Upload/UploadV1";

const UpdateCategory = () => {
  const defaultValues: CategoryInterface = {
    name: "",
    description: "",
    image: "",
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch
  } = useForm<CategoryInterface>({
    defaultValues,
  });

  const nav = useNavigate();

  const [isPersist, setIsPersist] = useState(false);
  const id = useParams()?.id as string;

  useQuery({
    queryFn: () => getCategory(id),
    queryKey: ["get-category", id],
    onSuccess: (data) => {
      Object.entries(data).map(([k, v]) =>{
        if(k === 'image') {
          setValue('preview' as keyof CategoryInterface, v as string)
        }
        setValue(k as keyof CategoryInterface, v as string)
      }
        
      );
    },
    refetchOnWindowFocus: false
  });

  const { mutate } = useMutation(updateCategory, {
    onSuccess: () => {
      moveToTop();
      if (isPersist) {
        return handleOnCancel();
      }
      nav("/e-commerce/category/");
    },
  });

  const handleOnSubmit = ({preview, ...data}: CategoryInterface) => {
    const formData = new FormData()
    console.log(data);
    
    Object.entries(data).forEach(([k, v]) => {
      if(k === 'image' && v instanceof FileList ) {
        const img = (v as FileList)?.[0]
        return formData.append(k, img)
      } 
      formData.append(k, v as keyof CategoryInterface)
    });
    mutate({id, data:formData});
}

  console.log(errors);

  const handleOnCancel = () => {
    reset(defaultValues);
    moveToTop();
  };

  const preview = watch("preview") || ''
  const handleRemoveImage = () => {
    URL.revokeObjectURL(preview || '')
    setValue("preview", "");
    setValue("image", "");
  };
  

  return (
    <div>
      <HeadingV1 title="Create Category" />
      <UploadV1
        register={(name: string, option) =>
          register(name as keyof CategoryInterface, option)
        }
        preview={preview}
        onRemove={handleRemoveImage}
        setValue={setValue}
      />
      <FormV1
        onCancel={handleOnCancel}
        onPersist={setIsPersist}
        onSave={setIsPersist}
        register={(
          name: keyof CategoryInterface,
          option: RegisterOptions<CategoryInterface>
        ) => register(name as keyof CategoryInterface, option)}
        onSubmit={handleSubmit(handleOnSubmit)}
      />
    </div>
  );
};

export default UpdateCategory;
