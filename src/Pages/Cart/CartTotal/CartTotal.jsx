import currency from 'currency.js';
import React from 'react';
import { useCartStore } from '../../../Components/store';

const CartTotal = () => {
    const { items } = useCartStore();
    let ListCart = [];
    // console.log(items);
    let TotalCart = 0;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

    });
    Object.keys(items).forEach(function (item) {
        // console.log(items[item].salePrice);
        if (items[item].salePrice !== null) {
            TotalCart += items[item].quantity * currency(items[item].salePrice);
        }
        else {
            TotalCart += items[item].quantity * currency(items[item].regularPrice);
        }
        ListCart.push(items[item]);

    });

    // if (TotalCart > 0) {
    //     console.log(formatter.format(TotalCart));
    // }
    return (
        <div className='pt-[50px]'>
            <h2 className='text-[27px] mb-[10px] leading-[48px] font-poppins text-dark-color font-semibold'>Cart totals</h2>
            <table className='w-full bg-transparent'>
                <tbody>
                    <tr>
                        <th className='p-[15px] text-left border-[1px]'>Subtotal</th>
                        {
                            TotalCart > 0 ? (
                                <td className='p-[15px] text-left border-[1px]'>&pound;{(formatter.format(TotalCart)).slice(1).replace(/$/g, ' ')}</td>
                            ) : (
                                null
                            )
                        }

                    </tr>
                    <tr>
                        <th className='p-[15px] text-left border-[1px]'>Total</th>
                        {
                            TotalCart > 0 ? (
                                <td className='p-[15px] text-left border-[1px] font-semibold'>&pound;{(formatter.format(TotalCart)).slice(1).replace(/$/g, ' ')}</td>

                            ) : (null)
                        }
                    </tr>
                </tbody>
            </table>
            <button className='inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white float-right mt-[20px]'>Proceed to checkout</button>

        </div>
    );
};

export default CartTotal;