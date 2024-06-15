// pages/api/cart.js

let cart = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { item } = req.body;
    cart.push(item);
    res.status(200).json({ message: 'Item added to cart', cart });
  } else if (req.method === 'GET') {
    res.status(200).json(cart);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
