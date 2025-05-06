export default function handler(req, res) {
    const itemCount = orders.reduce((acc, order) => acc + order.items.length, 0);
    const totalAmount = orders.reduce((acc, order) => acc + order.total, 0);
    const totalDiscount = orders.reduce((acc, order) => acc + order.discount, 0);
  
    res.status(200).json({
      itemCount,
      totalAmount,
      totalDiscount,
      discountCodes,
    });
  }