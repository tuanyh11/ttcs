import currency from 'currency.js';
import React, { useState } from 'react';

const YourOrder = ({ items }) => {
    const [currentRadioValue, setCurrentValue] = useState('bacs');

    const handleRadioChange = value => {
        setCurrentValue(value);
    };
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

    });
    let ListCart = [];
    let TotalCart = 0;
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
    // console.log(TotalCart);
    return (
        <div className=' sm:px-[15px] px-0'>
            <h3 className='text-[27px] mb-[10px] font-poppins font-semibold text-dark-color mt-[20px]'>Your Order</h3>
            <div className='overflow-x-auto'>
                <table className='mb-[20px] w-full border-collapse'>
                    <thead>
                        <tr>
                            <th className='text-left border-[1px] border-[#dee2e6] p-[15px]'>Product</th>
                            <th className='text-left border-[1px] border-[#dee2e6] p-[15px]'>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => {
                                const name = item?.name;
                                const quantity = item?.quantity;
                                const price = item?.salePrice || item?.regularPrice;
                                const priceNumber = currency(price);
                                const subTotal = formatter.format(priceNumber * item.quantity);
                                return (
                                    <tr>
                                        <td className='text-left border-[1px] border-[#dee2e6] p-[15px]'>{name}&nbsp;<strong>x&nbsp;{quantity}</strong></td>
                                        <td className='text-left border-[1px] border-[#dee2e6] p-[15px]' >&pound;{subTotal.slice(1).replace(/$/g, ' ')}</td>
                                    </tr>
                                )

                            })}


                        <tr>
                            <td className='text-left border-[1px] border-[#dee2e6] p-[15px]'><strong>Subtotal</strong></td>
                            <td className='text-left border-[1px] border-[#dee2e6] p-[15px]' >&pound;{(formatter.format(TotalCart)).slice(1).replace(/$/g, ' ')}</td>
                        </tr>
                        <tr>
                            <td className='text-left border-[1px] border-[#dee2e6] p-[15px]'><strong>Total</strong></td>
                            <td className='text-left border-[1px] border-[#dee2e6] p-[15px]' ><strong>&pound;{(formatter.format(TotalCart)).slice(1).replace(/$/g, ' ')}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='mb-[15px] leading-[27px]'>
                <div>
                    <input
                        name="radio-item-1"
                        className='focus:outline-none mr-[5px]'
                        value='bacs'
                        type="radio"
                        onChange={(e) => setCurrentValue(e.target.value)}
                        defaultChecked={currentRadioValue === 'bacs'}
                    />
                    <label htmlFor="direct-bank-transfer">Direct bank transfer</label>
                    {
                        currentRadioValue === 'bacs' &&
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    }
                </div>
                <div>
                    <input
                        name="radio-item-1"
                        className='focus:outline-none mr-[5px]'
                        value='cheque'
                        type="radio"
                        onChange={(e) => setCurrentValue(e.target.value)}
                        defaultChecked={currentRadioValue === 'cheque'}
                    />
                    <label htmlFor="check-payments">Check payments</label>
                    {
                        currentRadioValue === 'cheque' &&
                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                    }
                </div>
                <div>
                    <input
                        name="radio-item-1"
                        className='focus:outline-none mr-[5px]'
                        value='cod'
                        type="radio"
                        onChange={(e) => setCurrentValue(e.target.value)}
                        defaultChecked={currentRadioValue === 'cod'}
                    />
                    <label htmlFor="cash-on-delivery">Cash on delivery</label>
                    {
                        currentRadioValue === 'cod' &&
                        <p>Pay with cash upon delivery..</p>}
                </div>
            </div>
            <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                <a href='#'>privacy policy</a>
            </p>
            <button className=' bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white mt-[15px]'>
                Place order
            </button>
        </div>
    );
};

export default YourOrder;