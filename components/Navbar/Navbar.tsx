"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { CartDrawer } from "@/components/CartDrawer/CartDrawer";
import { UserDropdown } from "@/components/Dropdown/UserDropdown";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; // Cần thêm cái này để chạy menu mượt

export function Navbar() {
  const pathname = usePathname();
  const { cart } = useCart();
  const [openCart, setOpenCart] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [openMobile, setOpenMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => pathname === path;
  const totalQty =
    cart?.reduce((sum: number, item: any) => sum + (item.qty || 0), 0) || 0;

  // Danh sách menu để dùng chung cho cả desktop và mobile
  const navLinks = [
    { name: "Trang chủ", path: "/home" },
    { name: "Về chúng tôi", path: "/about" },
    { name: "Sản phẩm", path: "/products" },
    { name: "Liên hệ", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 py-6">
        <div className="w-full max-w-7xl bg-white/80 backdrop-blur-2xl border border-green-100 shadow-xl rounded-full px-8 py-4 flex items-center justify-between gap-6">
          {/* LOGO */}
          <Link href="/home" className="shrink-0 transition hover:scale-105">
            <Image
              src="/logo1.png"
              alt="logo"
              width={65}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* LEFT NAV - DESKTOP */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-bold transition whitespace-nowrap ${
                  isActive(link.path)
                    ? "text-green-600 underline"
                    : "text-green-800 hover:text-green-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* SEARCH BOX - DESKTOP */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm relative group">
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Tìm nước ép..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100/60 rounded-full outline-none focus:ring-2 focus:ring-green-500/40 focus:bg-white transition-all text-sm font-medium border border-transparent focus:border-green-100"
            />
            <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-600 transition-colors" />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button
              onClick={() => setOpenCart(true)}
              className="relative p-2.5 cursor-pointer hover:bg-gray-100 rounded-full transition"
            >
              <ShoppingCartIcon className="w-6 h-6 text-green-900 stroke-[2px]" />
              {mounted && totalQty > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-black h-4.5 w-4.5 flex items-center justify-center rounded-full ring-2 ring-white">
                  {totalQty}
                </span>
              )}
            </button>

            <div className="hidden cursor-pointer sm:block">
              <UserDropdown />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 cursor-pointer z-[60]" // Đảm bảo nút đóng luôn nằm trên cùng
              onClick={() => setOpenMobile(!openMobile)}
            >
              {openMobile ? (
                <XMarkIcon className="w-7 h-7 text-green-900" />
              ) : (
                <Bars3Icon className="w-7 h-7 text-green-900" />
              )}
            </button>
          </div>
        </div>

        {/* --- PHẦN FIX: MOBILE MENU HIỂN THỊ --- */}
        <AnimatePresence>
          {openMobile && (
            <>
              {/* Overlay làm mờ nền */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenMobile(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              />

              {/* Menu Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 w-[280px] bg-white shadow-2xl z-50 lg:hidden flex flex-col p-6 pt-24"
              >
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setOpenMobile(false)} // Click xong phải đóng menu
                      className={`text-lg font-black uppercase py-3 border-b border-gray-50 ${
                        isActive(link.path)
                          ? "text-green-600"
                          : "text-green-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto space-y-4">
                  <Link
                    href="/login"
                    onClick={() => setOpenMobile(false)}
                    className="block w-full py-4 text-center font-bold text-green-800 border-2 border-green-800 rounded-2xl"
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setOpenMobile(false)}
                    className="block w-full py-4 text-center font-bold text-white bg-green-900 rounded-2xl shadow-lg"
                  >
                    Tạo tài khoản
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-28"></div>

      <CartDrawer open={openCart} setOpen={setOpenCart} />
    </>
  );
}
