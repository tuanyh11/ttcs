import React from 'react'
import { BreadCrumb, BreadcrumbPath, Col, Row } from '../../Components'
import SingIn from './SignIn/SignIn'
import SignOut from './SignOut/SignOut'

const Account = () => {
  return (
    <div>
      <BreadcrumbPath pathname={'My account'} />
      <div className='py-20'>
        <div className='max-w-[1200px] ml-auto mr-auto relative px-[15px]'>
          <Row>
            <Col className={'md:w-1/2 w-full'}>
              <SingIn />
            </Col>
            <Col className={'md:w-1/2 w-full md:mt-0 mt-[30px]'}>
              <SignOut />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Account