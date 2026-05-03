"use client";
import { useState } from "react"; // Thêm useState
import { motion } from "framer-motion";
import {
  HeartIcon,
  ChevronRightIcon,
  StarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { useCart } from "@/context/CartContext";
import ProductModal from "@/components/Modal/Modal";

interface ProductProps {
  id: string;
  name: string;
  price: string;
  originalPrice: string; // Thêm giá gốc cho Modal
  image: string;
  decorImage: string;
  badgeImage: string;
  bgColor: string;
  accentColor: string;
  description: string; // Thêm mô tả cho Modal
  bgText: string; // Thêm chữ nền cho Modal (vd: DETOX)
  image1: string;
  image2: string;
}

export default function ProductCard(props: ProductProps) {
  const {
    id,
    name,
    price,
    image,
    decorImage,
    badgeImage,
    bgColor,
    accentColor,
  } = props;
  const { addToCart } = useCart();

  // Trạng thái đóng mở Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Ngăn chặn sự kiện nổi bọt nếu cần
    const numericPrice = parseInt(price.replace(/\D/g, ""));
    addToCart({ id, name, price: numericPrice, image });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full max-w-[340px] pt-24 group"
      >
        {/* Decor trái cây */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 -left-8 z-20 w-24 h-24 pointer-events-none"
        >
          <img
            src={decorImage}
            alt="decor"
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>

        <div
          style={{ backgroundColor: bgColor }}
          className="rounded-[50px] p-7 pt-28 pb-10 shadow-sm flex flex-col items-center relative transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
        >
          {/* Ảnh chai nước */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 z-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2">
            <img
              src={image}
              alt={name}
              className="w-full h-auto drop-shadow-lg"
            />
          </div>

          {/* Badge */}
          <div className="absolute -right-6 top-[35%] z-20 w-28 drop-shadow-lg">
            <img src={badgeImage} alt="badge" className="w-full h-auto" />
          </div>

          {/* Name */}
          <div className="bg-white w-full rounded-[30px] py-4 px-2 text-center shadow-sm mb-6 border border-white">
            <h3
              style={{ color: accentColor }}
              className="text-2xl font-black italic uppercase tracking-tighter"
            >
              {name}
            </h3>
          </div>

          {/* Price & Like */}
          <div className="flex items-center justify-between w-full px-3 mb-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400">
                Giá bán
              </span>
              <span
                style={{ color: accentColor }}
                className="text-2xl font-black italic"
              >
                {price}
              </span>
            </div>
            <button className="p-3 rounded-2xl bg-white text-slate-300 hover:text-red-500 transition-colors shadow-sm">
              <HeartIcon className="w-6 h-6" />
            </button>
          </div>

          {/* NÚT THÊM VÀO GIỎ */}
          <button
            onClick={handleAddToCart}
            style={{ backgroundColor: accentColor }}
            className="w-full py-4 cursor-pointer rounded-[25px] text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg hover:brightness-110 active:scale-95 transition-all mb-6"
          >
            <ShoppingBagIcon className="w-5 h-5" />
            Thêm vào giỏ
          </button>

          {/* Footer - NÚT XEM CHI TIẾT */}
          <div className="flex items-center justify-between w-full px-2">
            <button
              onClick={() => setIsModalOpen(true)} // Mở modal ở đây
              style={{ color: accentColor }}
              className="flex items-center cursor-pointer gap-2 font-extrabold italic text-xs uppercase group/btn"
            >
              Xem chi tiết
              <ChevronRightIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-white" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hiển thị Modal khi state là true */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          id: Number(id),
          name: name,
          subName: name + " Natural",
          price: price,
          originalPrice: props.originalPrice,
          description: props.description,
          image: image,
          bgText: props.bgText,
          image1: props.image1,
          image2: props.image2,
        }}
      />
    </>
  );
}
