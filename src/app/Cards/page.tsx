"use client";
import React from 'react';

interface Product {
  title: string;
  description: string;
  imageURL: string;
  price: number;
}

function Card({ title, description, imageURL, price }: Product) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageURL} alt={title} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-gray-700 mb-2"><span className="text-red-600 font-bold">₹{price}</span></p>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg w-full hover:bg-red-700 transition-colors">Buy Now</button>
      </div>
    </div>
  );
}

interface CardsProps {
  trendingName: string;
}

function Cards({ trendingName }: CardsProps) {
  // Sample data for demonstration
  const products: Product[] = [
    {
      title: "Ruby",
      description: "Beautiful ruby gemstone. Perfect for jewelry making and collectors.",
      imageURL: "/images/ruby.jpg",
      price: 90000
    },
    {
      title: "Gomed",
      description: "Stunning sapphire gemstone. Highly prized for its deep blue color.",
      imageURL: "/images/gomed.jpeg",
      price: 800
    },
    {
      title: "Emerald",
      description: "Exquisite emerald gemstone. Known for its vibrant green hue and rarity.",
      imageURL: "/images/emerald.jpeg",
      price: 1200
    },
    {
      title: "Topaz",
      description: "Magnificent diamond gemstone. Symbolizes love, purity, and strength.",
      imageURL: "/images/topaz.jpeg",
      price: 2000
    }
  ];

  return (
    <div>
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold items-center px-8 mb-20">{trendingName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              description={product.description}
              imageURL={product.imageURL}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Cards trendingName="Trending Products" />
    </div>
  );
}
