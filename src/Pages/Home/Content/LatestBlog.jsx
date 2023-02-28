import React from "react";
import { Link } from "react-router-dom";
import { ButtonArrow, Col, Container, Row } from "../../../Components";
import { useDate } from "../../../hooks";

const LatestBlog = ({ data }) => {
  return (
    <div>
      <div className="pt-[65px] pb-20">
        <Container>
          <div className="md:p-[15px]  text-center flex justify-center">
            <div className="w-full md:w-9/12 lg:w-6/12 mb-[25px]">
              <h2 className="mb-[15px] font-poppins text-[27px] text-dark-color leading-[32px] font-semibold">
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
              {data?.map((item) => {
                const blog = item?.node;

                const image =
                  blog?.acf_post?.component?.[0]?.image?.mediaItemUrl;
                return (
                  <Col
                    key={blog.id}
                    className={"w-full mb-[30px] lg:mb-0 lg:w-4/12"}
                  >
                    <div className=" relative ">
                      <Link
                        to={`/blog/${blog?.title}`}
                        state={{ slug: blog?.title }}
                      >
                        <img src={image} alt="" className="w-full" />
                      </Link>
                      <div className=" absolute home-banner after:absolute after:inset-0 after:z-0  inset-0 py-[30px] px-[15px] md:p-10 flex justify-end flex-col text-white">
                        <div className="z-20">
                          <Link
                            to={`/blog/${blog?.title}`}
                            state={{ slug: blog?.title }}
                            className="transition-main hover:text-main-color"
                          >
                            <i className="mr-[10px]  fa-regular fa-calendar-days"></i>
                            <span>{useDate()(blog?.publishedAt)}</span>
                          </Link>

                          <Link
                            to={`/blog/${blog?.title}`}
                            state={{ slug: blog?.title }}
                            className="transition-main hover:text-main-color line-clamp-2 text-[20px] font-poppins font-medium mb-5"
                          >
                            {blog.title}
                          </Link>
                          <div className="">
                            <ButtonArrow
                              to={`/blog/${blog?.title}`}
                              state={{ slug: blog?.title }}
                              Tag={"Link"}
                              className={
                                "leading-[21px] rounded-[28px] py-[7px] px-[19px] hover:bg-white hover:text-black transition-main "
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

export default LatestBlog;
