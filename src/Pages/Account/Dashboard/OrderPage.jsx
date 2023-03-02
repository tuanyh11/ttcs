import React from 'react'
import { Link } from 'react-router-dom'

const OrderPage = () => {
  return (
    <div>
        <p className=""><Link className="text-main-color" to={"/shop"}>Browse products</Link> products No order has been made yet.</p>
    </div>
  )
}

export default OrderPage