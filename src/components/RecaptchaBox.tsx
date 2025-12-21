"use client";

import { useState } from "react";
import Image from "next/image";
import ImageCaptcha from "@/components/ImageCaptcha";

type Status = "idle" | "loading" | "captcha" | "checked";

const RecaptchaBox = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleClick = () => {
    if (status === "loading" || status === "captcha") return;
    if (status === "checked") {
      setStatus("idle");
      return;
    }
    setStatus("loading");
    // 短いローディング後にキャプチャを表示（本家は約1秒程度）
    setTimeout(() => setStatus("captcha"), 1000);
  };

  const handleCaptchaComplete = () => {
    setStatus("checked");
  };

  let checkboxContent = (
    <span
      className={`
      inline-flex items-center justify-center
      h-9 w-9
      border-solid
      transition-[border-radius,border-width,border-color] duration-200 ease-in
    ${
      status === "idle"
        ? "rounded border border-black bg-white"
        : status === "loading"
        ? "rounded-full border-[7px] border-[#3498db] border-t-transparent animate-spin"
        : status === "captcha"
        ? "rounded border border-black bg-white"
        : "checked relative"
    }
  `}
    ></span>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white transition-all duration-500 relative">
      {/* ▼▼▼ CSS-in-JS (このファイルだけで動作させるためのスタイル定義) ▼▼▼ */}
      <style>{`
        /* 歯車の回転 */
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        /* ノイズ・グリッチ */
        @keyframes glitch-noise {
          0% { filter: drop-shadow(0 0 0 transparent); transform: skew(0deg); }
          2% { filter: drop-shadow(-2px 0 0 rgba(255,0,0,0.5)) drop-shadow(2px 0 0 rgba(0,255,255,0.5)); transform: skew(-2deg); }
          4% { filter: drop-shadow(2px 0 0 rgba(255,0,0,0.5)) drop-shadow(-2px 0 0 rgba(0,255,255,0.5)); transform: skew(2deg); }
          6% { filter: drop-shadow(0 0 0 transparent); transform: skew(0deg); }
          40% { filter: drop-shadow(0 0 0 transparent); transform: skew(0deg); }
          42% { filter: drop-shadow(-1px -1px 0 rgba(255,0,255,0.5)); transform: translate(1px, 1px); }
          44% { filter: drop-shadow(0 0 0 transparent); transform: translate(0, 0); }
          100% { filter: drop-shadow(0 0 0 transparent); transform: skew(0deg); }
        }
      `}</style>



      {/* ▼▼▼ メインコンテンツ ▼▼▼ */}

      {/* タイトル */}
      <h1
        className={`
          transition-all duration-500 ease-out z-10
          ${
            status === "captcha"
              ? "scale-75 md:scale-90 -translate-y-70 mr-8"
              : "mb-20"
          }
        `}
      >
        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-4xl md:text-5xl opacity-60 grayscale animate-[spin_4s_linear_infinite] select-none">
            ⚙️
          </span>
          <span
            className="
              text-5xl md:text-6xl font-black font-mono tracking-widest
              bg-gradient-to-b from-gray-600 via-gray-300 to-gray-600
              bg-clip-text text-transparent select-none
            "
            style={{ animation: "glitch-noise 2.5s infinite" }}
          >
            ARE YOU A ROBOT?
          </span>
          <span
            className="text-4xl md:text-5xl opacity-60 grayscale select-none"
            style={{ animation: "spin-reverse 4s linear infinite" }}
          >
            ⚙️
          </span>
        </div>
      </h1>

      {/* チェックボックスエリア */}
      <div className="relative z-10 w-400px">
        <button
          onClick={handleClick}
          className={`
    relative flex items-center gap-5 rounded border border-[#d3d3d3] bg-[#f9f9f9]
    text-left shadow-sm text-gray-700 h-[110px] px-4
    transition-all duration-300 cursor-crosshair hover:bg-[#f0f0f0]
    ${status === "captcha" ? "w-[600px]" : "w-[400px]"}
  `}
        >
          {checkboxContent}
          <span className="text-lg font-medium text-[#444]">I'm a robot</span>
          <div className="flex flex-col items-center justify-center ml-auto px-3 py-2 min-w-[110px] h-full">
            <Image
              src="/meCHAKCHA.png"
              alt="meCHAKCHA"
              width={45}
              height={45}
              className="mb-2"
            />
            <div className="flex flex-col items-center gap-0 leading-tight">
              <p className="text-[11px] font-medium text-gray-600">meCHAKCHA</p>
              <p className="text-[9px] text-gray-600">No Privacy No Terms</p>
            </div>
          </div>
        </button>

        {/* 画像キャプチャ出現部分 */}
        {status === "captcha" && (
          <div
            className="absolute top-1/2 -translate-y-1/2 z-50 animate-in slide-in-from-left-3 duration-300 scale-75 origin-left"
            style={{ left: "70px" }}
          >
            <ImageCaptcha />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecaptchaBox;
