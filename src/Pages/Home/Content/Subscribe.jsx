import React from 'react'
import { ButtonArrow, Col, Container, Row } from '../../../Components'

const Subscribe = ({data}) => {


  const backgroundImage = data?.images?.[0]?.image?.mediaItemUrl

  const subTitle = data?.subTitle

  const title = data?.title

  const button = data?.button

  return (
    <div>
         <div
          className="py-20 bg-center relative bg-cover bg-no-repeat after:inset-0 after:absolute after:bg-[rgba(0,0,0,0.65)] after:z-10"
          style={{
            backgroundImage: `url(${`${backgroundImage}`})`,
          }}
        >
          <Container>
            <Row className={"justify-center"}>
              <Col className="w-full lg:w-8/12">
                <div className="text-center relative  z-20 ">
                  <h4 className="uppercase underline text-[#fbb71c] mb-5">
                    {subTitle}
                  </h4>
                  <h2 className="mb-[35px]  lg:px-[50px] leading-[1.2] text-[27px]  md:text-[32px] lg:text-[36px] xl:text-[48px] text-white font-poppins font-semibold">
                    {title}
                  </h2>
                  <form action="">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Your Email Address"
                        className="h-[85px] leading-[85px] placeholder-[#757575] w-full rounded-[43px] outline-none border px-5"
                      />
                      <div className="md:absolute mt-[15px] md:mt-0 top-1/2 right-[15px] md:-translate-y-1/2">
                        <ButtonArrow
                          Tag="Link"
                          to="/shop"
                          className={
                            " px-[45px] py-[15px] rounded-[28px] leading-[27px] uppercase"
                          }
                        >
                          {button?.titleButton}
                        </ButtonArrow>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default Subscribe