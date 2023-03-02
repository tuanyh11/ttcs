import React from 'react'
import { BreadcrumbPath } from '../../Components'
import { useCartStore } from '../../Components/store'
import Bill from './Bill/Bill'
import YourOrder from './YourOrder/YourOrder'

const Checkout = () => {
  const { items } = useCartStore();
  // console.log(items);
  return (
    <div>
      <BreadcrumbPath pathname={'Checkout'} />
      <div className='py-[80px] '>
        <div className='lg:max-w-[1200px] md:max-w-[720px] sm:max-w-[540px] w-full m-auto px-[15px]'>
          <Bill />
          <YourOrder items={items} />
        </div>
      </div>
    </div>
  )
}

export default Checkout