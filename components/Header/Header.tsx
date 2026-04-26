"use client";

import Image from "next/image";
import {
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { CartDrawer } from "@/components/CartDrawer/CartDrawer";
import UserDropdown from "../Dropdown/UserDropdown";
export function Header() {
  const { cart } = useCart();
  const [openCart, setOpenCart] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  const totalQty = cart?.reduce((sum: number, item: any) => sum + item.qty, 0);

  const handleSearch = () => {
    if (!keyword.trim()) return;

    console.log("Search:", keyword);

    // router.push(`/search?q=${keyword}`);

    setOpenSearch(false); // auto close
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm relative">
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

          {/* DESKTOP SEARCH (optional nếu bạn muốn thêm lại) */}
          <div className="hidden md:flex relative w-1/2">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            {/* SEARCH MOBILE ICON */}
            <button className="md:hidden" onClick={() => setOpenSearch(true)}>
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
            <UserDropdown />
          </div>
        </div>

        {/* MOBILE SEARCH DROPDOWN */}
        {openSearch && (
          <>
            {/* overlay */}
            <div
              className="fixed inset-0 bg-black/30"
              onClick={() => setOpenSearch(false)}
            />

            {/* search box */}
            <div className="absolute left-0 top-full w-full bg-white p-3 border-b z-50">
              <div className="flex items-center gap-2">
                <input
                  autoFocus
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                  }}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="flex-1 px-4 py-2 border rounded-full"
                />

                {/* close button */}
                <button onClick={() => setOpenSearch(false)}>
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </>
        )}
      </header>

      {/* CART DRAWER */}
      <CartDrawer open={openCart} setOpen={setOpenCart} />
    </>
  );
}
