import React from 'react';

const YourOrder = () => {
    return (
        <div className=' px-[15px]'>
            <h3 className='text-[27px] mb-[10px] font-poppins font-semibold text-dark-color mt-[20px]'>Your Order</h3>
            <div className='overflow-x-scroll'>
                <table className='mb-[20px] w-full border-collapse'>
                    <thead>
                        <tr>
                            <th className='text-left border-[1px] border-[#dee2e6] p-[15px]'>Product</th>
                            <th className='text-left border-[1px] border-[#dee2e6] p-[15px]'>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-left border-[1px] border-[#dee2e6] p-[15px]'>Winter Royal Black Tire <strong>x&nbsp;2</strong></td>
                            <td className='text-left border-[1px] border-[#dee2e6] p-[15px]' >&pound; 80.00</td>
                        </tr>
                        <tr>
                            <td className='text-left border-[1px] border-[#dee2e6] p-[15px]'><strong>Subtotal</strong></td>
                            <td className='text-left border-[1px] border-[#dee2e6] p-[15px]' >&pound; 80.00</td>
                        </tr>
                        <tr>
                            <td className='text-left border-[1px] border-[#dee2e6] p-[15px]'><strong>Total</strong></td>
                            <td className='text-left border-[1px] border-[#dee2e6] p-[15px]' ><strong>&pound; 80.00</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='mb-[15px]'>
                <div>
                    <input type='radio' className='focus:outline-none' />
                    <label>Direct bank transfer</label>
                </div>
                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                <div>
                    <input type='radio' className='focus:outline-none' />
                    <label>Check payments</label>
                </div>
                <div>
                    <input type='radio' className='focus:outline-none' />
                    <label>Cash on delivery</label>
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