"use client";
export const dynamic = "force-dynamic";
import ProductCard from "@/components/ProductCart/Product";
import { motion } from "framer-motion";

const PRODUCT_DATA = [
  {
    id: "prod-orange", // ID duy nhất cho Cam
    name: "Orange Glow",
    price: "40.000 VND",
    image: "/chaicam.png",
    decorImage: "/camvv.png",
    badgeImage: "/100cam.png",
    bgColor: "#ffe8d9",
    accentColor: "#f95208",
  },
  {
    id: "prod-green", // ID duy nhất cho Xanh
    name: "Green Fresh",
    price: "45.000 VND",
    image: "/chaixanh.png",
    decorImage: "/dualeovv.png",
    badgeImage: "/100xanh.png",
    bgColor: "#e2f2d5",
    accentColor: "#2d5a27",
  },
  {
    id: "prod-berry", // ID duy nhất cho Berry
    name: "Berry Mix",
    price: "48.000 VND",
    image: "/chaitim.png",
    decorImage: "/dauvv.png",
    badgeImage: "/100xanhla.png",
    bgColor: "#ffe4e6",
    accentColor: "#be123c",
  },
];

export default function Product() {
  return (
    <div className="min-h-screen bg-[#FCFDFB] py-20 px-6 pt-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#0A2E1F] italic uppercase tracking-tight"
          >
            Menu <span className="text-green-500 not-italic">Tươi Lành</span>
          </motion.h2>
          <p className="text-slate-500 max-w-lg mx-auto italic">
            Mỗi chai nước ép là một sự kết hợp hoàn hảo từ thiên nhiên, giúp bạn
            rạng rỡ từ bên trong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-12 justify-items-center">
          {PRODUCT_DATA.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
