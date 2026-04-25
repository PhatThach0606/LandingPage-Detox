import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { Geist, Geist_Mono } from "next/font/google";
import ChatBox from "@/components/ChatBox/ChatBox";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trái lành",
  description: "Phường Bến Thành",
  icons: {
    icon: "/logo.jpg",
  },
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.css"
          rel="stylesheet"
        />
        <ChatBox />
        <CartProvider>{children}</CartProvider>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
