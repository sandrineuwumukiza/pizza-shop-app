import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
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
  }
}, {
  timestamps: true

});

const Product = mongoose.model('Product', productSchema);

export default Product;
