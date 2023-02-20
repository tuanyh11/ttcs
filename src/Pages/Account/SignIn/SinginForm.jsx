import React from 'react';
// rsc
const SinginForm = () => {
    return (
        <>
            <h2 className='text-[27px] mb-[10px] text-[#111111] font-semibold font-poppins'>Login</h2>
            <form method='post'>
                <p className='flex flex-wrap mb-[15px]'>
                    <label className='block w-full mb-[8px]'>Username or email address <span className='text-[#e4573d]'>*</span> </label>
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
                        <input type='checkbox' />
                        <span className='ml-[5px]'>Remember me</span>
                    </label>
                    <button
                        className='inline-block cursor-pointer bg-main-color text-[14px] px-[16px] font-semibold leading-[50px] uppercase text-white font-poppins '>Log in</button>
                </p>
                <p>
                    <a href='#'>Lost your password?</a>
                </p>
            </form>
        </>
    );
};

export default SinginForm;