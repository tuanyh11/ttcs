import React from 'react'
import { Outlet } from 'react-router-dom'
import { BreadCrumb } from '../../Components'

const ResetPassword = () => {
  return (
    <div>
        <BreadCrumb label={"123"}/>
        <Outlet/>
    </div>
  )
}

export default ResetPassword