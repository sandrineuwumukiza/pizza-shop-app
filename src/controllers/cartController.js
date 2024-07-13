import Cart from "../Models/CartModel.js";

export const getCart = async (req, res) => {
  const userId = req.session.userId;
  const sessionId = req.session.id;
  try {
    const cart = await Cart.findOne({
      $or: [{ userId }, { sessionId }],
    }).populate('items.productId');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addToCart = async (req, res) => {
  const userId = req.session.userId;
  const sessionId = req.session.id;
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ $or: [{ userId }, { sessionId }] });

    if (!cart) {
      cart = new Cart({ userId, sessionId, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeFromCart = async (req, res) => {
  const userId = req.session.userId;
  const sessionId = req.session.id;
  try {
    let cart = await Cart.findOne({ $or: [{ userId }, { sessionId }] });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item._id.toString() !== req.params.itemId);
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
