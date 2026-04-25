"use client";

import { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export function ChatBox() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Nút mở chat */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-xl cursor-pointer z-50"
      >
        <ChatBubbleLeftRightIcon className="w-7 h-7" />
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-6 right-6 w-[360px] md:w-[420px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-emerald-100">
          {/* Header */}
          <div className="flex items-center justify-between bg-emerald-500 text-white px-5 py-3">
            <span className="font-semibold text-lg">💬 Chat với ND Detox</span>

            <button onClick={() => setOpen(false)}>
              <XMarkIcon className="w-6 h-6 cursor-pointer" />
            </button>
          </div>

          {/* Nội dung chat */}
          <div className="flex-1 p-4 overflow-y-auto bg-emerald-50 text-gray-800 space-y-2">
            <div className="bg-white px-3 py-2 rounded-xl w-fit shadow-sm">
              👋 Xin chào! Bạn cần tư vấn detox không?
            </div>

            <div className="bg-emerald-500 text-white px-3 py-2 rounded-xl w-fit ml-auto shadow-sm">
              Mình muốn giảm cân
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center border-t bg-white px-3 py-2">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              className="flex-1 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none bg-gray-100 rounded-full"
            />

            <button className="ml-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full cursor-pointer transition">
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
