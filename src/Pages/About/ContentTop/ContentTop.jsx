import { Markup } from 'interweave';

const ContentTop = ({ contentTop }) => {
    // console.log(contentTop);
    return (
        <div className='content-top w-full lg:flex '>
            <div className='lg:w-1/2 w-full'>
                <div className='p-[15px]'>
                    <div className='relative'>
                        <img src={contentTop.images[0].image.mediaItemUrl} alt=''
                            className='absolute top-[100px] lg:right-0 right-[10%]' />
                        <div>
                            <img src={contentTop.images[1].image.mediaItemUrl} alt=''
                                className='m-auto' />
                        </div>
                        <div className='absolute bottom-[70px] right-0 p-[10px] rotate-[5deg] bg-white'>
                            <img src={contentTop.images[2].image.mediaItemUrl} alt=''

                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 w-full'>

                <div className='p-[15px]'>
                    <div className='xl:px-[100px] px-0 '>
                        <span className='text-main-color inline-block mb-[10px]' >About Us</span>
                        <h2 className='mb-[15px] text-[27px] leading-[32px] font-poppins font-semibold text-dark-color'>Explore Great Auto - Car Buiness Solutions</h2>
                        <Markup content={contentTop.data} className='content-more' />
                        <a href='#'
                            className='mt-[25px] inline-block font-semibold font-poppins text-white uppercase rounded-[28px] py-[14px] px-[45px] leading-[28px] bg-main-color'>
                            Read more
                            <i className="fa-solid fa-circle-right ml-[10px] text-[14px]"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentTop;