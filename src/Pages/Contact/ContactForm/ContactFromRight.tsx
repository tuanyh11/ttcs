import React from "react";
import { Col, Row } from "../../../Components";

const ContactFromRight = () => {
    return (
        <div className="w-full">
            <div className="py-20 px-10 bg-[#F5F7FA]">
                <form className='contact-form' method="post">
                    <div className="form-wapper">
                        <Row className={''}>
                            <Col className={'sm:w-1/2 w-full'}>
                                <div className="form-group w-full relative">
                                    <input className="w-full h-[70px] mb-8 px-5" type='text' placeholder="Your name" />
                                    <i className="fa-regular fa-user absolute text-[#ff4545] top-5 right-5 text-[14px]"></i>
                                </div>
                            </Col>
                            <Col className={'sm:w-1/2 w-full'}>
                                <div className="form-group w-full relative">
                                    <input className="w-full h-[70px] mb-8 px-5" type='email' placeholder="Your name" />
                                    <i className="fa-regular fa-envelope absolute text-[#ff4545] top-5 right-5 text-[14px]"></i>
                                </div>
                            </Col>
                            <Col className={'w-full'}>
                                <div className="form-group w-full relative">
                                    <input className="w-full h-[70px] mb-8 px-5" type='text' placeholder="Your name" />
                                    <i className="fa-regular fa-paper-plane absolute text-[#ff4545] top-5 right-5 text-[14px]"></i>
                                </div>
                            </Col>
                            <Col className={'w-full'}>
                                <div className="form-group w-full relative">
                                    <textarea className="w-full h-[70px] mb-8 px-4 py-3" placeholder="Your name" />
                                    <i className="fa-solid fa-pencil absolute text-[#ff4545] top-5 right-5 text-[14px]"></i>
                                </div>
                            </Col>
                            <Col className={'w-full'}>
                                <div className="form-group w-full relative">
                                    <input className="bg-[#ff4545] text-[14px] py-0 px-4 inline-block font-semibold text-white uppercase
                                    leading-[50px] cursor-pointer w-36" type='text' defaultValue='Send Message' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ContactFromRight;