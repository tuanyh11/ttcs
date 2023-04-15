import React from 'react';
import { Link } from 'react-router-dom';
import ReviewStar from '../../../Components/Common/ReviewStar/ReviewStar';

const ItemCate = ({ className, item }) => {
    return (
        <div className={`${className}`}>
            <div className='flex flex-wrap bg-white items-center w-full'>
                <div className='md:w-1/2 w-full'>
                    <a href='#'>
                        <img src={item.image} alt='img'></img>
                    </a>
                </div>
                <div className='md:w-1/2 w-full'>
                    <div className='pt-[10px] px-[15px] pb-[15px]'>
                        <ReviewStar starNumber={item.rating} className={'flex'} />
                        <h3 className='text-[22px] font-medium mb-[13px] text-dark-color font-poppins hover:text-main-color transition-all'>
                            <Link to={`/categories/${item.slug}`}>{item.name}</Link>
                        </h3>
                        <p className='pb-[15px] text-[#646a7c]'>
                            {item.description}
                        </p>
                        <Link to={`/categories/${item.slug}`}
                            className='inline-block font-semibold font-poppins text-white uppercase rounded-[28px] py-[6px] px-[17px] leading-[23px] bg-main-color text-[14px]'>
                            Shop Now <i className="fa-solid fa-circle-right ml-[10px] text-[14px] "></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCate;