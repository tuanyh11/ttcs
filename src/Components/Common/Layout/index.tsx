import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Nav from '../Nav'
import Sidebar from '../Sidebar'

interface Props  {
    children: ReactNode
}

const Layout = () => {
  return (
    <div>
    

        <div className="py-2">
                <Header/>
                <Nav/>

                <div className="rounded-[30px] min-w-0 min-h-screen flex-1 pb-10 bg-slate-100 dark:bg-darkmode-700 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block">
                  <Outlet/>
                </div>
        </div>

        
    </div>
  )
}

export default Layout