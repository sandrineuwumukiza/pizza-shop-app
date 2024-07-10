import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required:true,
  },
  category: {
    type: String,
    required:true,
    "enums":"['Food,Fruits, Alcohol, Juice']"
  },
  image: {
    public_id: {
      type: String,
    },
    asset_id:{
      type: String,
    },
    url:{
      type: String,
    }
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isExpired: Boolean,
  isFeatured: Boolean,
  featureEndDate: Date
}, {
  timestamps: true

});

const Product = mongoose.model('Product', productSchema);

export default Product;
