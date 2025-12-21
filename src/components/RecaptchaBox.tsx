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
    >
    </span>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white transition-all duration-500">
      {/* タイトル（captcha表示時は上に移動） */}
      <h1
        className={`
          text-5xl
          md:text-6xl
          font-extrabold
          tracking-widest
          text-gray-600
          select-none
          transition-all duration-500 ease-out
          ${status === "captcha" 
            ? "absolute top-6 left-1/2 -translate-x-1/2" 
            : "mb-20"
          }
        `}
      >
        ARE YOU A ROBOT?
      </h1>

      {/* チェックボックスと画像選択 */}
      <div className="relative">
        {/* チェックボックス */}
        <button
          onClick={handleClick}
          className="
            relative
            flex
            items-center
            gap-5
            rounded
            border border-[#d3d3d3]
            bg-[#f9f9f9]
            text-left
            shadow-sm
            text-gray-700
            w-[450px] h-[110px]
            px-4
            transition-all duration-300" 
          aria-label="reCAPTCHA checkbox"
        >
          {checkboxContent}
          <span className="text-lg font-medium text-[#444]">
            I'm a robot
          </span>
          <div
            className="
            flex flex-col
            items-center
            justify-center
            ml-auto
            px-3
            py-2
            min-w-[110px]
            h-full"
          >
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

        {/* 画像キャプチャ（チェックボックスの真横に配置） */}
        {status === "captcha" && (
          <div
            className="
              absolute top-1/2 -translate-y-1/2 z-20
              animate-in slide-in-from-left-3 duration-300
            "
            style={{ left: '70px' }}
          >
            <ImageCaptcha />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecaptchaBox;
