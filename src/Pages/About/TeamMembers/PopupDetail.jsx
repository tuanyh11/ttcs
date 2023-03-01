import { Markup } from 'interweave';
import React from 'react';

const PopupDetail = ({ data, close }) => {
    // console.log(data);
    return (
        <div className='popup-about relative flex flex-col w-full border-[1px] border-[rgba(0,0,0,.2)] rounded-[5px] bg-white max-w-[500px]'>
            <button className="absolute right-[10px] top-0 text-[24px]" onClick={close}>
                &times;
            </button>
            <div className='p-[51px] text-center '>
                <div className='relative pb-[30px]'>
                    <img src={data.image.mediaItemUrl}
                        className='m-auto'
                    />
                </div>
                <div>
                    <h5 className='text-[18px] font-poppins text-dark-color font-semibold'>{data.name}</h5>
                    <span className='text-main-color mb-5px'>{data.position}</span>
                    <Markup content={data.content} />
                </div>
            </div>
        </div>
    );
};

export default PopupDetail; 