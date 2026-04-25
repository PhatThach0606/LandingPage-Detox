"use client";

import Image from "next/image";

export function CategoryGrid() {
  const categories = [
    {
      name: "Nước ép giải độc",
      image:
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800",
    },
    {
      name: "Nước Ép Lạnh",
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800",
    },
    {
      name: "Sinh tố tốt cho sức khỏe",
      image:
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=800",
    },
    {
      name: "Bữa ăn nhẹ lành mạnh",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800",
    },
  ];

  return (
    <section className="bg-green-50 px-4 md:px-6 py-10">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Danh mục sản phẩm
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((c, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition"
          >
            {/* Image */}
            <Image
              src={c.image}
              alt={c.name}
              width={400}
              height={400}
              className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition duration-300"
            />

            {/* Gradient overlay hiện đại */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition" />

            {/* Text */}
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-white font-semibold text-base md:text-lg drop-shadow">
                {c.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
