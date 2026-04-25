"use client";

import { useCart } from "@/context/CartContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { CheckoutModal } from "@/components/CheckoutModal/CheckoutModal";

export function CartDrawer({ open, setOpen }: any) {
  const { cart, total, removeItem, updateQty } = useCart();
  const [openCheckout, setOpenCheckout] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[360px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">🛒 Giỏ hàng</h2>
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="w-6 h-6 hover:rotate-90 transition" />
          </button>
        </div>

        {/* List */}
        <div className="p-4 space-y-3 overflow-y-auto flex-1">
          {cart?.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">Chưa có sản phẩm</p>
          ) : (
            cart?.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-emerald-50 p-3 rounded-xl"
              >
                {/* Image */}
                <img
                  src={
                    item.image ||
                    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=200"
                  }
                  className="w-14 h-14 rounded-lg object-cover"
                />

                {/* Info */}
                <div className="flex-1">
                  <p className="font-medium text-sm line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-emerald-600 text-sm">
                    {item.price.toLocaleString()}₫
                  </p>

                  {/* Qty control */}
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() =>
                        updateQty(item.id, Math.max(1, item.qty - 1))
                      }
                      className="px-2 py-1 bg-white border rounded text-sm"
                    >
                      -
                    </button>

                    <span className="text-sm">{item.qty}</span>

                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="px-2 py-1 bg-white border rounded text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove */}
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
        <div className="p-4 border-t bg-white">
          <div className="flex justify-between mb-3">
            <span className="text-gray-600">Tổng tiền:</span>
            <span className="font-bold text-emerald-600">
              {total.toLocaleString()}₫
            </span>
          </div>

          <button
            disabled={!cart?.length}
            onClick={() => setOpenCheckout(true)}
            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 text-white py-3 rounded-xl transition"
          >
            Thanh toán
          </button>
        </div>
      </div>

      {/* Checkout */}
      <CheckoutModal open={openCheckout} setOpen={setOpenCheckout} />
    </>
  );
}
