import React from "react";
import { Link } from "react-router-dom";
import { fakeData } from "../../../assets/data";
import { ButtonArrow, Col, Container, Row } from "../../../Components";
import { useDate } from "../../../hooks";

const blogData = fakeData(3, (i) => {
    const minDate = new Date().getTime();
    // Generate a random number between minDate and minDate + 100 days
    const maxDate = minDate + 100 * 24 * 60 * 60 * 1000;
    const timestamp = Math.floor(Math.random() * (maxDate - minDate) + minDate);
    // Create a new date object from the timestamp
    return {
    id: i + 1,
      title: "25% BIG OFFER ",
      desc: `But I must explain to you how all this mistaken idea ${i + 1}`,
      createdAt: timestamp,
      image: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-1-370x360.jpg`,
    };
  });
 
const LastestBlog = () => {
  return (
    <div>
      <div className="pt-[65px] pb-20">
        <Container>
          <div className="md:p-[15px]  text-center flex justify-center">
            <div className="w-full md:w-9/12 lg:w-6/12 mb-[25px]">
              <h2 className="mb-[15px] font-poppins text-[27px] text-black leading-[32px] font-semibold">
                Latest News & Blog{" "}
              </h2>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur vel illum dolorem
              </p>
            </div>
          </div>
          <div className="">
            <Row>
              {blogData.map((blog) => {
                return (
                  <Col key={blog.id} className={"w-full mb-[30px] lg:mb-0 lg:w-4/12"}>
                    <div className=" relative ">
                      <Link to={"/"}>
                        <img src={blog.image} alt="" className="w-full" />
                      </Link>
                      <div className=" absolute home-banner after:absolute after:inset-0 after:z-0  inset-0 p-10 flex justify-end flex-col text-white">
                        <div className="z-20">
                          <div className="">
                            <i className="mr-[10px]  fa-regular fa-calendar-days"></i>
                            <Link to="/">{useDate()(blog?.createdAt)}</Link>
                          </div>
                          <p className=" text-[20px] font-poppins font-medium mb-5">
                            {blog.desc}
                          </p>
                          <div className="">
                            <ButtonArrow
                              className={
                                "leading-[21px] rounded-[28px] py-[7px] px-[19px] "
                              }
                            >
                              Read More
                            </ButtonArrow>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LastestBlog;
