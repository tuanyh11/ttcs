import React from 'react'
import ArrowDown from '../../../../assets/icons/ArrowDown'

const ProductManagement = () => {
    return (
        <div> <div className="p-5 mt-5 intro-y box">
            <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <ArrowDown />
                Product Management
            </div>

            <div className="mt-5">
                <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
                        <div className="text-left">
                            <div className="flex items-center">
                                <div className="font-medium">Product Status</div>
                                <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">If the status is active, your product can be searched for by potential buyers.</div>
                        </div>
                    </label><div className="flex-1 w-full mt-3 xl:mt-0"><div className="flex items-center"><input id="product-status-active" type="checkbox" className="w-6 h-6 cursor-pointer rounded-full " /><label htmlFor="product-status-active" className="cursor-pointer ml-2">Active</label></div></div></div>
                <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"><div className="text-left"><div className="flex items-center"><div className="font-medium">Product Stock</div><div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div></div></div></label><div className="flex-1 w-full mt-3 xl:mt-0"><input id="product-stock" type="text" placeholder="Input Product Stock" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 flex-1" /></div></div>
                <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"><div className="text-left"><div className="flex items-center"><div className="font-medium">SKU (Stock Keeping Unit)</div><div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div></div><div className="mt-3 text-xs leading-relaxed text-slate-500">Use a unique SKU code if you want to mark your product.</div></div></label><div className="flex-1 w-full mt-3 xl:mt-0"><input id="sku" type="text" placeholder="Input SKU" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 flex-1" /></div></div>
            </div>
        </div></div>
    )
}

export default ProductManagement