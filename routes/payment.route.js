import {Router} from 'express'
import Stripe from 'stripe'
import { Payment } from '../models/order.model.js'

const router = Router()

const stripe = Stripe(
  "sk_test_51KhkygGTaC45i0AutbATOMW0uxWsIA1d1uCFdWcgJsJ9wHvO4BLXfVSa1dRyZrA3mJkmQKzumzDenpzZ64c5K6HH00PaoOEog2"
);

router.post('/', async(req, res) => {
    try {
        const payment =  new Payment(req.body)
        await payment.save()
        res.status(200).json({message: 'payment saved successfully'})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

router.post('/stripe/create-payment-intent', async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
          currency: "vnd",
          amount: req.body.items.reduce(
            (p, c) => Number(c.price.raw) * Number(c.quantity) + p,
            0
          ),
          payment_method_types: ["card"],
        });
        res.send(paymentIntent);
       
    } catch (error) {

        console.log(error);
        res.status(404).json({ message: error.message });
        
    }
    
})

export default router