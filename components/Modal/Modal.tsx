"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";

interface Product {
  id: number;
  name: string;
  subName: string;
  price: string;
  originalPrice: string;
  description: string;
  image: string;
  bgText: string;
  image1: string;
  image2: string;
}

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

export default function ProductModal({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Lớp nền mờ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          />

          {/* Nội dung Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-6xl bg-[#FCFDFB] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] flex flex-col md:flex-row min-h-[500px]"
          >
            {/* Nút đóng góc trên */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 z-50 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-8 h-8 text-slate-400" />
            </button>

            {/* LAYER 1: CHỮ BACKGROUND CHẠY NGANG */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
              <motion.h2
                initial={{ x: "20%", opacity: 0 }}
                animate={{ x: "0%", opacity: 0.07 }}
                className="text-[15rem] md:text-[22rem] font-black text-green-500 uppercase italic whitespace-nowrap"
              >
                {product.bgText} {product.bgText}
              </motion.h2>
            </div>

            {/* LAYER 2: THÔNG TIN TRÁI (Tên & Giá) */}
            <div className="relative z-10 flex-1 p-12 md:p-20 flex flex-col justify-center">
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  variants={contentVariants}
                  className="text-green-600 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                >
                  {product.subName}
                </motion.span>

                <motion.h3
                  variants={contentVariants}
                  className="text-6xl md:text-8xl font-black text-[#0A2E1F] uppercase leading-none mb-6"
                >
                  {product.name.split(" ")[0]} <br />
                  <span className="text-green-500 italic">
                    {product.name.split(" ")[1]}
                  </span>
                </motion.h3>

                <motion.div
                  variants={contentVariants}
                  className="flex flex-col"
                >
                  <span className="text-slate-300 line-through text-2xl font-medium">
                    {product.originalPrice}
                  </span>
                  <span className="text-4xl font-black text-[#0A2E1F]">
                    {product.price}
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* LAYER 3: HÌNH ẢNH TRUNG TÂM (Chai nước & Decor) */}
            <div className="relative z-20 flex-1 flex items-center justify-center">
              {/* Các lát dưa leo bay lơ lửng */}
              <motion.img
                animate={{ y: [0, -30, 0], rotate: [0, 20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={product.image1}
                className="absolute top-10 left-0 w-28 h-28 drop-shadow-xl"
              />
              <motion.img
                animate={{ y: [0, 30, 0], rotate: [0, -25, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                src={product.image2}
                className="absolute bottom-10 right-0 w-36 h-36 drop-shadow-2xl opacity-80"
              />

              {/* Chai nước chính */}
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-[85%] md:w-[110%] h-auto drop-shadow-[0_60px_90px_rgba(0,0,0,0.15)] z-30 max-w-none"
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
              />
            </div>

            {/* LAYER 4: MÔ TẢ PHẢI */}
            <div className="relative z-10 flex-1 p-12 md:p-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-xs lg:ml-auto border-r-8 border-green-500 pr-8"
              >
                <p className="text-slate-600  leading-relaxed italic text-justify  text-xl md:text-2xl">
                  "{product.description}"
                </p>
                <div className="mt-6 flex justify-end">
                  <div className="h-1 w-20 bg-green-200 rounded-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
