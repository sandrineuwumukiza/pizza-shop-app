
import mongoose from 'mongoose';

const { Schema } = mongoose;

const CartItemSchema = new Schema({
  userId: { type: String },
  sessionId: { type: String },
  products: [
      {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
          productName: { type: String, required: true },
          price: { type: Number, required: true },
          description: { type: String },
          category: { type: String, required: true },
          image: {
              public_id: { type: String },
              asset_id: { type: String },
              url: { type: String }
          },
          quantity: { type: Number, default: 1 }
      }
  ]
}, { timestamps: true });


const CartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  sessionId: {
    type: String,
  },
  items: [CartItemSchema],
});

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;
