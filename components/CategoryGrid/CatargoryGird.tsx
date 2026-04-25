"use client";

import Image from "next/image";

export function CategoryGrid() {
  const categories = [
    {
      name: "Nước ép giải độc",
      image:
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&q=80",
    },
    {
      name: "Nước ép lạnh",
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&q=80",
    },
    {
      name: "Sinh tố trái cây",
      image:
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80",
    },
    {
      name: "Bữa ăn healthy",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
    },

    // 👉 8 ảnh thêm
    {
      name: "Nước cam tươi",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80",
    },
    {
      name: "Smoothie berry",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
    },
    {
      name: "Detox nước lọc",
      image:
        "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=800&q=80",
    },
    {
      name: "Trái cây tươi",
      image:
        "https://truejuice.vn/articles/wp-content/uploads/2021/06/nuoc-detox-thanh-loc-co-the-truejuice.jpg",
    },
    {
      name: "Nước detox xanh",
      image:
        "https://truejuice.vn/articles/wp-content/uploads/2021/06/tac-dung-cua-nuoc-detox-truejuice.jpg",
    },
    {
      name: "Citrus mix",
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&q=80",
    },
    {
      name: "Healthy drink set",
      image:
        "https://truejuice.vn/articles/wp-content/uploads/2021/06/nuoc-detox-la-gi-truejuice.jpg",
    },
    {
      name: "Juice mix",
      image:
        "https://truejuice.vn/articles/wp-content/uploads/2021/06/nuoc-detox-chanh-sa-truejuice.jpg",
    },
  ];

  return (
    <section className="bg-green-50 px-3 md:px-6 py-8">
      {/* Title */}
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">
        Danh mục sản phẩm
      </h2>

      {/* Grid nhỏ hơn */}
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-5 md:gap-6 ">
        {categories.map((c, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* Image nhỏ hơn */}
            <div className="relative w-full aspect-square">
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Overlay nhẹ */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Text nhỏ gọn */}
            <div className="absolute bottom-1 left-1 right-1">
              <p className="text-white text-xl md:text-xs font-medium text-center">
                {c.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
