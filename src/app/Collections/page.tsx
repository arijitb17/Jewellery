"use client";
import { useState } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Coollections from "../components/type";
import Divider from "../Divider/page";

export default function Collections() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      {/* Video poster at the top */}
      <div className="w-full h-96 relative">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            poster="https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          >
            <source
              src="https://www.example.com/your-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to Collections</h1>
        </div>
      </div>

      {/* Cards section */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example card */}
          <Link href="/details">
            <div
              className={cn(
                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 ",
                "bg-[url(/images/ruby-ring.jpeg)] bg-cover",
                hovered ? "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]" : "",
                "transition-all duration-500"
              )}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                Rings
                </h1>
                <p className="font-normal text-base text-gray-50 relative my-4">
                  Stunning ring collections.
                </p>
              </div>
            </div>
          </Link>

          {/* Repeat as needed */}
          <Link href="/details">
            <div
              className={cn(
                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                hovered ? "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]" : "",
                "transition-all duration-500"
              )}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                  Lockets
                </h1>
                <p className="font-normal text-base text-gray-50 relative my-4">
                 Beautiful lockets collection.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/details">
            <div
              className={cn(
                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                hovered ? "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]" : "",
                "transition-all duration-500"
              )}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                  Necklaces
                </h1>
                <p className="font-normal text-base text-gray-50 relative my-4">
                  Eye-catching Necklaces
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
              <Divider />
      {/* Trending Products section */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 flex justify-center items-center">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example product */}
          <div className="w-full rounded-md shadow-lg overflow-hidden relative">
            <img
              src="/images/ruby-ring.jpeg"
              alt="Product 1"
              className="w-full h-80 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Ruby Ring</h3>
                <p className="text-gray-300 font-bold">Starting from ₹2900.99</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Buy Now
                </button>
              </div>
              <div className="space-x-4">
                <FontAwesomeIcon icon={faHeart} className="text-gray-100  cursor-pointer" />
                <FontAwesomeIcon icon={faShoppingCart} className="text-gray-100  cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Repeat as needed */}
          <div className="w-full rounded-md shadow-lg overflow-hidden relative">
            <img
              src="/images/pearl-locket.jpeg"
              alt="Product 2"
              className="w-full h-80 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Pearl Locket</h3>
                <p className="text-gray-300 font-bold">Starting from ₹2900.99</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Buy Now
                </button>
              </div>
              <div className="space-x-4">
                <FontAwesomeIcon icon={faHeart} className="text-gray-100  cursor-pointer" />
                <FontAwesomeIcon icon={faShoppingCart} className="text-gray-100  cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="w-full rounded-md shadow-lg overflow-hidden relative">
            <img
              src="/images/emerald-necklace.jpeg"
              alt="Product 3"
              className="w-full h-80 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Emerald Necklace</h3>
                <p className="text-gray-300 font-bold">Starting from ₹2900.99</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Buy Now
                </button>
              </div>
              <div className="space-x-4">
                <FontAwesomeIcon icon={faHeart} className="text-gray-100 cursor-pointer" />
                <FontAwesomeIcon icon={faShoppingCart} className="text-gray-100  cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Coollections />
    </div>
  );
}
