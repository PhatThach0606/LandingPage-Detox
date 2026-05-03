"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        // Ép kiểu 'as const' hoặc gán Variants giúp TS hiểu mảng này là một hằng số bezier
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#FCFDFB] py-20 px-6 md:px-12 flex items-center overflow-hidden font-sans">
      {/* Background Layer */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100/40 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT COLUMN: CONTENT */}
          <div className="order-2 lg:order-1 text-left">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 text-green-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-8"
            >
              <span className="w-10 h-[2px] bg-green-500"></span>
              Câu chuyện Trái Lành
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0A2E1F] leading-[1.1] uppercase italic mb-8"
            >
              Nơi bạn bắt đầu <br />
              <span className="text-green-500 not-italic font-extrabold relative">
                hành trình sống lành
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-green-200 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 25 0 50 5 T 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-6 max-w-xl">
              <div className="relative p-8 md:p-10 bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-sm border border-white/80 transition-hover hover:shadow-md">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-6">
                  <span className="text-green-700 font-bold">Trái Lành</span> ra
                  đời từ mong muốn mang đến những lựa chọn thức uống lành mạnh,
                  phù hợp với nhịp sống hiện đại.
                </p>
                <p className="text-slate-600 leading-relaxed border-l-4 border-green-500 pl-6 italic">
                  Sử dụng 100% nguyên liệu tự nhiên để cơ thể bạn thực sự được
                  <span className="text-green-600 font-bold not-italic px-1">
                    “thở”
                  </span>
                  và tái cân bằng từ bên trong.
                </p>
              </div>
              <Link href={"/products"}>
                <motion.button
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer  flex items-center gap-4 px-10 py-5 bg-[#0A2E1F] text-white font-bold rounded-2xl uppercase tracking-wider shadow-xl shadow-green-900/20 hover:bg-green-800 transition-all"
                >
                  Khám phá ngay
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: VISUALS */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center py-10">
            {/* Main Bottle Container */}
            <motion.div
              variants={itemVariants}
              className="relative z-20 w-[80%] md:w-[70%] lg:w-full max-w-[450px]"
            >
              <motion.img
                src="/chainghieng.png"
                alt="Trái Lành Bottle"
                className="w-full h-auto drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]"
                animate={{
                  y: [0, -20, 0],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Glow effect behind bottle */}
              <div className="absolute inset-0 bg-green-400/20 rounded-full blur-[120px] -z-10 scale-75" />
            </motion.div>

            {/* Decorative Floating Elements (Responsive hidden/show) */}
            <motion.img
              src="/nhovv.png"
              className="absolute top-0 right-0 w-16 md:w-24 opacity-60 hidden md:block"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.img
              src="/camvv.png"
              className="absolute top-[10%] left-0 w-20 md:w-28 drop-shadow-lg"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.img
              src="/carrotvv.png"
              className="absolute bottom-[5%] left-[10%] w-16 md:w-24 -rotate-12"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.img
              src="/dualeovv.png"
              className="absolute bottom-0 right-[5%] w-24 md:w-32 opacity-40 md:opacity-100"
            />
          </div>
        </motion.div>
      </div>

      {/* Global Style Optimization */}
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
