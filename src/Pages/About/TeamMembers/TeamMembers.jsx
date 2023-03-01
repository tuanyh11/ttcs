import React from 'react';
import Popup from 'reactjs-popup';
import index from '../../../Components/Common/Header';
import PopupDetail from './PopupDetail';

const TeamMembers = ({ teamMembers }) => {
    // const [quickView, setquickView] = useState([]);
    return (
        <div>
            <div className='md:w-[560px] m-auto p-[15px] mb-[10px] w-full'>
                <h2 className='mb-[15px] leading-[32px] text-[27px] text-dark-color font-poppins font-semibold text-center'>
                    Team Members
                </h2>
                <p className='text-center'>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem
                </p>
            </div>
            <div className='flex w-full flex-wrap'>
                {
                    teamMembers.map((item, index) => (

                        <div className='xl:w-1/4 sm:w-1/2 p-[15px] w-full ' key={index} >
                            <div className='p-[35px] border text-center cursor-pointer'>
                                <Popup
                                    className='check-box'
                                    modal
                                    nested
                                    trigger={
                                        <p
                                            style={{ cursor: "pointer" }}
                                            href="#"
                                            className="check-box-list"
                                        >
                                            <div className='relative pb-[30px]'>
                                                <img src={item.image.mediaItemUrl} alt='img' className='m-0 m-auto' />
                                                <div className='absolute right-0 bottom-[35px] bg-main-color text-white w-[45px] h-[45px] leading-[45px] text-center block rounded-full shadow-[0px_10px_30px_0px_rgb(255_69_69/42%)]'>
                                                    <i className="fa-solid fa-plus "></i>
                                                </div>
                                            </div>
                                        </p>
                                    }
                                >{
                                        close => (
                                            <PopupDetail data={item} close={close} />
                                        )
                                    }

                                </Popup>

                                <Popup
                                    className='check-box'
                                    modal
                                    trigger={
                                        <p
                                            style={{ cursor: "pointer" }}
                                            href="#"
                                            className="check-box-list"
                                        >
                                            <h5 className='text-[18px] font-poppins text-dark-color font-semibold'>{item.name}</h5>
                                        </p>
                                    }
                                >
                                    <PopupDetail data={item} />
                                </Popup>

                                <span className='text-main-color'>{item.position}</span>
                            </div>
                        </div>

                    ))
                }

            </div>
        </div>
    );
};

export default TeamMembers;