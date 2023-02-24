import React from 'react';

const WishItems = () => {
    return (
        <div>
            <form className='overflow-x-auto max-w-full '>
                <table className='max-w-full bg-transparent w-full border-gray-500'>
                    <thead>
                        <tr>
                            <th className='text-center border-[1px] border-[#dee2e6] p-[15px] '>
                                <input type='checkbox' />
                            </th>
                            <th className='text-center border-[1px] border-[#dee2e6] p-[15px]'>&nbsp;</th>
                            <th className='text-center border-[1px] border-[#dee2e6] p-[15px]'>&nbsp;</th>
                            <th className='text-center border-[1px] border-[#dee2e6] p-[15px]'>Product Name</th>
                            <th className='text-center border-[1px] border-[#dee2e6] p-[15px]'>Unit Price</th>
                            <th className='text-center border-[1px] border-[#dee2e6] p-[15px]'>Date Added</th>
                            <th className='text-center border-[1px] border-[#dee2e6] p-[15px]'>Stock Status</th>
                            <th className='text-center border-[1px] border-[#dee2e6] p-[15px]'>&nbsp;</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'><input type='checkbox' /></td>
                            <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>
                                <button className='w-[27px] h-[27px] flex justify-center m-auto rounded-full bg-[#f7f7f7] text-[18px] text-dark-color pt-[3px]'
                                    title='Remove'>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </td>
                            <td className='p-[15px] text-left border-[1px] border-[#dee2e6] '>
                                <a href='#'>
                                    <img src='https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-6-90x90.jpg' alt=''
                                        className='m-auto md:max-w'
                                    />
                                </a>
                            </td>
                            <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>
                                <a href='#'>Carbon Ceramic Brake Kit</a>
                            </td>
                            <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>&pound; 80.00</td>
                            <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>February 23, 2023</td>
                            <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>
                                <i className="fa-solid fa-check mr-[5px]"></i>
                                <span>In Stock</span>
                            </td>
                            <td className='p-[15px] text-center border-[1px] border-[#dee2e6]'>
                                <button className='inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[20px] py-[20px]  font-poppins text-white lg:px-[16px] lg:py-0'>
                                    <span className='lg:block hidden' >add to cart</span>
                                    <i className="fa-solid fa-cart-shopping lg:hidden block" ></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <div className='border-x-[1px] border-b-[1px] py-[20px] px-[10px] flex justify-between '>
                    <div >
                        <input className='h-[50px] border-[1px] border[#eaeaea] px-[20px] float-left focus:outline-none lg:w-auto'
                            type='text' placeholder='Coupon code' />
                        <button className=' bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white'>
                            Apply Action
                        </button>
                    </div>
                    <div>
                        <button className='inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white mr-[10px]'>
                            Add Selected to Cart
                        </button>
                        <button className='inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white '>
                            Add All to Cart
                        </button>
                    </div>

                </div>
                <div className="social-buttons float-right mt-[30px]">
                    <span className='mr-[27px]'>Share on</span>
                    <ul className='inline-flex align-middle text-center justify-center items-center'>
                        <li className='w-[40px] h-[40px] pt-[5px]'><a href="#" title="Facebook" ><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li className='w-[40px] h-[40px] pt-[5px]'><a href="#" title="Twitter"><i className="fa-brands fa-twitter"></i></a></li>
                        <li className='w-[40px] h-[40px] pt-[5px]'><a href="#" title="Pinterest"><i className="fa-brands fa-pinterest-p"></i></a></li>
                        <li className='w-[40px] h-[40px] pt-[5px]'><a href="#" title="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a></li>
                        <li className='w-[40px] h-[40px] pt-[5px]'><a href="mailto:?" title="Email"><i className="fa-solid fa-envelope"></i></a></li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default WishItems;