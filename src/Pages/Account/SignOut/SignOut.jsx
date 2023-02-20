import React from 'react';

const SignOut = () => {
    return (
        <>
            <h2 className='text-[27px] mb-[10px] text-[#111111] font-semibold font-poppins'>Register</h2>
            <form method='post'>
                <p className='flex flex-wrap mb-[15px]'>
                    <label className='block w-full mb-[8px]'>Username    <span className='text-[#e4573d]'>*</span> </label>
                    <input type='text'
                        className='w-full h-[50px] px-[20px] py-0 border-[1px] border-[#eaeaea]' />
                </p>
                <p className='flex flex-wrap mb-[15px]'>
                    <label className='block w-full mb-[8px]'>Email address <span className='text-[#e4573d]'>*</span> </label>
                    <input type='text'
                        className='w-full h-[50px] px-[20px] py-0 border-[1px] border-[#eaeaea]' />
                </p>
                <p className='flex flex-wrap mb-[15px]'>
                    <label className='block w-full mb-[8px]'>Password <span className='text-[#e4573d]'>*</span> </label>
                    <input type='text'
                        className='w-full h-[50px] px-[20px] py-0 border-[1px] border-[#eaeaea]' />
                </p>
                <p className='flex flex-wrap mb-[15px]'>
                    <label className='block w-full mb-[8px]'>
                        <span className=''>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our </span>
                    </label>
                    <button
                        className='inline-block cursor-pointer bg-main-color text-[14px] px-[16px] font-semibold leading-[50px] uppercase text-white font-poppins '>Register</button>
                </p>
            </form>
        </>
    );
};

export default SignOut;