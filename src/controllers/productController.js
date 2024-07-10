import Product from '../Models/productModel.js';
import upload from '../utils/uploadImage.js';
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const addProduct = async (req, res, next) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newProduct = new Product({
      productName: req.body.productName,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: {
        publicId: result.public_id,
        url: result.secure_url,
      },
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add product.' });
  }
};
