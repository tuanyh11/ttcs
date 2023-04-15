import React from "react";
import ArrowDown from "../../../../assets/icons/ArrowDown";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Controller, useFormContext } from "react-hook-form";

const ProductDetail = () => {
  const { setValue, control, watch } = useFormContext();


  return (
    <div>
      <div className="p-5 mt-5 intro-y box">
        <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
          <ArrowDown />
          Chi Tiết Sản Phẩm
        </div>
        <div className="mt-5">
          <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
            <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
              <div className="text-left">
                <div className="flex items-center">
                  <div className="font-medium">Mô Tả Sản Phẩm</div>
                  <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                    Bắt Buộc
                  </div>
                </div>
                <div className="mt-3 text-xs leading-relaxed text-slate-500">
                  <div>
                    Đảm bảo mô tả sản phẩm cung cấp thông tin chi tiết giải
                    thích về sản phẩm của bạn sao cho dễ hiểu và tìm thấy sản
                    phẩm của bạn.
                  </div>
                  <div className="mt-2">
                    Không nên nhập thông tin về số điện thoại di động, e-mail,
                    v.v. vào phần mô tả sản phẩm để bảo vệ dữ liệu cá nhân.
                  </div>
                </div>
              </div>
            </label>
            <div className="flex-1 w-full mt-3 xl:mt-0 h-full">
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <CKEditor
                    editor={ClassicEditor}
                    data={field.value}
                    onChange={(
                      event: React.ChangeEvent,
                      editor: { getData: () => any }
                    ) => {
                      setValue("description", editor.getData());
                    }}
                    onBlur={(
                      event: React.FocusEvent,
                      editor: { getData: () => any }
                    ) => {
                      setValue("description", editor.getData());
                    }}
                    config={{
                      toolbar: {
                        items: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "link",
                          "bulletedList",
                          "numberedList",
                          "|",
                          "outdent",
                          "indent",
                          "|",
                          "blockQuote",
                          "insertTable",
                          "mediaEmbed",
                          "undo",
                          "redo",
                        ],
                      },
                    }}
                  />
                )}
              ></Controller>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
