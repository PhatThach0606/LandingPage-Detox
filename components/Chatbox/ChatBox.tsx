"use client";

import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export function ChatBox() {
  const messengerLink = "https://m.me/61567982570793";

  return (
    <a
      href={messengerLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl z-50 cursor-pointer flex items-center justify-center"
    >
      <ChatBubbleLeftRightIcon className="w-7 h-7" />
    </a>
  );
}
