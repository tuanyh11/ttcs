import React from 'react'
import { InputV1, TitleBoxV1 } from '../../../../Components'
import { SubmitHandler, UseFormHandleSubmit, useFormContext } from 'react-hook-form'
import { UserInterface } from '../../../../interfaces/user.interface'

interface Props {
    onSubmit: SubmitHandler<UserInterface>,
    onCancel: () => void,
    onSave: () => void,
    onPersist: () => void,
    passwordRequired?: boolean
}

const FormV1 = ({ onCancel, onPersist, onSave, onSubmit, passwordRequired = true}: Props) => {
    const {register, handleSubmit} = useFormContext<UserInterface>()

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-11 pb-20 mt-5 gap-x-6">
          <div className="col-span-11 intro-y 2xl:col-span-9">
            <div className="p-5 intro-y box">
              <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                <TitleBoxV1 title="User Information" />'
                <div className="mt-5">
                  <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Username</div>
                          <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                            Required
                          </div>
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <InputV1
                        register={() =>
                          register("userName", {
                            required: {
                              value: true,
                              message: "Username is required",
                            },
                            minLength: {
                              value: 2,
                              message:
                                "Username must be at least 2 characters long",
                            },
                            maxLength: {
                              value: 20,
                              message:
                                "Username must be at most 20 characters long",
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
                          <div className="font-medium">Email</div>
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <InputV1
                        register={() =>
                          register("email", {
                            required: {
                              value: true,
                              message: "Email is required",
                            },
                            pattern: {
                              value:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Invalid email address",
                            },
                          })
                        }
                      />
                      <div className="text-xs text-slate-500 mt-2 text-right">
                        Email must be a valid email address
                      </div>
                    </div>
                  </div>

                  <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Password</div>
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <InputV1
                        register={() =>
                          register("password", {
                            required: {
                              value: passwordRequired,
                              message: "Password is required",
                            },
                            minLength: {
                              value: 8,
                              message:
                                "Password must be at least 8 characters long",
                            },
                          })
                        }
                      />
                      <div className="text-xs text-slate-500 mt-2 text-right">
                        Password must be at least 8 characters log
                      </div>
                    </div>
                  </div>

                  <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Password Confirm</div>
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <InputV1
                        register={() =>
                          register("confirmPassword", {
                            required: {
                              value: passwordRequired,
                              message: "Password is required",
                            },
                            minLength: {
                              value: 8,
                              message:
                                "Password must be at least 8 characters long",
                            },
                          })
                        }
                      />
                      <div className="text-xs text-slate-500 mt-2 text-right">
                        Password must be at least 8 characters log
                      </div>
                    </div>
                  </div>

                  <div className="block sm:flex items-center   pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <label htmlFor="isAdmin" className="inline-block cursor-pointer mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Is Admin</div>
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full flex  items-center xl:mt-0">
                        <input type="checkbox" id="admin" className=" cursor-pointer" {...register("admin")} />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-2 mt-5 md:flex-row">
              <button
                type="button"
                onClick={() => onCancel()}
                className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => onPersist()}
                className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
              >
                Save &amp; Add New Category
              </button>
              <button
                type="submit"
                onClick={() => onSave()}
                className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-full py-3 md:w-52"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormV1