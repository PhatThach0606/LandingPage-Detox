"use client";
import { motion } from "framer-motion";
export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-[#FCFDFB] py-28 px-6 md:px-12 flex flex-col items-center overflow-hidden font-sans pt-40">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-100 rounded-full blur-[120px] opacity-40 z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] opacity-50 z-0" />

      <div className="max-w-7xl mx-auto z-10 w-full flex flex-col items-center">
        {/* TOP: CONSOLIDATED HEADER & CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full flex flex-col items-center text-center mb-20"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 text-green-600 font-bold tracking-[0.3em] uppercase text-sm mb-6"
          >
            <span className="w-12 h-[1px] bg-green-300"></span>
            Câu chuyện Trái Lành
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black text-[#0A2E1F] leading-tight uppercase italic mb-10 max-w-4xl"
          >
            Nơi bạn bắt đầu hành trình{" "}
            <span className="text-green-500 not-italic font-extrabold">
              sống lành
            </span>
          </motion.h1>

          {/* Consolidated Text Block - Diagonally Aligned Text */}
          <motion.div
            variants={itemVariants}
            className="relative p-10 md:p-12 bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.03)] border border-slate-50 space-y-10 text-left max-w-3xl"
          >
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed italic">
              "
              <span className="font-bold not-italic text-slate-900">
                Trái Lành
              </span>{" "}
              ra đời từ mong muốn mang đến những lựa chọn thức uống lành mạnh,
              phù hợp với nhịp sống bận rộn. Chúng tôi tin rằng, việc chăm sóc
              bản thân bắt đầu từ những thói quen nhỏ nhất."
            </p>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic border-t border-slate-100 pt-8">
              Sử dụng 100% nguyên liệu tự nhiên từ trái cây, rau củ và hạt, giữ
              trọn giá trị dinh dưỡng để cơ thể bạn thực sự được{" "}
              <span className="font-bold text-green-600 not-italic uppercase text-xl">
                “thở”
              </span>{" "}
              và tái cân bằng.
            </p>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic border-t border-slate-100 pt-8">
              Sống lành là hành trình bạn tử tế với chính mình{" "}
              <span className="font-bold text-slate-800 not-italic uppercase text-xl">
                từ bên trong
              </span>
              .
            </p>
          </motion.div>
        </motion.div>

        {/* BOTTOM: VISUAL ASSETS (Diagonally Interwoven) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex justify-center items-center gap-12 pt-20"
        >
          {/* Main Bottle - Center-Right with overlapping effects */}
          <motion.div
            variants={itemVariants}
            className="relative z-20 w-[70%] md:w-[40%]"
          >
            <motion.img
              src="/chainghieng.png"
              alt="Trái Lành Bottle"
              className="w-full h-auto drop-shadow-[0_45px_70px_rgba(0,0,0,0.12)]"
              animate={{
                y: [0, -25, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Background Layering Blurs - to merge image with space */}
            <div className="absolute inset-0 bg-green-100/50 rounded-full blur-[100px] z-0 opacity-40" />
          </motion.div>

          {/* Interwoven Decorative Icons */}
          <motion.img
            variants={itemVariants}
            src="/nhovv.png"
            className="absolute top-10 right-[-10px] w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity"
            animate={{ rotate: 15 }}
          />
          <motion.img
            variants={itemVariants}
            src="/camvv.png"
            className="absolute -top-10 left-[15%] w-24 h-24 drop-shadow-xl animate-bounce-slow"
          />
          <motion.img
            variants={itemVariants}
            src="/carrotvv.png"
            className="absolute bottom-10 left-[5%] w-20 h-20 drop-shadow-lg -rotate-12 animate-pulse-slow"
          />
          <motion.img
            variants={itemVariants}
            src="/dualeovv.png"
            className="absolute -bottom-10 right-[20%] w-28 h-28 opacity-20 rotate-12"
          />
        </motion.div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="pt-24 pb-20 w-full flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-14 py-6 bg-[#0A2E1F] text-white font-black rounded-3xl uppercase tracking-[0.1em] text-xl shadow-2xl shadow-green-900/15 hover:bg-green-900 transition-all"
          >
            Bắt đầu ngay hôm nay
          </motion.button>
        </motion.div>
      </div>

      {/* Global CSS injected via Tailwind or style tag */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap");

        body {
          font-family: "Plus Jakarta Sans", sans-serif;
          background-color: #fcfdfb;
          color: #0a2e1f;
        }
      `}</style>
    </section>
  );
}
