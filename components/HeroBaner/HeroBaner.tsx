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
    <div className="w-full">
      {/* HERO CONTAINER */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden rounded-none sm:rounded-2xl shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${
              index === current
                ? "opacity-100 z-10 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />

            {/* Overlay đậm hơn cho dễ đọc */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-16">
              <div className="max-w-lg bg-white/20 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  {slide.title}
                </h2>

                <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === current ? "bg-emerald-400 scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
