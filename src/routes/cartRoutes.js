import express from 'express';
import { viewCart, deleteProductFromCart, addProductToCart } from '../controllers/cartController.js';
const cartRouter = express.Router();
// import allValidation from '../utils/validation.js';



cartRouter.post('/addToCart', addProductToCart)
cartRouter.delete('/removeFromCart/:id', deleteProductFromCart)
cartRouter.get('/viewCart', viewCart)
// cartRouter.post('/add', addProductToCart)
// cartRouter.get('/getCartList', getAllCarts)
// cartRouter.delete('/remove/:id', removeProductFromCart)
// cartRouter.put('/update/:id', updateProductInCart)


export default cartRouter;