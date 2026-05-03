"use client";
export const dynamic = "force-dynamic";
import ProductCard from "@/components/ProductCart/Product";
import { motion } from "framer-motion";

const PRODUCT_DATA = [
  {
    id: "prod-orange",
    name: "Orange Glow",
    price: "40.000 VND",
    originalPrice: "50.000 VND",
    image: "/chaicam.png",
    image1: "/1dongcam.png",
    image2: "/1miengcam.png",
    decorImage: "/camvv.png",
    badgeImage: "/100cam.png",
    bgColor: "#ffe8d9",
    accentColor: "#f95208",
    bgText: "ENERGY",
    description: `Orange Glow là sự kết hợp từ cam, cà rốt
và trái cây tự nhiên, mang vị tươi ngọt dễ
uống, giúp cơ thể bổ sung vitamin và duy
trì năng lượng mỗi ngày. Lựa chọn nhẹ
nhàng để bạn cảm thấy rạng rỡ và khỏe
khoắn hơn từ bên trong.
`,
  },
  {
    id: "prod-green",
    name: "Green Fresh",
    price: "40.000 VND",
    originalPrice: "55.000 VND",
    image: "/chaixanh.png",
    image1: "/1miengdua.png",
    image2: "/3miengdua.png",
    decorImage: "/dualeovv.png",
    badgeImage: "/100xanh.png",
    bgColor: "#e2f2d5",
    accentColor: "#2d5a27",
    bgText: "DETOX",
    description: `Sự kết hợp từ rau xanh và trái cây tự nhiên như cần
tây, dưa leo và táo xanh, mang đến vị thanh mát, dễ
uống. Green Fresh giúp cơ thể nhẹ nhàng, tươi mới
hơn mỗi ngày — một lựa chọn đơn giản để bắt đầu
sống lành từ bên trong.`,
  },
  {
    id: "prod-berry",
    name: "Berry Mix",
    price: "40.000 VND",
    originalPrice: "60.000 VND",
    image: "/chaitim.png",
    image1: "/berry.png",
    image2: "/berry_alone.png",
    decorImage: "/dauvv.png",
    badgeImage: "/100xanhla.png",
    bgColor: "#ffe4e6",
    accentColor: "#be123c",
    bgText: "VITAL",
    description: `Berry là sự kết hợp từ các loại quả mọng tự
nhiên, mang vị chua ngọt hài hòa, dễ uống và
tươi mát. Giàu chất chống oxy hóa, Berry giúp
cơ thể cảm thấy nhẹ nhàng hơn và hỗ trợ nuôi
dưỡng vẻ rạng rỡ từ bên trong mỗi ngày.`,
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
            Menu <span className="text-green-500 not-italic">Trái lành</span>
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
