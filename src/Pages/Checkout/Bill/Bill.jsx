import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import dataCountry from '../../../assets/country_code_and_details.json';
const Bill = () => {
    const [country, setCountry] = useState('United Kingdom (UK)');
    // console.log(country);
    const [showDropdown, setShowDropDown] = useState(false);
    const handleItemClickDropdown = (event) => {
        if (showDropdown == true) {
            setShowDropDown(false);
        } else {
            setShowDropDown(true);
            event.stopPropagation();
        }
    };
    const useOutsideClick = (callback) => {
        const refdr = useRef();

        useEffect(() => {
            const handleItemClickDropdown = (event) => {
                if (refdr.current && !refdr.current.contains(event.target)) {
                    callback();
                }
            };

            document.addEventListener('click', handleItemClickDropdown);

            return () => {
                document.removeEventListener('click', handleItemClickDropdown);
            };
        }, [refdr]);

        return refdr;
    };
    const handleClickOutsideDropdown = () => {
        setShowDropDown(false);
    };
    const refdropdown = useOutsideClick(handleClickOutsideDropdown)

    return (
        <div>
            <div className='relative p-[20px] bg-[#F7F7F7] pl-[35px] mb-[15px]'>
                <i className="fa-regular fa-tag mr-[10px] text-main-color text-[15px]"></i>
                <span>Have a coupon? </span>
                <a href='#'>Click here to enter your code</a>
            </div>
            <div className='pt-[30px]'>
                <div className='flex flex-wrap w-full'>
                    <div className='md:w-1/2 sm:px-[15px] px-0 w-full'>
                        <h3 className='text-[27px] mb-[10px] font-poppins font-semibold text-dark-color '>Billing details</h3>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>First name: &nbsp;<span className='text-main-color' style={{ textDecoration: 'underline dotted' }}>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]'
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Last name: &nbsp;<span className='text-main-color' style={{ textDecoration: 'underline dotted' }}>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]'
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Company name <span>(optional)</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]'
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal w-full'>Country / Region: &nbsp;<span className='text-main-color' style={{ textDecoration: 'underline dotted' }}>*</span></label>
                            <div className={`relative w-full`}>
                                <div className={`w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#696969] cursor-pointer `}
                                    onClick={(event) => handleItemClickDropdown(event)}

                                >
                                    <span className='leading-[50px]'>{country}</span>
                                    <i className="fa-solid fa-caret-down absolute h-[50px] top-[30%] right-[1px] w-[20px]"></i>
                                </div>


                                <div ref={refdropdown}
                                    className={`${showDropdown === true ? 'block' : 'hidden'} bg-[#fff] w-full border-[1px] border-[#eaeaea] absolute left-0`}
                                >
                                    <input type='text' placeholder=''
                                        className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000] '
                                    />
                                    <ul className='h-[180px] overflow-y-auto'>
                                        {
                                            dataCountry.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className={`${country === item.country_name ? 'bg-[#ddd]' : ''} text-[#696969] cursor-pointer p-[6px] hover:bg-[#0073aa] hover:text-[#fff] `}
                                                    onClick={() => setCountry(item.country_name)}
                                                >
                                                    {item.country_name}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Street addres: &nbsp;<span className='text-main-color' style={{ textDecoration: 'underline dotted' }}>*</span></label>
                            <input type='text' placeholder='House number and street name'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]'
                            />
                            <input type='text' placeholder='Apartment, suite, unit, etc. (optional)'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]'
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Town / City: &nbsp;<span className='text-main-color' style={{ textDecoration: 'underline dotted' }}>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]'
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Postcode: &nbsp;<span className='text-main-color' style={{ textDecoration: 'underline dotted' }}>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]'
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Phone : &nbsp;<span className='text-main-color' style={{ textDecoration: 'underline dotted' }}>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]'
                            />
                        </div>

                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Email address : &nbsp;<span className='text-main-color' style={{ textDecoration: 'underline dotted' }}>*</span></label>
                            <input type='text'
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]'
                            />
                        </div>
                    </div>
                    <div className='md:w-1/2 sm:px-[15px] px-0 w-full'>
                        <h3 className='text-[27px] mb-[10px] font-poppins font-semibold text-dark-color '>Additional information</h3>
                        <div className='flex flex-wrap'>
                            <label className='mb-[5px] font-normal'>Order notes <span>(optional)</span></label>
                            <textarea type='text' placeholder='Notes about your order, e.g. special notes for delivery.' style={{ height: '102px' }}
                                className='w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none pt-[10px] text-[#000]'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Bill;