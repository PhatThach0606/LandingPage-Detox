"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Thanh lọc cơ thể",
    desc: "Loại bỏ độc tố, giúp cơ thể nhẹ nhàng và khỏe mạnh hơn mỗi ngày",
    image: "/DT1.jpg",
  },
  {
    title: "Giảm cân tự nhiên",
    desc: "Hỗ trợ giảm cân an toàn, không ép cơ thể, không mệt mỏi",
    image: "/DT2-new.jpg",
  },
  {
    title: "Năng lượng tích cực",
    desc: "Cung cấp vitamin từ trái cây tươi, giúp bạn tràn đầy năng lượng",
    image: "/DT3-new.jpg",
  },
  {
    title: "Làn da tươi sáng",
    desc: "Thanh lọc từ bên trong giúp da khỏe, sáng và ít mụn hơn",
    image: "/DT4.jpg",
  },
  {
    title: "Lối sống lành mạnh",
    desc: "Bắt đầu hành trình sống healthy với detox mỗi ngày",
    image: "/DT5-new.jpg",
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {/* Container có bo góc */}
      <div className="relative w-full h-120 md:h-150 overflow-hidden  shadow-xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${
              index === current
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Image fit đẹp hơn */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />

            {/* Overlay nhẹ */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-6 md:px-16">
              <div className="max-w-xl bg-white/30 p-6 md:p-8 rounded-2xl shadow-xl animate-fadeUp">
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  {slide.title}
                </h2>

                <p className="mt-3 text-lg text-black">{slide.desc}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === current ? "bg-emerald-500 scale-110" : "bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
