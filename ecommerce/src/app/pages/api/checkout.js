let orders = [];
let discountCodes = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { discountCode } = req.body;
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discount = 0;

    if (discountCode && discountCodes.includes(discountCode)) {
      discount = total * 0.1;
      total -= discount;
    }

    orders.push({ items: [...cart], total, discount });
    cart = [];

    res.status(200).json({ message: 'Order placed', total, discount });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
