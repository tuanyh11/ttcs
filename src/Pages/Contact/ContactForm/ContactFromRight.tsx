import React, { useState } from "react";
import { Col, Row } from "../../../Components";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ContactFromRight = ({ updateContacts, setMess, contacts, mess }) => {
  // console.log(props);
  const contactSchema = object().shape({
    name: string().required("Tên không được bỏ trống"),
    email: string()
      .email("Email không đúng định dạng")
      .required("Email không được bỏ trống"),
    subject: string().required("Chủ thể không được bỏ trống"),
    message: string().optional(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  console.log(errors)

  return (
    <div className="w-full">
      <div className="py-20 px-10 bg-[#F5F7FA]">
        <form onSubmit={handleSubmit(handleOnSubmit)} className="contact-form">
          <div className="form-wapper">
            <Row className={""}>
              <Col className={"sm:w-1/2 w-full mb-[20px]"}>
                <div className="form-group w-full relative">
                  <input
                    className="w-full h-[70px] mb-[10px] px-5 focus:outline-none text-[#000]"
                    type="text"
                    placeholder="Tên của bạn"
                    {...register("name")}
                  />
                  {errors?.name && (
                    <span className=" mb-[20px] text-[#dc3232] text-[]">
                      {errors?.name?.message as string}
                    </span>
                  )}
                  <i className="fa-regular fa-user absolute text-[#ff4545] top-5 right-5 text-[14px] font-light"></i>
                </div>
              </Col>
              <Col className={"sm:w-1/2 w-full mb-[20px]"}>
                <div className="form-group w-full relative">
                  <input
                    className="w-full h-[70px] mb-[10px] px-5 focus:outline-none text-[#000]"
                    placeholder="Email của bạn"
                    {...register("email")}
                  />
                  {errors?.email && (
                    <span className=" mb-[20px] text-[#dc3232] text-[]">
                      {errors?.email?.message as string}
                    </span>
                  )}

                  <i className="fa-regular fa-envelope absolute text-[#ff4545] top-5 right-5 text-[14px] font-light"></i>
                </div>
              </Col>
              <Col className={"w-full mb-[20px]"}>
                <div className="form-group w-full relative">
                  <input
                    className="w-full h-[70px] mb-[10px] px-5 focus:outline-none text-[#000]"
                    type="text"
                    placeholder="Chủ thể "
                    {...register("subject")}
                  />
                  {errors?.subject && (
                    <span className=" mb-[20px] text-[#dc3232] text-[]">
                      {errors?.subject?.message as string}
                    </span>
                  )}
                  <i className="fa-regular fa-paper-plane absolute text-[#ff4545] top-5 right-5 text-[14px] font-light"></i>
                </div>
              </Col>
              <Col className={"w-full mb-[20px]"}>
                <div className="form-group w-full relative">
                  <textarea
                    rows={10}
                    cols={40}
                    className="w-full h-[70px] mb-8 px-4 py-3 focus:outline-none text-[#000]"
                    placeholder="Lời nhắn của bạn"
                    {...register("message")}
                  />
                  <i className="fa-solid fa-pencil absolute text-[#ff4545] top-5 right-5 text-[14px]"></i>
                </div>
              </Col>
              <Col className={"w-full"}>
                <div className="form-group w-full relative">
                  <button
                    type="submit"
                    className="bg-[#ff4545] text-[14px] py-0 px-4 inline-block font-semibold text-white uppercase
                                    leading-[50px] cursor-pointer w-36 focus:outline-none"
                  >
                    Gửi Lời Nhắn
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactFromRight;
