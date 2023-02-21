import React from 'react';

const TitleCate = ({ className }) => {
    return (
        <div className={`${className}`}>
            <h2 className='mb-[15px] leading-[32px] text-[27px] text-dark-color font-poppins font-semibold text-center'>Popular Categories</h2>
            <p className='text-center'>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem
            </p>
        </div>
    );
};

export default TitleCate;