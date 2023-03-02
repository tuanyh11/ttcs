import React from 'react'
import { useLocation } from 'react-router-dom'
import { ButtonArrow, Col, Container, Row } from '../../Components'

const NotFound = () => {

  const state =  useLocation().state

  return (
    <div className='py-[100px]'>
        <Container>
            <Row className={"flex justify-center"}>
                <Col className={"w-6/12"}>
                    <div className='text-center'>
                        <div className="text-[#333] text-[150px] font-semibold mb-30 leading-none">404</div>
                        <h5 className="mb-2 screens-576:mb-[1rem] font-poppins text-black text-[18px] font-semibold">oops! The page you requested was not found!</h5>
                        <p className="pb-6">
                            {state?.content || "The page you are looking for was moved, removed, renamed or might never existed."}
                        </p>
                        <div className="">
                            <ButtonArrow label={"Go to home page"} className="px-[46px] rounded-[28px] h-[55px] leading-[55px]" Tag='Link' to='/'/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default NotFound