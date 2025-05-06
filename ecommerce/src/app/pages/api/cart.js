let cart = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const item = req.body;
    cart.push(item);
    res.status(200).json({ message: 'Added to cart', cart });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}