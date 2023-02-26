import React from 'react'
import { Outlet } from 'react-router'
import { BreadCrumb } from '../../Components'

const Account = () => {



  return (
    <div>
      <BreadCrumb  label="My Account" />
      <div className='py-20'>
        <div className='max-w-[1200px] ml-auto mr-auto relative px-[15px]'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Account