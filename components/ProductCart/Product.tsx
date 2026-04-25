"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export function ProductCard({ product }: any) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col">
      {/* Image - FIX ratio cho mobile */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] px-2 py-1 rounded-full shadow">
          Hot
        </span>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        <p className="text-emerald-600 font-bold text-base mt-1">
          {product.price.toLocaleString()}₫
        </p>

        {/* Button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-emerald-500 active:scale-95 hover:bg-emerald-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <ShoppingCartIcon className="w-4 h-4" />
          Thêm
        </button>
      </div>
    </div>
  );
}
