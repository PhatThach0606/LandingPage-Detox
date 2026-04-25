"use client";

import Image from "next/image";
import {
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { CartDrawer } from "@/components/CartDrawer/CartDrawer";

export function Header() {
  const { cart } = useCart();
  const [openCart, setOpenCart] = useState(false);

  const totalQty = cart.reduce((sum: number, item: any) => sum + item.qty, 0);

  return (
    <>
      <header className="w-full border-b bg-white text-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="cursor-pointer flex items-center gap-2 hover:opacity-80 transition">
            <Image src="/logo.jpg" alt="ND Detox" width={40} height={40} />
            <span className="font-semibold text-lg text-green-600">
              Trái lành
            </span>
          </div>

          {/* Search */}
          <div className="relative w-1/3">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            {/* Cart */}
            <button
              onClick={() => setOpenCart(true)}
              className="relative cursor-pointer group"
            >
              <ShoppingCartIcon className="w-6 h-6 text-gray-700 group-hover:text-green-600 transition" />

              {totalQty > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQty}
                </span>
              )}
            </button>

            {/* User */}
            <button className="cursor-pointer group">
              <UserIcon className="w-6 h-6 text-gray-700 group-hover:text-green-600 transition" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer */}
      <CartDrawer open={openCart} setOpen={setOpenCart} />
    </>
  );
}
