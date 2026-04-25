"use client";

import {
  TruckIcon,
  ArrowPathIcon,
  CreditCardIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export function ServiceBar() {
  const items = [
    {
      icon: TruckIcon,
      title: "Giao hàng miễn phí",
      desc: "Đơn từ 300.000đ",
    },
    {
      icon: ArrowPathIcon,
      title: "Đổi trả dễ dàng",
      desc: "Trong vòng 7 ngày",
    },
    {
      icon: CreditCardIcon,
      title: "Thanh toán linh hoạt",
      desc: "COD / Chuyển khoản / Ví điện tử",
    },
    {
      icon: HeartIcon,
      title: "Tư vấn 24/7",
      desc: "Hỗ trợ tận tâm mỗi ngày",
    },
  ];

  return (
    <div className="bg-emerald-50 py-4">
      {/* Mobile: scroll ngang | Desktop: grid */}
      <div className="flex gap-3 overflow-x-auto px-4 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible">
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="
                flex-shrink-0
                w-64 md:w-auto
                flex items-center gap-4
                p-4 bg-white rounded-xl
                shadow-sm hover:shadow-md
                transition
              "
            >
              {/* Icon */}
              <div className="p-3 bg-emerald-100 rounded-full">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>

              {/* Text */}
              <div>
                <p className="font-semibold text-gray-800 text-sm md:text-base">
                  {item.title}
                </p>
                <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
