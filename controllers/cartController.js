import Cart from "../models/Cart.js";

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate(
    "items.product",
  );
  res.json(cart);
};

export const addToCart = async (req, res) => {
  const { productId } = req.body;

  let cart = await Cart.findOne({ user: req.user.id });

  if (!cart) {
    cart = await Cart.create({
      user: req.user.id,
      items: [],
    });
  }

  const existingItem = cart.items.find(
    (item) => item.product.toString() === productId,
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({
      product: productId,
      quantity: 1,
    });
  }

  await cart.save();
  res.json(cart);
};

export const updateCartItem = async (req, res) => {
  const { quantity } = req.body;

  const cart = await Cart.findOne({ user: req.user.id });

  const item = cart.items.id(req.params.id);
  if (item) {
    item.quantity = quantity;
  }

  await cart.save();
  res.json(cart);
};

export const removeCartItem = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id });

  cart.items = cart.items.filter(
    (item) => item._id.toString() !== req.params.id,
  );

  await cart.save();
  res.json(cart);
};

export default {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
};
