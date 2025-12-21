"use client";

import { useState } from "react";
import Image from "next/image";
import ImageCaptcha from "@/components/ImageCaptcha";

type SlideProps = {
  onNext: () => void;
};

// イントロ画面（チーム紹介）
const BeginSlide = ({ onNext }: SlideProps) => {
  return (
    <div className="bg-blue-500 text-white min-h-screen w-full flex items-center justify-center font-sans">
      <div className="flex flex-col items-center text-center">
        {/* Profile */}
        <p className="text-8xl font-bold mb-10">:)</p>
	
	<p className="text-4xl font-bold mb-10">
	        所属: 東洋大学情報連携学部 
	</p>
	
	<p className="text-4xl font-bold mb-10">
        	団体: 情報技術メディア研究会
	</p>

	<p className="text-4xl font-bold mb-10">
        	チーム: WE ARE HUMAN
	</p>


      <div className="flex items-center gap-6">
        {/* Next Button */}
        <button
          onClick={onNext}
          className="group w-16 h-16 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          aria-label="Start"
        >
          {/* 三角形のアイコン */}
          <div
            className="
              w-0 h-0
              border-t-[16px] border-t-transparent
              border-b-[16px] border-b-transparent
              border-l-[30px] border-l-white
              ml-2
              filter drop-shadow-md
            "
          />
        </button>
      </div>
      </div>
    </div>
  );
};

// BSOD風画面（人間性に問題がある）
const BSODSlide = ({ onNext }: SlideProps) => {
  return (
    <div className="bg-[#0078D7] text-white min-h-screen w-full flex flex-col items-center justify-center font-sans px-8">
      {/* 悲しい顔 */}
      <div className="text-[120px] md:text-[180px] mb-8 select-none">
        :(
      </div>

      {/* エラーメッセージ */}
      <div className="max-w-3xl text-left space-y-6">
        <p className="text-xl md:text-2xl leading-relaxed">
          あなたの人間性に問題が発生したため、テストを実行する必要があります。
        </p>
        
        <p className="text-lg md:text-xl opacity-90">
          エラー情報を収集しています...
        </p>

        {/* 進捗バー風 */}
        <div className="flex items-center gap-4 mt-8">
          <div className="text-xl font-bold">100%</div>
          <div className="text-lg opacity-80">完了</div>
        </div>

        {/* エラーコード */}
        <div className="mt-12 pt-8 border-t border-white/20 space-y-2">
          <p className="text-sm opacity-70">
            詳細については、次を検索してください:
          </p>
          <p className="text-lg font-mono">
            HUMAN_VERIFICATION_REQUIRED
          </p>
          
          {/* スタートボタン */}
          <div className="mt-8">
            <button
              onClick={onNext}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span className="text-lg font-medium">テストを開始する</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type ScreenState = "intro" | "bsod" | "recaptcha";
type Status = "idle" | "loading" | "captcha" | "checked";

const RecaptchaBox = () => {
  const [screenState, setScreenState] = useState<ScreenState>("intro");
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

  // --- 条件分岐: 画面状態に応じて表示を切り替え ---
  if (screenState === "intro") {
    return <BeginSlide onNext={() => setScreenState("bsod")} />;
  }

  if (screenState === "bsod") {
    return <BSODSlide onNext={() => setScreenState("recaptcha")} />;
  }

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
      {/* 青背景がある間は隠れているが、スライドアウトすると現れる */}
        <h1
          className={`
            transition-all duration-500 ease-out z-10
            ${status === "captcha"
              ? "scale-75 md:scale-90 -translate-y-[18rem] mr-8" // -translate-y-70相当の移動
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
      <div className="relative">
        <button
          onClick={handleClick}
          className={`
            relative flex items-center gap-5 rounded border border-[#d3d3d3] bg-[#f9f9f9]
            text-left shadow-2xl text-gray-700 h-[110px] px-4
            transition-all duration-300 cursor-crosshair hover:bg-white
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

        {/* 画像キャプチャ出現 */}
        {status === "captcha" && (
          <div
            className="
              absolute top-1/2 -translate-y-1/2 z-50
              animate-in zoom-in duration-300
              origin-left drop-shadow-2xl
            "
            style={{ left: '70px' }}
          >
            <ImageCaptcha />
          </div>
        )}
      </div>
    </div>
  );
}

export default RecaptchaBox;

