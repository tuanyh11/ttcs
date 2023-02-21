import React from 'react';

const BreadcrumbPath = ({ pathname }) => {
    return (
        <div className='elementor flex relative ml-auto mr-auto h-64 '>
            <div className='relative z-[1] w-full flex h-full bg-[url(https://klbtheme.com/chakta/wp-content/plugins/chakta-core/elementor/images/breadcrumb.jpg)] 
       after:absolute after:w-full after:h-full after:top-0 after:left-0 after:-z-[1] after:bg-[#191a1bce] bg-center bg-cover bg-no-repeat py-20'>
                <div className='max-w-[1200px] mx-auto px-4 w-full'>
                    <div className='flex justify-center flex-wrap'>
                        <div className='w-2/3'>
                            <div className='relative px-4 w-full'>
                                <div className="breadcrumbs-content text-center">
                                    <h1 className='text-white font-semibold md:text-[60px] text-[32px] mb-3'>{pathname}</h1>
                                    <ul className="breadcrumb-menu mt-[25px]">
                                        <li className='inline-block uppercase'><a href="#" className='text-white' title="Home" rel="bookmark">Home</a> </li>
                                        <li className='inline-block'>
                                            <i className="fa-solid fa-angle-right text-white ml-3 mr-2"></i>
                                        </li>
                                        <li className='inline-block uppercase'><span className='text-[#ff4545]'>{pathname}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadcrumbPath;