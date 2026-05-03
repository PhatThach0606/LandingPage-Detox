"use client";
import { motion } from "framer-motion";
// Cài đặt: npm install @heroicons/react
import {
  ArrowUpRightIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const SocialIcons = {
  Facebook: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  ),
  TikTok: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.06 3.42-.01 6.83-.02 10.25-.17 2.67-1.98 5.2-4.64 5.76-2.85.7-6.13-.44-7.46-3.05-1.52-2.73-.55-6.66 2.18-8.13.72-.41 1.51-.62 2.33-.71v4c-.49.06-.97.23-1.38.52-1.01.72-1.34 2.19-.75 3.3.51 1.05 1.83 1.61 2.92 1.25 1.05-.3 1.77-1.35 1.76-2.45-.03-4.39-.01-8.79-.01-13.18z" />
    </svg>
  ),
  Instagram: () => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
};

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#FCFDFB] font-sans text-[#2d5a27] selection:bg-green-100 pt-15 md:pt-2 lg:pt-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* SECTION 1: GIỚI THIỆU (Storytelling) */}
        <section className="py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-green-50">
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-green-600 font-bold tracking-[0.2em] uppercase text-xs">
              <SparklesIcon className="w-5 h-5" />
              <span>Câu chuyện Trái Lành</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-medium leading-tight text-slate-800 italic">
                “Chăm sóc cơ thể bắt đầu từ những{" "}
                <span className="text-[#2d5a27] font-black not-italic underline decoration-green-200 underline-offset-8">
                  thói quen nhỏ nhất
                </span>{" "}
                mỗi ngày.”
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-full text-justify">
                Trái Lành ra đời để mang đến sự tử tế cho chính bạn thông qua
                nguồn dinh dưỡng thuần khiết. Không đường tinh luyện, không
                hương liệu — chỉ có sự tươi mới từ trái cây và hạt, giúp bạn tái
                cân bằng năng lượng ngay cả trong những ngày bận rộn nhất.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-green-200 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
              <img
                src="/3chai-fruits.png"
                alt="Sản phẩm Trái Lành"
                className="relative z-10 w-full max-w-[700px] drop-shadow-3xl transform group-hover:rotate-2 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: BENTO FOOTER (Hiện đại & Gọn gàng) */}
        <footer className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            {/* Cột 1: Thông điệp thương hiệu */}
            <div className="lg:col-span-4 space-y-6">
              <div className="text-2xl font-black text-[#2d5a27] tracking-tighter uppercase italic">
                Trái Lành<span className="text-emerald-500">.</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Uống lành, sống từ bên trong. Chúng tôi cung cấp các liệu trình
                detox và nước ép nguyên bản cho lối sống hiện đại.
              </p>
              <div className="flex gap-4 pt-2">
                {[
                  {
                    icon: <SocialIcons.Facebook />,
                    label: "Facebook",
                    href: "https://www.facebook.com/profile.php?id=61567982570793&mibextid=wwXIfr&rdid=YPSmIo2TPzHLQW9F&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18qEwGNaem%2F%3Fmibextid%3DwwXIfr#",
                  },
                  {
                    icon: <SocialIcons.Instagram />,
                    label: "Instagram",
                    href: "https://www.instagram.com/",
                  },
                  {
                    icon: <SocialIcons.TikTok />,
                    label: "TikTok",
                    href: "https://www.tiktok.com/@trailanhofficial?_r=1&_d=secCgYIASAHKAESPgo8fYguFN%2Bko2JnE1nwPNG6l1fGncddi8mEBDgQ06eTYRZ9DdNqzYvMhmrUoGV1NAm75aKVmq2EFKuYmgrQGgA%3D&_svg=1&checksum=320bc28c955719acbc872a69d851c4b352f1def4377915fd35f2c96838b59236&item_author_type=2&reflow_sign_scene=7&rgssign=8.1.70II-nrGx7HpLvpvQoldWg&sec_uid=MS4wLjABAAAAVDXZ1nx1a1_RUB2SrtxSWmqMmc5IJqNZdwWSxu3jVS3aZeIloTVrDVJBI1kG-nxL&sec_user_id=MS4wLjABAAAAcQ7a4P3dzKfz3_7I_S0f_Ea4-axC6TSaGwcQ3-YuUw6JJf57FfsNRjMQ8wsHNKTH&share_app_id=1180&share_author_id=7629696624092611585&share_link_id=CB6E0060-F5C0-448D-8FD9-E32DB61C19D8&share_region=VN&share_scene=1&sharer_language=vi&social_share_type=5&source=h5_t&timestamp=1777787484&tt_from=copy&u_code=de1e4af6d1g3ee&ug_btm=b2878%2Cb5836&user_id=6860818267902510082&utm_campaign=client_share&utm_medium=ios&utm_source=copy",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3  target:_blank rounded-xl border border-green-100 text-green-700 hover:bg-[#2d5a27] hover:text-white transition-all shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Cột 2 & 3: Link điều hướng */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-[11px] tracking-widest">
                  Khám phá
                </h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  {["Câu chuyện", "Dinh dưỡng", "Blog", "Liên hệ"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center group cursor-pointer hover:text-green-700 transition-colors"
                      >
                        <ArrowUpRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-[11px] tracking-widest">
                  Hỗ trợ
                </h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  {["Giao hàng", "Đổi trả", "Bảo mật", "Điều khoản"].map(
                    (item) => (
                      <li
                        key={item}
                        className="cursor-pointer hover:text-green-700 transition-colors"
                      >
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Cột 4: Đăng ký & Liên hệ nhanh */}
            <div className="lg:col-span-4 bg-green-50/50 p-8 rounded-[2rem] border border-green-100">
              <h4 className="font-bold text-[#2d5a27] mb-4 flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5" />
                Kết nối với chúng tôi
              </h4>
              <p className="text-xs text-green-800/70 mb-6 italic">
                Nhận ngay cẩm nang sống lành và ưu đãi 10% cho đơn hàng đầu
                tiên.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn..."
                  className="flex-1 px-4 py-3 rounded-xl bg-white border border-green-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20"
                />
                <button className="bg-[#2d5a27] text-white p-3 rounded-xl hover:bg-green-800 transition-colors shadow-lg shadow-green-900/10">
                  <ArrowUpRightIcon className="w-5 h-5 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>

          {/* THANH BẢN QUYỀN CUỐI CÙNG */}
          <div className="pt-10 border-t border-green-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <GlobeAltIcon className="w-3 h-3" /> Vietnam
              </span>
              <span>© {currentYear} TRAILANH CO.</span>
              <span className="hidden md:inline">•</span>
              <span>Design for Healthy Life</span>
            </div>

            <div className="flex items-center gap-2 text-[#2d5a27] font-bold italic tracking-tight">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span>Uống lành, sống từ bên trong.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
