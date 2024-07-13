
import mongoose from 'mongoose';

const { Schema } = mongoose;

const CartItemSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

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
