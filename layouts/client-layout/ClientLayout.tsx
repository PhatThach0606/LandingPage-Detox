"use client";

import { Navbar } from "@/components/Navbar/Navbar";

type TProps = { children: React.ReactNode };

export default function ClientLayout({ children }: TProps) {
  return (
    <div className="min-h-screen relative">
      <div className="fixed top-10 inset-x-0 z-50 flex justify-center px-4">
        <Navbar />
      </div>
      <main>{children}</main>
    </div>
  );
}
