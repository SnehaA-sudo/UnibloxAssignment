import { useState } from 'react';

export default function Checkout() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);

  const checkout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ discountCode: code }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="p-6">
      <input placeholder="Discount code (optional)" onChange={e => setCode(e.target.value)} />
      <button onClick={checkout} className="bg-green-500 text-white p-2 rounded">Checkout</button>

      {result && (
        <div className="mt-4">
          <p>Total: ₹{result.total}</p>
          <p>Discount: ₹{result.discount}</p>
        </div>
      )}
    </div>
  );
}
