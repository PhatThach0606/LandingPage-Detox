"use client";

import Image from "next/image";

export function CategoryGrid() {
  const categories = [
    { name: "Detox 1 Ngày", image: "/images/detox-1day.jpg" },
    { name: "Detox 3 Ngày", image: "/images/detox-3day.jpg" },
    { name: "Detox 7 Ngày", image: "/images/detox-7day.jpg" },
    { name: "Cold Pressed Juice", image: "/images/cold-pressed.jpg" },
    { name: "Smoothie Healthy", image: "/images/smoothie.jpg" },
    { name: "Combo Giảm Cân", image: "/images/weight-loss.jpg" },
    { name: "Combo Thanh Lọc", image: "/images/cleanse.jpg" },
    { name: "Snack Eat Clean", image: "/images/snack.jpg" },
  ];

  return (
    <div className="bg-green-50 px-6 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((c, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <Image
              src={c.image}
              alt={c.name}
              width={400}
              height={400}
              className="w-full h-44 object-cover group-hover:scale-110 transition duration-300"
            />

            {/* Overlay xanh nhẹ thay vì đen */}
            <div className="absolute inset-0 bg-green-900/20 group-hover:bg-green-900/30 transition" />

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-semibold text-lg text-center px-2 drop-shadow">
                {c.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
