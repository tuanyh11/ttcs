import React from 'react'
import { Link } from 'react-router-dom'
import { BreadcrumbPath } from '../../Components'
import { useCartStore } from '../../Components/store'
import CartList from './CartList/CartList'
import CartTotal from './CartTotal/CartTotal'

const Cart = () => {
  const { items } = useCartStore();

  return (
    <div>
      <BreadcrumbPath pathname={'Cart'} />
      <div className='py-[80px] '>
        {
          items.length > 0 ? (
            <div className='max-w-[1200px] m-auto px-[15px]'>
              <CartList />
              <CartTotal />
            </div>
          ) : (
            <div className='max-w-[1200px] m-auto px-[15px]'>
              <div
                className="py-[14px] pl-[50px] pr-7 relative  border-t-[3px] border-[#1e85be] mb-7 text-[#515151] bg-[#f7f6f7]"
                role="alert"
              >
                <div className=" absolute left-6 text-white top-1/2 w-[14px] h-[14px] leading-[14px] text-center rounded-full text-[10px] bg-[#1e85be] -translate-y-1/2">
                  &#8482;
                </div>
                <div>Your cart is currently empty.</div>
              </div>
              <Link
                className="h-9 inline-block bg-main transition-main cursor-pointer hover:bg-orange text-white leading-9 px-5  bg-main-color uppercase"
                to="/home"
              >
                Return to shop
              </Link>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Cart