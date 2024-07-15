import express from 'express';
import {payment} from '../controllers/payment.js'
const paymentRouter = express.Router();
// import allValidation from '../utils/validation.js';



paymentRouter.post('/', payment)
// cartRouter.delete('/removeFromCart/:id', removeFromCart)
// paymentRouter.get('/viewCart', getCart)


export default paymentRouter;