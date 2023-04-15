import express from 'express';
import dbConnection from './config/db.js';
import { categoryRouter, orderRouter, paymentRouter, productRouter, userRouter } from './routes/index.js';
import cors from 'cors'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

// console.log(__filename);
 
dbConnection()

const app = express();
 
app.use(express.json())

app.use(cors())
 
app.use(express.urlencoded({extended: true})) 

app.use('/',express.static('uploads'));

app.use("/api/v1/users", userRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/categories", categoryRouter)
app.use("/api/v1/order", orderRouter)
app.use("/api/v1/payment", paymentRouter)

   
app.listen(4000, function() {
    console.log('Server is running on port 4000');
} );
