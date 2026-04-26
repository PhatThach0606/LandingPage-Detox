"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type User = {
  name: string;
  email?: string;
  picture?: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("fb_user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
          {/* Icon */}
          <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-900">
            Chưa đăng nhập
          </h1>

          {/* Description */}
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Bạn cần đăng nhập bằng Facebook để tiếp tục sử dụng hệ thống.
          </p>

          {/* Button (UI only) */}
          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl transition">
            Đăng nhập bằng Facebook
          </button>

          {/* Footer hint */}
          <p className="text-xs text-gray-400 mt-4">
            Bằng cách đăng nhập, bạn đồng ý với điều khoản sử dụng
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        {/* AVATAR */}
        <div className="flex justify-center">
          <Image
            src={user.picture || "/default-avatar.png"}
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full border-4 border-green-500 object-cover"
          />
        </div>

        {/* NAME */}
        <h1 className="text-xl font-bold mt-4">{user.name}</h1>

        {/* EMAIL */}
        {user.email && (
          <p className="text-gray-500 text-sm mt-1">{user.email}</p>
        )}

        {/* STATUS */}
        <div className="mt-4">
          <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
            Đã đăng nhập Facebook
          </span>
        </div>

        {/* INFO CARD */}
        <div className="mt-6 text-left space-y-2 text-sm">
          <div className="flex justify-between border-b py-2">
            <span className="text-gray-500">Tên</span>
            <span className="font-medium">{user.name}</span>
          </div>

          <div className="flex justify-between border-b py-2">
            <span className="text-gray-500">Email</span>
            <span className="font-medium">
              {user.email || "Không có email"}
            </span>
          </div>

          <div className="flex justify-between py-2">
            <span className="text-gray-500">Trạng thái</span>
            <span className="text-green-600 font-medium">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
