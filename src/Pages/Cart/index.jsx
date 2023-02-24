import React from 'react'
import { BreadcrumbPath } from '../../Components'
import CartList from './CartList/CartList'
import CartTotal from './CartTotal/CartTotal'

const Cart = () => {
  return (
    <div>
      <BreadcrumbPath pathname={'Cart'} />
      <div className='py-[80px] overflow-x-scroll'>
        <div className='max-w-[1200px] m-auto py-[65px] px-[0px]'>
          <CartList />
          <CartTotal />
        </div>

      </div>
    </div>
  )
}

export default Cart