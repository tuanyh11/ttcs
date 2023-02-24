import React from 'react';

const CartTotal = () => {
    return (
        <div className='pt-[50px]'>
            <h2 className='text-[27px] mb-[10px] leading-[48px] font-poppins text-dark-color font-semibold'>Cart totals</h2>
            <table className='w-full bg-transparent'>
                <tbody>
                    <tr>
                        <th className='p-[15px] text-left border-[1px]'>Subtotal</th>
                        <td className='p-[15px] text-left border-[1px]'>&pound; 80.00</td>
                    </tr>
                    <tr>
                        <th className='p-[15px] text-left border-[1px]'>Total</th>
                        <td className='p-[15px] text-left border-[1px] font-semibold'>&pound; 80.00</td>
                    </tr>
                </tbody>
            </table>
            <button className='inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white float-right mt-[20px]'>Proceed to checkout</button>

        </div>
    );
};

export default CartTotal;