import React, { useEffect, useState } from "react";
import ArrowDown from "../../../../assets/icons/ArrowDown";
import Lightbulb from "../../../../assets/icons/Ligthbuld";
import { Controller, useFormContext } from "react-hook-form";
import FileIcon from "../../../../assets/icons/FileIcon";
import Close from "../../../../assets/icons/Close";
import ReactImageUploading, { ImageListType } from "react-images-uploading";
import { ProductInterface } from "../../../../interfaces/product.interface";

interface Props {
  multiple: boolean;
  values: any[];
}

const Upload = () => {
  const { register, watch, setValue, control } =
    useFormContext<ProductInterface>();
  // console.log(watch("images"), watch("previews"));
  const images = watch("images");
  const deletedImages = watch("deletedImages");

  const imageValidation = {
    required: {
      value: true,
      message: "Hình ảnh là bắt buộc",
    },
    validate: {
      format: (value: FileList) => {
        if (value instanceof FileList) {
          for (let i = 0; i < value.length; i++) {
            const fileType = value[i].type;
            if (
              fileType !== "image/png" &&
              fileType !== "image/jpeg" &&
              fileType !== "image/jpg"
            ) {
              return "Hình ảnh phải ở định dạng PNG, JPEG hoặc JPG";
            }
          }
          return true;
        }
      },
      size: (value: FileList) => {
        const minSize = 300;
        if (value instanceof FileList) {
          for (let i = 0; i < value.length; i++) {
            const image = new Image();
            image.src = URL.createObjectURL(value[i]);
            const promise = new Promise<boolean>((resolve) => {
              image.onload = () => {
                if (image.width < minSize || image.height < minSize) {
                  resolve(false);
                } else {
                  resolve(true);
                }
                URL.revokeObjectURL(image.src);
              };
            });
            return promise.then((isValid) => {
              if (!isValid) {
                return "Images must be at least 300 x 300 pixels";
              }
              return true;
            });
          }
        }
      },
    },
  };

  const handleOnChange = (images: ImageListType) => {
    setValue("images", images);
  };

  const handleOnRemoveImage = (index: number, onImageRemove: (index: number) => void) => {
    if(!images[index].dataURL.startsWith("data:image")) {
      setValue("deletedImages", [...deletedImages?.map(image => image?.dataURL) as string[], images[index].dataURL])
    }
    onImageRemove(index)
  }

  return (
    <div>
      <div className="p-5 intro-y box">
        <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
          <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
            <ArrowDown />
            Tải sản phẩm lên
          </div>

          <div className="mt-5">
            <div className="flex items-center text-slate-500">
              <span>
                <Lightbulb />
              </span>
              <div className="ml-2">
                <span className="mr-1">
                  Tránh bán hàng giả / vi phạm Trí tuệ Quyền sở hữu, để sản phẩm
                  của bạn không bị xóa.
                </span>
              </div>
            </div>

            <div className="block sm:flex flex-col items-start mt-10 xl:flex-row">
              <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right w-full xl:w-64 xl:!mr-10">
                <div className="text-left">
                  <div className="flex items-center">
                    <div className="font-medium">Hình Ảnh Sản Phẩm</div>
                    <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                      Yêu Cầu
                    </div>
                  </div>
                  <div className="mt-3 text-xs leading-relaxed text-slate-500">
                    <div>
                      Định dạng hình ảnh là .jpg .jpeg .png và kích thước tối
                      thiểu là 300 x 300 pixel (Để có hình ảnh tối ưu, hãy sử
                      dụng kích thước tối thiểu là 700 x 700 điểm ảnh).
                    </div>
                    <div className="mt-2">
                      Chọn ảnh sản phẩm hoặc kéo thả tối đa 5 ảnh tại một lần ở
                      đây. Bao gồm tối thiểu. 3 bức ảnh hấp dẫn để làm cho sản
                      phẩm hấp dẫn hơn đối với người mua.
                    </div>
                  </div>
                </div>
              </label>

              <ReactImageUploading
                multiple
                value={images}
                onChange={(value) => handleOnChange(value)}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => {
                  return (
                    <div className="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400">
                      <div className="grid grid-cols-10 gap-5 pl-4 pr-5">
                        {imageList.map((img, index) => (
                          <div
                            key={index}
                            className="relative col-span-5 cursor-pointer md:col-span-2 h-28 image-fit zoom-in"
                          >
                            <img
                              className="rounded-md"
                              alt="Midone - HTML Admin Template"
                              src={img.dataURL}
                            />
                            <span
                              onClick={() => handleOnRemoveImage(index, onImageRemove) }
                              className="cursor-pointer absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-2 -mr-2 text-white rounded-full bg-danger"
                            >
                              <Close />
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="relative flex items-center justify-center px-4 pb-4 mt-5 cursor-pointer">
                        <FileIcon />
                        <input
                          type="hidden"
                          {...register("images", { required: true })}
                        />
                        <button
                          onClick={onImageUpload}
                          {...dragProps}
                          type="button"
                          className="mr-1 text-primary"
                        >
                          Tải tệp lên hoặc kéo và thả
                        </button>
                      </div>
                    </div>
                  );
                }}
              </ReactImageUploading>

              <input
                type="hidden"
                {...register("images", {
                  required: {
                    value: true,
                    message: "Hình ảnh là bắt buộc",
                    // validate: imageValidation.validate,
                  },
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
