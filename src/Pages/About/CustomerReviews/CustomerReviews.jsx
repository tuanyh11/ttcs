import { Markup } from 'interweave';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomerReviews = ({ customerReviews }) => {
    // console.log(customerReviews);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

        ]
    };
    return (
        <div>
            <div className='md:w-[560px] m-auto p-[15px] mb-[10px] w-full'>
                <h2 className='mb-[15px] leading-[32px] text-[27px] text-dark-color font-poppins font-semibold text-center'>
                    Customer Reviews
                </h2>
                <p className='text-center'>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem
                </p>
            </div>
            <Slider {...settings}>
                {
                    customerReviews.map((item, index) => (
                        <div className='px-[15px]' key={index}>
                            <div className='ml-[30px] mb-[30px] flex items-center'>
                                <div className=''>
                                    <img src={item.image.mediaItemUrl} />
                                </div>
                                <div className='ml-[15px]'>
                                    <h5 className=' text-[18px] text-dark-color font-semibold font-poppins'>{item.name}</h5>
                                    <span className='text-main-color'>{item.position}</span>
                                </div>

                            </div>
                            <div className='relative bg-white lg:p-[40px] p-[20px]'>
                                <Markup content={item.contentData} className='content-custom-review' />
                            </div>
                        </div>
                    ))
                }

            </Slider>

        </div>
    );
};

export default CustomerReviews;