import { useState } from 'react';

export default function Cart() {
  const [item, setItem] = useState({ name: '', price: 0, quantity: 1 });

  const addToCart = async () => {
    await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    alert('Added to cart');
  };

  return (
    <div className="p-6">
      <input placeholder="Item name" onChange={e => setItem({ ...item, name: e.target.value })} />
      <input placeholder="Price" type="number" onChange={e => setItem({ ...item, price: +e.target.value })} />
      <input placeholder="Quantity" type="number" onChange={e => setItem({ ...item, quantity: +e.target.value })} />
      <button onClick={addToCart} className="bg-blue-500 text-white p-2 rounded">Add to Cart</button>
    </div>
  );
}
