import express from 'express';
import { getCart, removeFromCart, addToCart } from '../controllers/cartController.js';
const cartRouter = express.Router();
// import allValidation from '../utils/validation.js';



cartRouter.post('/addToCart', addToCart)
cartRouter.delete('/removeFromCart/:id', removeFromCart)
cartRouter.get('/viewCart', getCart)
// cartRouter.post('/add', addProductToCart)
// cartRouter.get('/getCartList', getAllCarts)
// cartRouter.delete('/remove/:id', removeProductFromCart)
// cartRouter.put('/update/:id', updateProductInCart)


export default cartRouter;