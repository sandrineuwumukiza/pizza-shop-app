import express from 'express';
import { RegisterUser, UserLogin } from '../controllers/userController.js';
const userRouter = express.Router();


userRouter.post('/registerUser', RegisterUser);
userRouter.post('/login', UserLogin);
// userRouter.get('/getUser', GetUser)


export default userRouter;

