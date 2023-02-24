import React from 'react';

const CartList = () => {
    return (
        <form>
            <table className='max-w-full bg-transparent w-full border-gray-500'>
                <thead>
                    <tr>
                        <th className='text-center border-[1px] border-[#dee2e6] p-[8px]'>&nbsp;</th>
                        <th className='text-center border-[1px] border-[#dee2e6] p-[8px]'>Product</th>
                        <th className='text-center border-[1px] border-[#dee2e6] p-[8px]'>Price</th>
                        <th className='text-center border-[1px] border-[#dee2e6] p-[8px]'>Quantity</th>
                        <th className='text-center border-[1px] border-[#dee2e6] p-[8px]'>Subtotal</th>
                        <th className='text-center border-[1px] border-[#dee2e6] p-[8px]'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]'>
                            <a href='#'>
                                <img src='https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-6-90x90.jpg' alt=''
                                    className='text-center m-auto' />
                            </a>
                        </td>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]'><a href='#'>Winter Royal Black Tire</a></td>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]'>&pound; 80.00</td>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]'>
                            <div className='inline-flex justify-self-stretch'>
                                <div className='dec w-[50px] h-[50px] bg-transparent border-[1px] border-[#eaeaea] cursor-pointer text-center pt-[10px] '><i className="fa-solid fa-minus"></i></div>
                                <input className='w-[50px] h-auto bg-transparent border-[1px] border-[#eaeaea] text-center focus:outline-none' value='1' type='text' />
                                <div className='inc w-[50px] h-[50px] bg-transparent border-[1px] border-[#eaeaea] cursor-pointer text-center pt-[10px]'><i className="fa-solid fa-plus"></i></div>
                            </div>
                        </td>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]' >&pound; 80.00</td>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px] cursor-pointer'><i className="fa-solid fa-xmark"></i></td>
                    </tr>
                    <tr>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]'>
                            <a href='#'>
                                <img src='https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-6-90x90.jpg' alt=''
                                    className='text-center m-auto' />
                            </a>
                        </td>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]'><a href='#'>Winter Royal Black Tire</a></td>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]'>&pound; 80.00</td>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]'>
                            <div className='inline-flex justify-self-stretch'>
                                <div className='dec w-[50px] h-[50px] bg-transparent border-[1px] border-[#eaeaea] cursor-pointer text-center pt-[10px] '><i className="fa-solid fa-minus"></i></div>
                                <input className='w-[50px] h-auto bg-transparent border-[1px] border-[#eaeaea] text-center focus:outline-none' value='1' type='text' />
                                <div className='inc w-[50px] h-[50px] bg-transparent border-[1px] border-[#eaeaea] cursor-pointer text-center pt-[10px]'><i className="fa-solid fa-plus"></i></div>
                            </div>
                        </td>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]' >&pound; 80.00</td>
                        <td className='border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px] cursor-pointer'><i className="fa-solid fa-xmark"></i></td>
                    </tr>
                </tbody>

            </table>
            <div className='border-x-[1px] border-b-[1px] py-[20px] px-[10px] flex justify-between'>
                <div className=''>
                    <input className='h-[50px] border-[1px] border[#eaeaea] px-[20px] float-left focus:outline-none'
                        type='text' placeholder='Coupon code' />
                    <button className='inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white'>Apply coupon</button>
                </div>
                <button className='inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white opacity-[0.7]'>Update cart</button>
            </div>
        </form>
    );
};

export default CartList;