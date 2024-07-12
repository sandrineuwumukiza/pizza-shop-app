import express from 'express';
import { RegisterUser, UserLogin, resetPassword } from '../controllers/userController.js';
const userRouter = express.Router();


userRouter.post('/registerUser', RegisterUser);
userRouter.post('/login', UserLogin);
// userRouter.get('/resetPassword', resetPassword)
// userRouter.get('/forgotPassword', forgotPassword)


export default userRouter;

