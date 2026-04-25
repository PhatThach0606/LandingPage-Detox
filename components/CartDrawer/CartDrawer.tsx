"use client";

import { useCart } from "@/context/CartContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { CheckoutModal } from "@/components/CheckoutModal/CheckoutModal";
export function CartDrawer({ open, setOpen }: any) {
  const { cart, total, removeItem } = useCart();
  const [openCheckout, setOpenCheckout] = useState(false);
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40  z-40 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[340px] bg-white z-50 shadow-2xl transform transition-all duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">🛒 Giỏ hàng</h2>
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="w-6 h-6 cursor-pointer hover:rotate-90 transition" />
          </button>
        </div>

        {/* List */}
        <div className="p-4 space-y-3 overflow-y-auto h-[70%]">
          {cart.length === 0 ? (
            <p className="text-gray-500">Chưa có sản phẩm</p>
          ) : (
            cart.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-emerald-50 p-3 rounded-lg hover:scale-[1.02] transition"
              >
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-emerald-600 text-sm">
                    {item.price.toLocaleString()}₫ x {item.qty}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Xóa
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <p className="font-semibold mb-3">Tổng: {total.toLocaleString()}₫</p>

          <button
            onClick={() => setOpenCheckout(true)}
            className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-full transition"
          >
            Thanh toán
          </button>
        </div>
      </div>
      <CheckoutModal open={openCheckout} setOpen={setOpenCheckout} />
    </>
  );
}
