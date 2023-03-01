import React, { useState } from "react";
import { Col, Row } from "../../../Components";

const ContactFromRight = ({ updateContacts, setMess, contacts, mess }) => {
    // console.log(props);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    let list = {
        'name': name,
        'email': email,
        'subject': subject,
    }
    // console.log(list);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (list !== null && list.name !== '' && list.email !== '' && list.subject !== '') {
            // updateContacts(list);
            // setMess(true);
            console.log(list);

        } else {
            console.log('error');
        }
    }


    return (
        <div className="w-full">
            <div className="py-20 px-10 bg-[#F5F7FA]">
                <form className='contact-form' method="post">
                    <div className="form-wapper">
                        <Row className={''}>
                            <Col className={'sm:w-1/2 w-full mb-[20px]'}>
                                <div className="form-group w-full relative">
                                    <input className="w-full h-[70px] mb-[10px] px-5 focus:outline-none text-dark-color"
                                        type='text'
                                        placeholder="Your Name"
                                        name="name"
                                        onChange={e => setName(e.target.value)}
                                    />
                                    {
                                        list.name === '' ? (
                                            <span className=" mb-[20px] text-[#dc3232] text-[]">The field is required.</span>

                                        ) : (
                                            null
                                        )
                                    }
                                    <i className="fa-regular fa-user absolute text-[#ff4545] top-5 right-5 text-[14px] font-light"></i>
                                </div>
                            </Col>
                            <Col className={'sm:w-1/2 w-full mb-[20px]'}>
                                <div className="form-group w-full relative">
                                    <input className="w-full h-[70px] mb-[10px] px-5 focus:outline-none text-dark-color"
                                        type='email'
                                        placeholder="Your Email"
                                        name="email"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    {
                                        list.email === '' ? (
                                            <span className=" mb-[20px] text-[#dc3232] text-[]">The field is required.</span>
                                        ) : (null)}

                                    <i className="fa-regular fa-envelope absolute text-[#ff4545] top-5 right-5 text-[14px] font-light"></i>
                                </div>
                            </Col>
                            <Col className={'w-full mb-[20px]'}>
                                <div className="form-group w-full relative">
                                    <input className="w-full h-[70px] mb-[10px] px-5 focus:outline-none text-dark-color"
                                        type='text'
                                        placeholder="Subject"
                                        name="subject"
                                        onChange={e => setSubject(e.target.value)}

                                    />
                                    {
                                        list.subject === '' ? (
                                            <span className=" mb-[20px] text-[#dc3232] text-[]">The field is required.</span>

                                        ) : (null)}
                                    <i className="fa-regular fa-paper-plane absolute text-[#ff4545] top-5 right-5 text-[14px] font-light"></i>
                                </div>
                            </Col>
                            <Col className={'w-full mb-[20px]'}>
                                <div className="form-group w-full relative">
                                    <textarea
                                        rows={10}
                                        cols={40}
                                        className="w-full h-[70px] mb-8 px-4 py-3 focus:outline-none text-dark-color"
                                        placeholder="Your Message"
                                        name="message"

                                    />
                                    <i className="fa-solid fa-pencil absolute text-[#ff4545] top-5 right-5 text-[14px]"></i>
                                </div>
                            </Col>
                            <Col className={'w-full'}>
                                <div className="form-group w-full relative">
                                    <div className="bg-[#ff4545] text-[14px] py-0 px-4 inline-block font-semibold text-white uppercase
                                    leading-[50px] cursor-pointer w-36 focus:outline-none"
                                        onClick={handleSubmit}>
                                        Send Message
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </form>
            </div >
        </div >
    );
}
export default ContactFromRight;