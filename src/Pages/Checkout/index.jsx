import React from 'react'
import { BreadcrumbPath } from '../../Components'
import Bill from './Bill/Bill'
import YourOrder from './YourOrder/YourOrder'

const Checkout = () => {
  return (
    <div>
      <BreadcrumbPath pathname={'Checkout'} />
      <div className='py-[80px] '>
        <div className='max-w-[1200px] m-auto px-[15px]'>
          <Bill />
          <YourOrder />
        </div>
      </div>
    </div>
  )
}

export default Checkout