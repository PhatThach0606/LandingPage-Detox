"use client";

import { useState, useEffect, useRef } from "react";
import { UserIcon } from "@heroicons/react/24/outline";

type User = {
  name: string;
  email?: string;
  picture?: string;
};

declare global {
  interface Window {
    FB: any;
  }
}

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [fbReady, setFbReady] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // INIT FB + USER
  useEffect(() => {
    const saved = localStorage.getItem("fb_user");
    if (saved) setUser(JSON.parse(saved));

    const loadFB = () => {
      window.FB.init({
        appId: "999591449063139",
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });

      setFbReady(true);
    };

    window.fbAsyncInit = loadFB;

    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // CLICK OUTSIDE
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // LOGIN FIXED
  const loginFacebook = () => {
    if (!fbReady || !window.FB) {
      console.warn("FB chưa sẵn sàng");
      return;
    }

    window.FB.login(
      (res: any) => {
        if (res.status === "connected") {
          window.FB.api("/me", { fields: "name,email,picture" }, (u: any) => {
            const userData = {
              name: u.name,
              email: u.email,
              picture: u.picture?.data?.url,
            };

            setUser(userData);
            localStorage.setItem("fb_user", JSON.stringify(userData));
            setOpen(false);
          });
        } else {
          setOpen(false);
        }
      },
      { scope: "public_profile,email" },
    );
  };

  // LOGOUT SAFE
  const logout = () => {
    if (window.FB) {
      window.FB.logout(() => {
        setUser(null);
        localStorage.removeItem("fb_user");
        setOpen(false);
      });
    } else {
      setUser(null);
      localStorage.removeItem("fb_user");
      setOpen(false);
    }
  };

  return (
    <div className="relative" ref={ref}>
      {/* ICON */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 flex items-center gap-2 rounded-full hover:bg-gray-100 transition"
      >
        {user ? (
          <img
            src={user.picture || "/default-avatar.png"}
            className="w-8 h-8 rounded-full object-cover"
            alt="avatar"
          />
        ) : (
          <UserIcon className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* DROPDOWN */}
      {open && (
        <>
          {/* overlay FIX */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          {/* dropdown */}
          <div className="absolute right-0 top-12 w-64 bg-white border rounded-xl shadow-xl z-50 overflow-hidden animate-fadeIn">
            {!user ? (
              <button
                onClick={loginFacebook}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl 
             bg-[#1877F2] hover:bg-[#166FE5] active:scale-[0.99]
             text-white font-medium transition-all shadow-sm"
              >
                {/* Facebook icon */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12H17l-.4 3h-2.5v7A10 10 0 0 0 22 12z" />
                </svg>

                <span>Continue with Facebook</span>
              </button>
            ) : (
              <>
                {/* USER INFO */}
                <div className="px-4 py-3 border-b flex items-center gap-3">
                  <img
                    src={user.picture || "/default-avatar.png"}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>

                {/* MENU */}
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm">
                  Hồ sơ cá nhân
                </button>

                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm">
                  Đơn hàng
                </button>

                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-3 hover:bg-red-50 text-sm text-red-500"
                >
                  Đăng xuất
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
