import React from 'react'
import { BreadcrumbPath } from '../../Components'
import WishItems from './WishItems/WishItems'

const Wishlist = () => {
  return (
    <div>
      <BreadcrumbPath pathname={'Wishlist'} />
      <div className='py-[65px]'>
        <div className='max-w-[1200px] m-auto py-[65px] px-[15px]'>
          <h2 className='text-[27px] font-poppins text-dark-color font-semibold mb-[20px]'>Default wishlist</h2>
          <WishItems />
        </div>
      </div>

    </div>
  )
}

export default Wishlist