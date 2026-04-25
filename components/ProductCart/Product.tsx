"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export function ProductCard({ product }: any) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full shadow">
          Hot
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-emerald-600 font-bold text-lg mt-1">
          {product.price.toLocaleString()}₫
        </p>

        {/* Button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-full flex items-center justify-center gap-2 transition cursor-pointer shadow hover:shadow-md"
        >
          <ShoppingCartIcon className="w-5 h-5" />
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}
