import React from 'react';
import { Link } from 'react-router-dom';
import ReviewStar from '../../../Components/Common/ReviewStar/ReviewStar';

const ItemCate = ({ className, item }) => {
    console.log(item);
    return (
        <div className={`${className}`}>
            <div className='flex flex-wrap bg-white items-center w-full'>
                <div className='w-1/2'>
                    <a href='#'>
                        <img src={item.node.image.mediaItemUrl} alt='img'></img>
                    </a>
                </div>
                <div className='w-1/2'>
                    <div className='pt-[10px] px-[15px] pb-[15px]'>
                        <ReviewStar starNumber={5} className={'flex'} />
                        <h3 className='text-[22px] font-medium mb-[13px] text-dark-color font-poppins'>
                            <Link to={`/categories/${item.node.slug}`}>{item.node.name}</Link>
                        </h3>
                        <p className='pb-[15px] text-[#646a7c]'>
                            {item.node.description}
                        </p>
                        <Link to={`/categories/${item.node.slug}`}
                            className='inline-block font-semibold font-poppins text-white uppercase rounded-[28px] py-[6px] px-[17px] leading-[23px] bg-main-color'>
                            Shop Now <i className="fa-solid fa-circle-right ml-[10px] text-[14px] "></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCate;