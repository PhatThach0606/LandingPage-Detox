"use client";

import { useCart } from "@/context/CartContext";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function CheckoutModal({ open, setOpen }: any) {
  const cartContext = useCart();

  const total = cartContext?.total ?? 0;

  const bank = "Vietcombank";
  const account = "1037633105";
  const name = "Đặng Ngọc Thy";

  const qr = `https://img.vietqr.io/image/${bank}-${account}-compact2.png?amount=${total}&addInfo=Thanh%20toan%20detox&accountName=${name}`;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-[92%] max-w-md rounded-3xl bg-white shadow-2xl p-6 animate-in fade-in zoom-in duration-200">
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <XMarkIcon className="w-6 h-6 text-gray-500" />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center text-gray-800">
          💳 Thanh toán đơn hàng
        </h2>

        <p className="text-center text-gray-500 text-sm mt-1">
          Quét mã QR để thanh toán nhanh
        </p>

        {/* QR */}
        <div className="flex justify-center mt-5">
          <div className="p-3 bg-gray-50 rounded-2xl shadow-inner">
            <img
              src={qr}
              alt="QR thanh toán"
              className="w-56 h-56 object-contain"
            />
          </div>
        </div>

        {/* Total */}
        <div className="mt-5 text-center">
          <p className="text-gray-500 text-sm">Tổng thanh toán</p>
          <p className="text-2xl font-bold text-emerald-600">
            {total.toLocaleString()}₫
          </p>
        </div>

        {/* Info */}
        <div className="mt-4 text-center text-xs text-gray-500 space-y-1">
          <p>
            Nội dung: <span className="font-medium">Thanh toan detox</span>
          </p>
          <p>Ngân hàng: Vietcombank</p>
          <p>Tên: Đặng Ngọc Thy</p>
        </div>

        {/* Button */}
        <button
          onClick={() => setOpen(false)}
          className="mt-5 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-medium transition"
        >
          Hoàn tất
        </button>
      </div>
    </div>
  );
}
