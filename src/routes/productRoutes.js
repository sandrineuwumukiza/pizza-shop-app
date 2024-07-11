import express from 'express';
import { addProduct, getProductsByCategory, updateProductById, deleteProductById } from '../controllers/productController.js';
// import { addProductValidator } from '../utils/validation.js';
import upload from '../utils/uploadImage.js';
import { Auth } from '../middleware/auth.js';
const productRouter = express.Router();



productRouter.post('/addProduct',Auth, upload.single('image'), addProduct);
// productRouter.get('/productList', getProduct);
productRouter.put('/updateProduct/:id', updateProductById);
// productRouter.get('/productById/:id', getProductById)
productRouter.delete('/delete/:id', deleteProductById);
productRouter.get('/category/:category', getProductsByCategory);
// productRouter.get('/productCount', countProduct);

export default productRouter;