import React from 'react'
import { Outlet } from 'react-router'
import { BreadCrumb, Container } from '../../Components'

const Account = () => {



  return (
    <div>
      <BreadCrumb  label="My Account" />
      <div className='py-20'>
        <Container >
          <Outlet/>
        </Container>
      </div>
    </div>
  )
}

export default Account