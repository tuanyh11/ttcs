import React from 'react'
import ArrowDown from '../../../../assets/icons/ArrowDown'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ProductDetail = () => {
    return (
        <div>
            <div className="p-5 mt-5 intro-y box">
            <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
              <ArrowDown />
              Product Detail
            </div>
            <div className="mt-5">
              <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">

                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"><div className="text-left"><div className="flex items-center"><div className="font-medium">Product Description</div><div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div></div><div className="mt-3 text-xs leading-relaxed text-slate-500"><div>Make sure the product description provides a detailed explanation of your product so that it is easy to understand and find your product.</div><div className="mt-2">It is recommended not to enter info on mobile numbers, e-mails, etc. into the product description to protect your personal data.</div></div></div></label>
                <div className="flex-1 w-full mt-3 xl:mt-0 h-full">

                  <CKEditor
                    editor={ClassicEditor}
                    data=""
                    className="test"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
    )
}

export default ProductDetail