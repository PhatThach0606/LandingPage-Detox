"use client";

import { useCart } from "@/context/CartContext";
import { XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast"; // 1. Import toast ở đây

export function CheckoutModal({ open, setOpen }: any) {
  const { total, clearCart } = useCart();

  const bankConfig = {
    bank: "Vietcombank",
    account: "1037633105",
    name: "Đặng Ngọc Thy",
    memo: "Thanh toan detox",
  };

  const qrUrl = `https://img.vietqr.io/image/${bankConfig.bank}-${bankConfig.account}-compact2.png?amount=${total}&addInfo=${encodeURIComponent(bankConfig.memo)}&accountName=${encodeURIComponent(bankConfig.name)}`;

  const handleComplete = () => {
    // 2. Logic xử lý sau khi bấm Hoàn tất
    clearCart();
    setOpen(false);

    // 3. Thay alert bằng toast cực đẹp
    toast.success("Đặt hàng thành công! Chúng tôi sẽ sớm liên hệ.", {
      duration: 5000,
      icon: "🎉",
      style: {
        borderRadius: "20px",
        background: "#064e3b",
        color: "#fff",
        fontWeight: "bold",
      },
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-sm bg-white rounded-[2rem] shadow-2xl overflow-hidden"
          >
            {/* Header Gradient */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-center text-white">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-1.5 bg-white/20 hover:bg-white/30 rounded-full transition"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircleIcon className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-wide">
                Thanh toán
              </h2>
              <p className="text-emerald-100 text-sm opacity-90">
                Quét mã QR qua ứng dụng ngân hàng
              </p>
            </div>

            <div className="p-8">
              {/* QR Code */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <img
                    src={qrUrl}
                    alt="QR Payment"
                    className="w-full aspect-square object-contain mix-blend-multiply"
                  />
                </div>
              </div>

              {/* Price Details */}
              <div className="mt-8 space-y-4 text-center">
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-[0.2em] mb-1">
                    Tổng cộng
                  </p>
                  <p className="text-4xl font-black text-slate-800 tracking-tighter">
                    {total.toLocaleString()}
                    <span className="text-lg ml-1 font-bold text-emerald-500">
                      ₫
                    </span>
                  </p>
                </div>

                {/* Bank Details */}
                <div className="bg-slate-50 rounded-2xl p-4 text-left border border-slate-100 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-[11px] font-bold uppercase">
                      Chủ tài khoản
                    </span>
                    <span className="text-slate-700 text-xs font-bold">
                      {bankConfig.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-[11px] font-bold uppercase">
                      Số tài khoản
                    </span>
                    <span className="text-slate-700 text-xs font-bold">
                      {bankConfig.account}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-[11px] font-bold uppercase">
                      Nội dung
                    </span>
                    <span className="text-emerald-600 text-xs font-black italic">
                      {bankConfig.memo}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleComplete}
                className="mt-8 w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl active:scale-[0.98] transition-all"
              >
                Hoàn tất & Gửi đơn
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
