import React from 'react'
import ArrowDown from '../../../../assets/icons/ArrowDown'
import Lightbulb from '../../../../assets/icons/Ligthbuld'
import { useFormContext } from 'react-hook-form'
import FileIcon from '../../../../assets/icons/FileIcon'

const Upload = () => {
    const { register } = useFormContext()

    return (
        <div><div className="p-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                    <ArrowDown />
                    Upload Product
                </div>

                <div className="mt-5">
                    <div className="flex items-center text-slate-500">
                        <span>
                            <Lightbulb />
                        </span>
                        <div className="ml-2">
                            <span className="mr-1">
                                Avoid selling counterfeit products / violating
                                Intellectual Property Rights, so that your products are
                                not deleted.
                            </span>

                        </div>
                    </div>

                    <div className="block sm:flex flex-col items-start mt-10 xl:flex-row">
                        <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right w-full xl:w-64 xl:!mr-10">
                            <div className="text-left">
                                <div className="flex items-center">
                                    <div className="font-medium">Product Photos</div>
                                    <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                        Required
                                    </div>
                                </div>
                                <div className="mt-3 text-xs leading-relaxed text-slate-500">
                                    <div>
                                        The image format is .jpg .jpeg .png and a minimum size
                                        of 300 x 300 pixels (For optimal images use a minimum
                                        size of 700 x 700 pixels).
                                    </div>
                                    <div className="mt-2">
                                        Select product photos or drag and drop up to 5 photos
                                        at once here. Include min. 3 attractive photos to make
                                        the product more attractive to buyers.
                                    </div>
                                </div>
                            </div>
                        </label>

                        <div className="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400">
                            <div className="relative flex items-center justify-center px-4 pb-4 mt-5 cursor-pointer">
                                <span className="mr-1 text-primary">
                                    <FileIcon />
                                    Upload a file</span> or drag and drop<input id="horizontal-form-1" type="file" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 flex-1 absolute top-0 left-0 w-full h-full opacity-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Upload