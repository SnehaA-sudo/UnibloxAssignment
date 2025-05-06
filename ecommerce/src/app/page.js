import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the Store</h1>
      <Link href="/src/app/pages/cart" className="text-blue-500 underline">Go to Cart</Link>
    </div>
  );
}