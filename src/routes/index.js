import express from 'express';
import productRouter from './productRoutes.js';
import userRouter from './userRoutes.js';
const router = express.Router();
// import userRouter from './user.js';
// import tokenRouter from './userToken.js';
// import cartRouter from './cartRoutes.js';
// import diseaseRouter from './Disease.js';
// import orderRouter from './orderRoutes.js';


router.use('/products', productRouter)
// router.use('/carts', cartRouter)
// router.use('/orders', orderRouter)
router.use('/users', userRouter);
// router.use('/buyer',buyerRouter);
// router.use('/farmer',farmerRouter);
// router.use('/token',tokenRouter);



export default router