import moment from 'moment/moment';
import React from 'react';
import { Link } from 'react-router-dom';

const LatestNew = ({ blogData }) => {
    console.log(blogData[0]);
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
                    blogData.slice(0, 3).map((item, index) => (
                        <div className='lg:w-1/3 px-[15px] mb-[30px] w-full' key={index}>
                            <div className='relative'>
                                <a href='#'>
                                    <img src={item.node.acf_post.component[0].image.mediaItemUrl} alt='' className='w-full' />
                                </a>
                                <div className='latess-new-content flex lg:p-[40px] p-[20px] '>
                                    <div>
                                        <ul className='w-full'>
                                            <li className='text-white '>
                                                <span className='hover:text-main-color transition-all'>
                                                    <i className="fa-solid fa-calendar-days mr-[10px]"></i>
                                                    <a href='#'>{moment(item.node.date).format("D MMMM YYYY")}</a>
                                                </span>
                                            </li>
                                        </ul>
                                        <div className='mb-[20px]'>
                                            <Link to={`/blog`} className='text-white text-[20px] leading-[32px] font-medium tracking-[-0.4px] hover:text-main-color transition-all'>
                                                {item.node.title}
                                            </Link>
                                        </div>
                                        <Link to={`/blog`}
                                            className='uppercase font-semibold font-poppins text-[14px] py-[7px] px-[19px] bg-main-color rounded-[28px] text-white leading-[21px] hover:text-dark-color hover:bg-white transition-all'>
                                            Read more
                                            <i className="fa-solid fa-circle-right ml-[10px] text-[14px] uppercase "></i>
                                        </Link>
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