import React from "react";
const ContactFromLeft = () => {
    return (
        <div className="w-full relative">
            <div className="p-2.5">
                <div className="contact-info-list px-0 py-12">
                    <div className=" mb-7 relative pl-20 ">
                        <i className="fa-solid fa-map-location-dot absolute top-0 left-0 bg-[#ff4545] w-14 h-14 flex items-center justify-center rounded-md text-white
                        text-[25px]"></i>
                        <div className="content">
                            <h5 className="mb-3 text-[18px] font-semibold text-[#111111] font-poppins">Main Address</h5>
                            <p className="text-[#646a7c] text-[18px] leading-7">205 Main Street, 5th Floor D - Block, New York</p>
                        </div>
                    </div>
                    <div className=" mb-7 relative pl-20 ">
                        <i className="fa-solid fa-envelope-open-text absolute top-0 left-0 bg-[#ff4545] w-14 h-14 flex items-center justify-center rounded-md text-white
                        text-[25px]"></i>
                        <div className="content">
                            <h5 className="mb-3 text-[18px] font-semibold text-[#111111] font-poppins">Email Address</h5>
                            <p className="text-[#646a7c] text-[18px] leading-7">
                                support@example.com
                                <br />
                                chakta@example.com
                            </p>
                        </div>
                    </div>
                    <div className=" mb-7 relative pl-20 ">
                        <i className="fa-solid fa-phone-flip absolute top-0 left-0 bg-[#ff4545] w-14 h-14 flex items-center justify-center rounded-md text-white
                        text-[25px]"></i>
                        <div className="content">
                            <h5 className="mb-3 text-[18px] font-semibold text-[#111111] font-poppins">Phone number</h5>
                            <p className="text-[#646a7c] text-[18px] leading-7">
                                +012 (345) 78967
                                <br />
                                +010 (345) 78967
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ContactFromLeft;