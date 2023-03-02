import moment from 'moment/moment';
import React, { useState } from 'react';
import './style.css';
const WishItems = (props) => {
    // console.log(props.removeItem());
    const [isActive, setIsActive] = useState(false);
    const [active, setActive] = useState('Actions')
    const handleClick = event => {
        setIsActive(current => !current);
    };
    console.log(props);
    const handleAddToCart = function (item) {

        props.addItem(item);
    };
    return (
        <div>
            <form className='s max-w-full '>
                <table className='max-w-full bg-transparent w-full border-gray-500'>
                    <thead>
                        <tr>
                            <th className='product-cb text-center border-[1px] border-[#dee2e6] p-[15px] w-[35px] '>
                                <input type='checkbox' />
                            </th>
                            <th className='product-remove text-center border-[1px] border-[#dee2e6] p-[15px] w-[35px] align-middle '>&nbsp;</th>
                            <th className='product-thumbnail text-center border-[1px] border-[#dee2e6] p-[15px] align-middle min-w-[100px] max-w-full w-[100px] '>&nbsp;</th>
                            <th className='product-name text-center border-[1px] border-[#dee2e6] p-[15px] align-middle '>
                                <span className='tinvwl-full md:block hidden'> Product Name</span>
                                <span className='tinvwl-mobile md:hidden block'> Product</span>
                            </th>
                            <th className='product-price text-center border-[1px] border-[#dee2e6] p-[15px] align-middle '>Unit Price</th>
                            <th className='product-date text-center border-[1px] border-[#dee2e6] p-[15px] align-middle '>Date Added</th>
                            <th className='product-stock text-center border-[1px] border-[#dee2e6] p-[15px] align-middle '>Stock Status</th>
                            <th className='product-action text-center border-[1px] border-[#dee2e6] p-[15px] align-middle w-[180px] '>&nbsp;</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.wishItems.map((item, index) => (
                                <tr key={index}>
                                    <td className='p-[15px] text-left border-[1px] border-[#dee2e6] '><input type='checkbox' /></td>
                                    <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>
                                        <div
                                            className='w-[27px] h-[27px] flex justify-center m-auto rounded-full bg-[#f7f7f7] text-[18px] text-[#000] pt-[3px]'
                                            title='Remove'
                                            onClick={() => props.removeItemWish(item.id)}
                                        >
                                            <i className="fa-solid fa-xmark"></i>
                                        </div>
                                    </td>
                                    <td className='p-[15px] text-left border-[1px] border-[#dee2e6] '>
                                        <a href='#'>
                                            <img src={item.featuredImage.node.mediaItemUrl} alt=''
                                                className='max-w-full h-auto'
                                            />
                                        </a>
                                    </td>
                                    <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>
                                        <a href='#'>{item.name}</a>
                                    </td>

                                    {
                                        item.salePrice !== null ? (
                                            <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>
                                                <span className='line-through'>&pound;{(item.regularPrice).slice(1).replace(/$/g, ' ')}</span>
                                                <span>&pound;{(item.salePrice.slice(1).replace(/$/g, ' '))}</span>
                                            </td>
                                        ) : (
                                            <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>
                                                <span>&pound;{(item.regularPrice).slice(1).replace(/$/g, ' ')}</span>
                                            </td>
                                        )
                                    }


                                    {/* <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>February 23, 2023</td> */}
                                    <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>

                                        {moment(`${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`).format("LL")}
                                    </td>
                                    <td className='p-[15px] text-left border-[1px] border-[#dee2e6]'>
                                        <i className="fa-solid fa-check mr-[5px]"></i>
                                        <span>In Stock</span>
                                    </td>
                                    <td className='p-[15px] text-center border-[1px] border-[#dee2e6]'>
                                        <div
                                            className='cursor-pointer inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[20px] py-[20px] font-poppins text-white lg:px-[16px] lg:py-0 w-full'
                                            onClick={() => handleAddToCart(item)
                                            }
                                        >
                                            <span className='title-add lg:block hidden' >add to cart</span>
                                            <i className="fa-solid fa-cart-shopping lg:hidden block icon-add" ></i>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                        <tr className=' align-middle border-[1px] border-[#dee2e6] text-left '>
                            <td colspan='100' className='p-[15px] text-left '>
                                <div className='float-left lg:w-[35%] w-full table relative'>
                                    <div className={`${isActive === true ? 'border-[#999] shadow-[0_0_0_0.2rem_rgb(0_123_255_/_25%)]' : 'border-[#e8e8e8]'} h-[50px] border-[1px] px-[20px] float-left lg:w-[65%] w-[78%] table-cell leading-[50px] relative z-[1] m-0 cursor-pointer mr-[10px]`}
                                        onClick={handleClick}
                                    >
                                        <span className='text-[14px] text-[#495057]'>{active}</span>
                                        <i className="fa-solid fa-caret-down absolute top-[15px] right-[20px]"></i>
                                        <ul className={`z-[9] bg-white rounded-[5px] shadow-[0_0_0_1px_rgb(68_68_68_/_11%)] mt-[4px] ${isActive === true ? 'opacity-1 animation ' : 'opacity-0'} overflow-hidden p-0 absolute top-full left-0 w-full`}>
                                            <li className={`${active === 'Actions' ? 'bg-[#f6f6f6] font-semibold' : ''} min-h-[40px] pl-[18px] pr-[29px] text-left leading-[40px] hover:bg-[#f6f6f6]`}
                                                onClick={() => setActive('Actions')}
                                            >
                                                Actions
                                            </li>
                                            <li className={`${active === 'Add to Cart' ? 'bg-[#f6f6f6] font-semibold' : ''} min-h-[40px] pl-[18px] pr-[29px] text-left leading-[40px] hover:bg-[#f6f6f6]`}
                                                onClick={() => setActive('Add to Cart')}
                                            >
                                                Add to Cart
                                            </li>
                                            <li className={`${active === 'Remove' ? 'bg-[#f6f6f6] font-semibold' : ''} min-h-[40px] pl-[18px] pr-[29px] text-left leading-[40px] hover:bg-[#f6f6f6]`}
                                                onClick={() => setActive('Remove')}
                                            >
                                                Remove
                                            </li>
                                        </ul>
                                    </div>
                                    <button className='md:block hidden lg:w-[30%] w-[20%] bg-main-color uppercase leading-[50px] font-semibold text-[14px]  font-poppins text-white'>
                                        Apply Action
                                    </button>
                                    <button className='md:hidden block lg:w-[30%] w-[20%] bg-main-color uppercase leading-[50px] font-semibold text-[14px]  font-poppins text-white'>
                                        Apply
                                    </button>
                                </div>
                                <div className='lg:float-right float-left lg:w-[63%] w-full lg:text-right lg:mt-[0px] mt-[10px] md:mb-0 mb-[15px] '>
                                    <button className='btn-selected-to-cart inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white mr-[10px] md:w-auto w-full md:mb-0 mb-[10px]'>
                                        Add Selected to Cart
                                    </button>
                                    <button className='btn-all-to-cart inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white md:w-auto w-full'>
                                        Add All to Cart
                                    </button>
                                </div>

                            </td>
                        </tr>

                    </tbody>

                </table>

                <div className="social-buttons float-right mt-[30px]">
                    <span className='mr-[27px]'>Share on</span>
                    <ul className='inline-flex align-middle text-center justify-center items-center'>
                        <li className='w-[40px] h-[40px] pt-[5px]'><a href="#" title="Facebook" ><i className="fa-brands fa-facebook-f text-[20px]"></i></a></li>
                        <li className='w-[40px] h-[40px] pt-[5px]'><a href="#" title="Twitter"><i className="fa-brands fa-twitter text-[20px]"></i></a></li>
                        <li className='w-[40px] h-[40px] pt-[5px]'><a href="#" title="Pinterest"><i className="fa-brands fa-pinterest-p text-[20px]"></i></a></li>
                        <li className='w-[40px] h-[40px] pt-[5px]'><a href="#" title="WhatsApp"><i className="fa-brands fa-whatsapp text-[20px]"></i></a></li>
                        <li className='w-[40px] h-[40px] pt-[5px]'><a href="mailto:?" title="Email"><i className="fa-solid fa-envelope text-[20px]"></i></a></li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default WishItems;