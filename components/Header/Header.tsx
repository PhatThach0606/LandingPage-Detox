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

  const totalQty = cart?.reduce((sum: number, item: any) => sum + item.qty, 0);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 gap-3">
          {/* LOGO */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/logo.jpg"
              alt="Trái lành"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-semibold text-green-600 text-base sm:text-lg">
              Trái lành
            </span>
          </div>

          {/* SEARCH - hidden mobile */}
          <div className="hidden md:flex relative w-1/2">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            {/* SEARCH MOBILE ICON */}
            <button className="md:hidden">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
            </button>

            {/* CART */}
            <button onClick={() => setOpenCart(true)} className="relative p-2">
              <ShoppingCartIcon className="w-6 h-6 text-gray-700" />

              {totalQty > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQty}
                </span>
              )}
            </button>

            {/* USER */}
            <button className="p-2">
              <UserIcon className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* CART DRAWER */}
      <CartDrawer open={openCart} setOpen={setOpenCart} />
    </>
  );
}
