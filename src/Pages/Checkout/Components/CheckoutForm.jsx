import {
  CardElement,
  useStripe,
  useElements,
  ElementsConsumer,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";


const CheckoutForm = ({onSelectData}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      amount: 1000,
    currency: 'usd',
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
    }
  };

  useEffect(() => {
    onSelectData({
      elements,
      stripe
    })
  }, [elements, stripe])



 

  return (
    <label>
        <PaymentElement/>
    </label>
  );
};

export default CheckoutForm;
