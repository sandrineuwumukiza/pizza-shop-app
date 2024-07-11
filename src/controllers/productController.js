import Product from '../Models/productModel.js';
import cloudinary from '../utils/cloudinary.js';
import upload from '../utils/uploadImage.js';



export const addProduct = async (req, res, next) => {
  const { name, price, description, category } = req.body;
  const image = req.file;

  
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Authorization denied' });
  }

  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(image.path, {
      folder: 'ecommerce',
      allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
    });

    const newProduct = new Product({
      name,
      price,
      description,
      category,
      image: {
        public_id: result.public_id,
        asset_id: result.asset_id,
        url: result.secure_url,
      },
      userId: req.user.id,
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
