import React from 'react';

const LatestNew = () => {
    const dt = [
        { name: '1' },
        { name: '1' },
        { name: '1' },
    ];
    return (
        <div>
            <div className='md:w-[560px] m-auto p-[15px] mb-[10px] w-full'>
                <h2 className='mb-[15px] leading-[32px] text-[27px] text-dark-color font-poppins font-semibold text-center'>
                    Latest News & Blog
                </h2>
                <p className='text-center'>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem
                </p>
            </div>
            <div className='flex w-full flex-wrap'>
                {
                    dt.map((item, index) => (
                        <div className='lg:w-1/3 px-[15px] mb-[30px] w-full' key={index}>
                            <div className='relative'>
                                <a href='#'>
                                    <img src='https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-3-370x360.jpg' alt='' className='w-full' />
                                </a>
                                <div className='latess-new-content flex lg:p-[40px] p-[20px] '>
                                    <div>
                                        <ul className='w-full'>
                                            <li className='text-white'>
                                                <span>
                                                    <i className="fa-solid fa-calendar-days mr-[10px]"></i>
                                                    <a href='#'>9 Jan 2021</a>
                                                </span>
                                            </li>
                                        </ul>
                                        <div className='mb-[20px]'><a href='#' className='text-white text-[20px] leading-[32px] font-medium tracking-[-0.4px]'>But I must explain to you how all this mistaken idea</a></div>
                                        <a href='#'
                                            className='uppercase font-semibold font-poppins text-[14px] py-[7px] px-[19px] bg-main-color rounded-[28px] text-white'>
                                            Read more
                                            <i className="fa-solid fa-circle-right ml-[10px] text-[14px] uppercase text-white"></i>
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default LatestNew;