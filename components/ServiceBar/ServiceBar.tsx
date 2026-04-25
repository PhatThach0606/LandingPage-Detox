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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-6 bg-emerald-50">
      {items.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
          >
            {/* Icon */}
            <div className="p-3 bg-emerald-100 rounded-full">
              <Icon className="w-6 h-6 text-emerald-600" />
            </div>

            {/* Text */}
            <div>
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
