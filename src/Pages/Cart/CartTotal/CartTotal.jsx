import currency from 'currency.js';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../../Components/store';
import { formatMoney } from '../../../utils';

const CartTotal = () => {
    const { getTotalWithQuantity } = useCartStore();
    let totalPrice = getTotalWithQuantity();
    console.log(totalPrice);
    // if (TotalCart > 0) {
    //     console.log(formatter.format(TotalCart));
    // }
    return (
        <div className='pt-[50px]'>
            <h2 className='text-[27px] mb-[10px] leading-[48px] capitalize font-poppins text-dark-color font-semibold'>Tổng giỏ hàng</h2>
            <table className='w-full bg-transparent'>
                <tbody>
                    {/* <tr>
                        <th className='p-[15px] text-left border-[1px]'>Subtotal</th>
                        {
                            totalPrice > 0 ? (
                                <td className='p-[15px] text-left border-[1px]'>{formatMoney(totalPrice)}</td>
                            ) : (
                                null
                            )
                        }

                    </tr> */}
                    <tr>
                        <th className='p-[15px] text-left border-[1px]'>Tổng</th>
                        {
                            totalPrice > 0 ? (
                                <td className='p-[15px] text-left border-[1px] font-semibold'>{formatMoney(totalPrice)}</td>

                            ) : (null)
                        }
                    </tr>
                </tbody>
            </table>
            <Link to='/checkout'><button className='inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white float-right mt-[20px]'>Tiến hành thanh toán</button></Link>

        </div>
    );
};

export default CartTotal;