import React from 'react'
import { ButtonArrow, Col, Container, Row } from '../../../Components'

const Subscribe = () => {
  return (
    <div>
         <div
          className="py-20 bg-center relative bg-cover bg-no-repeat after:inset-0 after:absolute after:bg-[rgba(0,0,0,0.65)] after:z-10"
          style={{
            backgroundImage: `url(${"https://klbtheme.com/chakta/wp-content/plugins/chakta-core/elementor/images/newsletter-bg.jpg"})`,
          }}
        >
          <Container>
            <Row className={"justify-center"}>
              <Col className="w-full lg:w-8/12">
                <div className="text-center relative  z-20 ">
                  <h4 className="uppercase underline text-[#fbb71c] mb-5">
                    NEWSLETTER SUBSCRIBE
                  </h4>
                  <h2 className="mb-[35px]  lg:px-[50px] leading-[1.2] text-[27px]  md:text-[32px] lg:text-[48px] text-white font-poppins font-semibold">
                    Every Update Subscribe Our Newsletter
                  </h2>
                  <form action="">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Your Email Address"
                        className="h-[85px] leading-[85px] w-full rounded-[43px] outline-none border px-5"
                      />
                      <div className="absolute top-1/2 right-[15px] -translate-y-1/2">
                        <ButtonArrow
                          Tag="Link"
                          to="/shop"
                          className={
                            " px-[45px] py-[15px] rounded-[28px] leading-[27px]"
                          }
                        >
                          subscribe now
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