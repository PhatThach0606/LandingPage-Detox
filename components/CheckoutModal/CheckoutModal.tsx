"use client";

import { useCart } from "@/context/CartContext";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function CheckoutModal({ open, setOpen }: any) {
  const { total } = useCart();

  const bank = "mbbank";
  const account = "123456789";
  const name = "NGUYEN VAN A";

  const qr = `https://img.vietqr.io/image/${bank}-${account}-compact2.png?amount=${total}&addInfo=Thanh toan detox&accountName=${name}`;

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-2xl p-6 relative animate-fadeIn">
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3"
          >
            <XMarkIcon className="w-6 h-6 text-gray-500 hover:rotate-90 transition" />
          </button>

          {/* Content */}
          <h2 className="text-xl font-semibold text-center mb-4">
            💳 Thanh toán
          </h2>

          <p className="text-center text-gray-600 mb-4">
            Quét mã QR để thanh toán
          </p>

          <img src={qr} alt="QR" className="mx-auto w-56 h-56" />

          <p className="text-center mt-4 text-lg font-bold text-emerald-600">
            {total.toLocaleString()}₫
          </p>

          <p className="text-center text-sm text-gray-500 mt-2">
            Nội dung: Thanh toan detox
          </p>
        </div>
      </div>
    </>
  );
}
