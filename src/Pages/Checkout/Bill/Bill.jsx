import React from 'react';

const Bill = () => {
    return (
        <div>
            <div className='relative p-[20px] bg-[#F7F7F7] pl-[35px] mb-[15px]'>
                <i className="fa-solid fa-tag mr-[10px] text-main-color"></i>
                <span>Have a coupon? </span>
                <a href='#'>Click here to enter your code</a>
            </div>
            <div className='pt-[30px]'>
                <div className='flex flex-wrap w-full'>
                    <div className='md:w-1/2 px-[15px] w-full'>
                        <h3 className='text-[27px] mb-[10px] font-poppins font-semibold text-dark-color '>Billing details</h3>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>First name: &nbsp;<span className='text-main-color'>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none'
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Last name: &nbsp;<span className='text-main-color'>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none'
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Country / Region: &nbsp;<span className='text-main-color'>*</span></label>
                            <select className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px]'>
                                <option defaultValue='United Kingdom (UK)' title='United Kingdom (UK)'>United Kingdom (UK)</option>
                                <option defaultValue='United Kingdom (UK)' title='United Kingdom (UK)'>United Kingdom (UK)</option>
                                <option defaultValue='United Kingdom (UK)' title='United Kingdom (UK)'>United Kingdom (UK)</option>
                                <option defaultValue='United Kingdom (UK)' title='United Kingdom (UK)'>United Kingdom (UK)</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Street addres: &nbsp;<span className='text-main-color'>*</span></label>
                            <input type='text' placeholder='House number and street name'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none'
                            />
                            <input type='text' placeholder='Apartment, suite, unit, etc. (optional)'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none '
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Town / City: &nbsp;<span className='text-main-color'>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none'
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Postcode: &nbsp;<span className='text-main-color'>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none'
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Phone : &nbsp;<span className='text-main-color'>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none'
                            />
                        </div>

                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Email address : &nbsp;<span className='text-main-color'>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none'
                            />
                        </div>
                    </div>
                    <div className='md:w-1/2 px-[15px] w-full'>
                        <h3 className='text-[27px] mb-[10px] font-poppins font-semibold text-dark-color '>Additional information</h3>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Order notes <span>(optional)</span></label>
                            <textarea type='text' placeholder='Notes about your order, e.g. special notes for delivery.'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none pt-[10px]'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Bill;