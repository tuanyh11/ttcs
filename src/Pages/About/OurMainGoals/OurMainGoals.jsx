import { Markup } from 'interweave';
import React from 'react';

const OurMainGoals = ({ ourMainGoals }) => {
    // console.log(ourMainGoals);
    return (
        <div>
            <div className='md:w-[560px] m-auto p-[15px] mb-[10px] w-full'>
                <h2 className='mb-[15px] leading-[32px] text-[27px] text-dark-color font-poppins font-semibold text-center'>
                    Our Main Goals
                </h2>
                <p className='text-center'>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem
                </p>
            </div>
            <div className='flex w-full flex-wrap'>
                {ourMainGoals.map((item, index) => (
                    <div className='md:w-1/3 p-[15px] w-full' key={index}>
                        <div className='bg-white xl:py-[55px] xl:px-[50px] p-[15px] text-center'>
                            <div className='flex items-center justify-center bg-main-color w-[130px] h-[130px] rounded-full mx-auto mb-[30px]'>
                                <img src={item.image.mediaItemUrl} />
                            </div>
                            <h5 className='pb-[10px] text-[18px] text-dark-color font-semibold font-poppins'>{item.title}</h5>
                            <Markup content={item.content} />
                            <a href='#'
                                className='uppercase inline-block font-semibold font-poppins text-[14px] py-[7px] px-[19px] bg-[#f7f7f7] rounded-[28px] mt-[25px]'>
                                Read more
                                <i className="fa-solid fa-circle-right ml-[10px] text-[14px] uppercase "></i></a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default OurMainGoals;