"use client";

import { useCart } from "@/context/CartContext";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { CheckoutModal } from "@/components/CheckoutModal/CheckoutModal";
import toast from "react-hot-toast";

export function CartDrawer({ open, setOpen }: any) {
  const { cart, total, removeItem, updateQty } = useCart();
  const [openCheckout, setOpenCheckout] = useState(false);

  // Hàm xử lý khi nhấn thanh toán
  const handleGoToCheckout = () => {
    setOpen(false); // 1. Đóng Drawer lại
    setTimeout(() => {
      setOpenCheckout(true); // 2. Mở Modal thanh toán sau một chút để hiệu ứng mượt hơn
    }, 300);
  };

  const handleRemoveItem = (id: any, name: string) => {
    removeItem(id);
    toast.error(`Đã xóa ${name}`);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[380px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="font-black text-xl text-slate-800 uppercase tracking-tight">
              Giỏ hàng
            </h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
              {cart?.length || 0} sản phẩm
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <XMarkIcon className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        {/* List */}
        <div className="p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
          {cart?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="text-6xl">empty</div>
              <p className="text-slate-400 italic">
                Giỏ hàng đang trống rỗng...
              </p>
            </div>
          ) : (
            cart?.map((item: any) => (
              <div key={item.id} className="flex items-center gap-4 group">
                {/* Image */}
                <div className="relative w-20 h-20 flex-shrink-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 truncate uppercase text-sm">
                    {item.name}
                  </h4>
                  <p className="text-emerald-600 font-black text-sm mb-2">
                    {item.price.toLocaleString()}₫
                  </p>

                  {/* Qty control */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-slate-100 rounded-lg p-1">
                      <button
                        onClick={() =>
                          updateQty(item.id, Math.max(1, item.qty - 1))
                        }
                        className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-slate-600 hover:text-emerald-500 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-slate-700">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-slate-600 hover:text-emerald-500 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="text-slate-300 hover:text-red-500 transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-slate-50/50">
          <div className="flex justify-between items-end mb-6">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              Tổng cộng tạm tính
            </span>
            <span className="font-black text-2xl text-emerald-600 tracking-tighter">
              {total.toLocaleString()}₫
            </span>
          </div>

          <button
            disabled={!cart?.length}
            onClick={handleGoToCheckout} // Sử dụng hàm đã bọc logic đóng drawer
            className="w-full bg-slate-900 hover:bg-emerald-600 disabled:bg-slate-200 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-slate-200 transition-all active:scale-[0.98]"
          >
            Tiến hành thanh toán
          </button>

          <button
            onClick={() => setOpen(false)}
            className="w-full mt-3 text-slate-400 text-xs font-bold uppercase hover:text-slate-600 transition-colors"
          >
            Tiếp tục mua sắm
          </button>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal open={openCheckout} setOpen={setOpenCheckout} />
    </>
  );
}
