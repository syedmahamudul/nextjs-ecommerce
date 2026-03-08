'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const demoProducts: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://via.placeholder.com/300x300?text=Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 149.99,
    image: 'https://via.placeholder.com/300x300?text=Smart+Watch',
    description: 'Track your fitness, notifications, and more.',
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: 49.99,
    image: 'https://via.placeholder.com/300x300?text=Gaming+Mouse',
    description: 'Ergonomic design with high precision for gamers.',
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: 'https://via.placeholder.com/300x300?text=Speaker',
    description: 'Portable speaker with excellent sound quality.',
  },
];

export default function HomePage() {
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-6 px-10 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">My E-Shop</h1>
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-gray-700">Cart: {cart.length}</span>
          <button
            onClick={() => router.push('/login')}
            className="bg-purple-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-purple-600 transition"
          >
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-28 px-10 overflow-hidden rounded-b-3xl">
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Upgrade Your Tech</h2>
        <p className="text-xl mb-8 drop-shadow-md">
          Find the latest gadgets and electronics at amazing prices!
        </p>
        <button
          onClick={() => router.push('/login')}
          className="bg-white text-blue-500 px-8 py-3 rounded-xl font-bold hover:scale-105 transform transition shadow-lg"
        >
          Login to Start
        </button>
        {/* Decorative circles */}
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-white/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full filter blur-2xl"></div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-10">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {demoProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transform transition duration-300 hover:shadow-2xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover rounded-xl mb-4"
              />
              <h4 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h4>
              <p className="text-gray-500 text-sm mb-4 text-center">{product.description}</p>
              <p className="text-lg font-bold mb-4 text-blue-600">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-500 mt-16 shadow-inner">
        © 2026 My E-Shop. All rights reserved.
      </footer>
    </div>
  );
}