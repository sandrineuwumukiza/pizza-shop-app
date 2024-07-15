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
    const { userId, sessionId, productId } = req.body;
    try {
        let query = userId ? { userId } : { sessionId };
        let cart = await Cart.findOne(query);
        if (cart) {
            // If cart exists, update it
            let itemIndex = cart.products.findIndex(p => p.productId === productId);
            if (itemIndex > -1) {
                // If product exists in the cart, update the quantity
                let productItem = cart.products[itemIndex];
                productItem.quantity += 1;
                cart.products[itemIndex] = productItem;
            } else {
                // If product does not exist in the cart, add new item
                cart.products.push({ productId, quantity: 1 });
            }
            cart = await cart.save();
            return res.status(201).send(cart);
        } else {
            // If no cart exists, create a new one
            const newCart = await Cart.create({
                userId,
                sessionId,
                products: [{ productId, quantity: 1 }]
            });
            return res.status(201).send(newCart);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
};


export const removeFromCart = async (req, res) => {
    const { userId, sessionId, productId } = req.body;
    try {
        let query = userId ? { userId } : { sessionId };
        let cart = await Cart.findOne(query);
        if (cart) {
            let itemIndex = cart.products.findIndex(p => p.productId === productId);
            if (itemIndex > -1) {
                let productItem = cart.products[itemIndex];
                if (productItem.quantity > 1) {
                    productItem.quantity -= 1;
                    cart.products[itemIndex] = productItem;
                } else {
                    cart.products.splice(itemIndex, 1);
                }
                cart = await cart.save();
                return res.status(201).send(cart);
            } else {
                return res.status(404).send('Product not found in cart');
            }
        } else {
            return res.status(404).send('Cart not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
};