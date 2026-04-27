"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  UserIcon,
  ChevronDownIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 hover:bg-gray-100 rounded-full transition group"
      >
        <UserIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-900 group-hover:text-green-600 transition" />
        <ChevronDownIcon
          className={`w-3 h-3 text-green-900 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-green-50 p-2 z-[60]"
          >
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-700 rounded-xl transition"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              Đăng nhập
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-700 rounded-xl transition"
            >
              <UserPlusIcon className="w-5 h-5" />
              Tạo tài khoản
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
