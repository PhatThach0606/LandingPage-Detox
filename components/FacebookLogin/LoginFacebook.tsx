"use client";

import { useEffect } from "react";

export default function FacebookLoginButton() {
  useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "YOUR_APP_ID",
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });
    };

    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;

      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const loginWithFacebook = () => {
    if (!window.FB) return;

    window.FB.login(
      (response: any) => {
        if (response.authResponse) {
          window.FB.api(
            "/me",
            { fields: "name,email,picture" },
            (userInfo: any) => {
              console.log("User:", userInfo);
              alert(`Hello ${userInfo.name}`);
            },
          );
        } else {
          console.log("User cancelled login");
        }
      },
      { scope: "public_profile,email" },
    );
  };

  return (
    <button
      onClick={loginWithFacebook}
      className="w-full flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition"
    >
      {/* Facebook Icon */}
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 10-11.5 9.95v-7.04H8.1V12h2.4V9.8c0-2.37 1.4-3.68 3.54-3.68 1.02 0 2.1.18 2.1.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46V12h2.6l-.42 2.91h-2.18v7.04A10 10 0 0022 12z" />
      </svg>
      Login with Facebook
    </button>
  );
}
