import React from 'react'
import HeaderNav from './HeaderNav'
import HeaderTop from './HeaderTop'

const index = () => {
  return (
    <div>
        <div className=" hidden md:block">
            <HeaderTop/>
        </div>
        <div className="">
            <HeaderNav/>
        </div>
    </div>
  )
}

export default index