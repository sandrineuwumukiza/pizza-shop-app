import User from '../Models/userModel.js';
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator';
// import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const RegisterUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
    }
   
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
       return res.status(400).json({ error: 'User already exist' });
    }
   
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password});
   
    try {
       await user.save();
       res.status(201).json({ message: 'Your account created successfully' });
    } catch (error) {
       res.status(500).json({ error: 'Server error' });
    }
   };

export const UserLogin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
  }
 
  const { email, password } = req.body;
 
  try {
     const user = await User.findOne({ email });
     if (!user) {
         return res.status(400).json({ error: 'Invalid email or password' });
     }
 
     const isPasswordValid = await bcryptjs.compare(password, user.password);
     if (!isPasswordValid) {
         return res.status(400).json({ error: 'Invalid email or password' });
     }
     res.status(200).json({ message: 'You are logged in successfully', user });
  } catch (error) {
     res.status(500).json({ error: 'Server error' });
  }
 };