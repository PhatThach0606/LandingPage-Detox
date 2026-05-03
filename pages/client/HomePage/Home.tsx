"use client";

import { ArrowRight, Leaf, Star, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
export default function Home() {
  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut", // OK sau khi dùng Variants
      },
    },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#F9FBFA] overflow-hidden pt-10 md:pt-0">
      {/* 1. LAYER NỀN: Gradient & Hình khối mềm */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#E2F6D9] rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#F8D9C0] rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 md:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN: NỘI DUNG CHÍNH (Chiếm 7 cột) */}
          <motion.div
            className="lg:col-span-7"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Tag line nhỏ */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-green-100 shadow-sm mb-8"
            >
              <Leaf className="text-green-500" size={16} />
              <span className="text-xs md:text-sm font-bold text-green-800 uppercase tracking-widest">
                Sống Lành • Thở Khỏe • An Nhiên
              </span>
            </motion.div>

            {/* Tiêu đề chính - Phối hợp Serif và Sans-serif nếu có thể */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl  lg:text-7xl font-black text-[#0A2E1F] leading-[1.1] mb-8"
            >
              Nghe cơ thể mình <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 italic font-extrabold">
                chọn điều lành
              </span>
              <br />
              mỗi ngày.
            </motion.h1>

            {/* Khối nội dung tập trung - Glassmorphism Card */}
            <motion.div
              variants={fadeInUp}
              className="relative p-1 md:p-2 rounded-[2.5rem] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl border border-white/50 shadow-2xl shadow-green-900/5 mb-10"
            >
              <div className="bg-white/60 rounded-[2rem] p-8 md:p-10">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                  Trái Lành không chỉ là một sản phẩm detox. Chúng tôi là người
                  bạn đồng hành giúp người trẻ hiện đại tái kết nối với bản
                  thân, chuyển hóa những áp lực thành năng lượng cân bằng thông
                  qua sức mạnh thuần khiết từ rau củ và hạt tự nhiên.
                </p>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-green-100/50">
                  <div className="flex items-center gap-3 text-sm font-bold text-green-900">
                    <ShieldCheck className="text-green-500" /> 100% Nguyên bản
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-green-900">
                    <Star className="text-orange-400" /> Chuẩn Healthy
                  </div>
                </div>
              </div>

              {/* Các icon rau củ bay xung quanh (Decor nhẹ) */}
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                src="/carrotvv.png"
                className="absolute -top-10 -right-6 w-16 h-16 drop-shadow-xl hidden md:block"
                alt=""
              />
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                src="/camvv.png"
                className="absolute -bottom-8 -left-8 w-20 h-20 drop-shadow-2xl opacity-80"
                alt=""
              />
            </motion.div>

            {/* Action Hub - Thay thế nút absolute cũ */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link href={"/about"}>
                <button className="group cursor-pointer relative flex items-center gap-4 bg-[#0A2E1F] text-white px-10 py-5 rounded-2xl font-black text-lg tracking-wide overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-green-900/20">
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 uppercase">Tìm hiểu ngay</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>

              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"
                  />
                ))}
                <div className="pl-6 text-sm font-bold text-slate-500 uppercase tracking-tighter">
                  +500 khách hàng tin dùng
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: HÌNH ẢNH SẢN PHẨM (Chiếm 5 cột) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative z-10 w-full aspect-square flex items-center justify-center">
              {/* Vòng tròn hào quang phía sau sản phẩm */}
              <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-green-200/50 to-orange-100/50 rounded-full animate-pulse blur-2xl" />

              <motion.img
                src="/3chai-fruits.png"
                className="relative z-20 w-full h-auto object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                alt="Trái Lành Products"
              />

              {/* Các icon nhỏ bổ trợ */}
              <img
                src="/nhovv.png"
                className="absolute top-10 left-10 w-20 animate-bounce"
                alt=""
              />
              <img
                src="/dauvv.png"
                className="absolute bottom-10 right-0 w-24 -rotate-12"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. LAYER TRANG TRÍ CUỐI TRANG */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
