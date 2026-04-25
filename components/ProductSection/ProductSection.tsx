"use client";

import { ProductCard } from "../ProductCart/Product";

export function ProductSection({ title, products }: any) {
  return (
    <section className="bg-emerald-50 py-10 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

        <button className="text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer transition">
          Xem tất cả →
        </button>
      </div>

      {/* Grid - chỉ lấy 4 sản phẩm */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products?.slice(0, 4).map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
