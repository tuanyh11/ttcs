import React from "react";
import Slider from "react-slick";
import { fakeData } from "../../../assets/data";
import { Container } from "../../../Components";
import { generateStart } from "../../../utils";

const Review = ({data}) => {

  const quoteList = data?.contentQuote

  const customerReviewSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },

        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div>
      <div className="pt-[65px] pb-[80px] bg-[#F7F7F7]">
        <Container>
          <div className="md:p-[15px]  text-center flex justify-center">
            <div className="w-full md:w-9/12 lg:w-6/12  mb-[30px]">
              <h2 className="mb-[15px] font-poppins text-[27px] text-black leading-[32px] font-semibold">
                Customer Reviews{" "}
              </h2>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur vel illum dolorem
              </p>
            </div>
          </div>
          <div>
            <div>
              <Slider {...customerReviewSettings} className="-mx-[15px] ">
                {quoteList?.map((review) => {
                  const stars = generateStart(review.rating, "!text-[13px] !font-semibold ");

                  return (
                    <div key={review?.id}>
                      <div className="px-[15px]">
                        <div>
                          <div className="flex pl-[30px] pb-[30px]">
                            <div className="min-w-[50px] max-w-[50px] h-[50px]">
                              <img
                                src={review.image?.mediaItemUrl}
                                alt=""
                                className=" rounded-full"
                              />
                            </div>

                            <div className="ml-[15px]">
                              <h3 className=" text-black font-poppins text-lg leading-[1] font-semibold">
                                {review?.name}
                              </h3>
                              <span className=" text-main text-main-color">
                                {review?.position}
                              </span>
                            </div>
                          </div>

                          <div className="p-10 bg-white relative triangle">
                            <div dangerouslySetInnerHTML={{__html: review?.contentData}} className="pb-5"/>
                            <div className="flex justify-between items-center">
                              <div>{stars}</div>
                              <div>
                                <i className="fa-solid fa-quote-right text-5xl text-main-color"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Review;
