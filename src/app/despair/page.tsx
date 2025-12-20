"use client";

import { useState } from "react";

// 固定のバイナリパターン
const BINARY_PATTERN = [
  "10101010",
  "00101010",
  "11101011",
  "01010100",
  "10110101",
  "01010110",
  "10100101",
  "01110101",
  "10010100",
  "01011010",
  "11010101",
  "00101011",
  "10101110",
  "01010101",
  "10110010",
  "01101010",
];

export default function ResultPage() {
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <div className="min-h-screen bg-black text-green-600 font-mono p-4 flex flex-col items-center justify-center overflow-hidden select-none">
      {/* 背景の装飾: 固定パターンを繰り返す */}
      <div className="absolute inset-0 flex flex-wrap content-center justify-center opacity-10 pointer-events-none text-sm leading-tight break-all">
        {/* 200回繰り返して画面を埋める */}
        {Array.from({ length: 200 }).map((_, i) => (
          <span key={i} className="m-0.5">
            {BINARY_PATTERN[i % BINARY_PATTERN.length]}
          </span>
        ))}
      </div>

      {/* メインコンテンツ */}
      <div className="z-10 text-center relative">
        {showWelcome ? (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="text-lg opacity-50 mb-2 animate-pulse">
              101010100101010101110101010100101010101
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-green-400 tracking-widest animate-pulse drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]">
              WELCOME TO ROBOT WORLD
            </h1>
            <div className="text-lg opacity-50 mt-2 animate-pulse">
              101010100101010101110101010100101010101
            </div>
          </div>
        ) : (
          <div className="text-xl md:text-3xl tracking-widest flex flex-col items-center space-y-1 leading-snug">
            <div className="opacity-70">1010101001010101011101010101001010</div>
            <div className="opacity-70">1010101001010101011101010101001010</div>

            <div className="flex space-x-1 my-2 items-center">
              <span className="opacity-70">10100</span>
              <button
                onClick={() => setShowWelcome(true)}
                className="text-2xl md:text-4xl text-green-300 hover:text-green-100 transition-all duration-300 font-bold animate-pulse focus:outline-none focus:ring-2 focus:ring-green-400 rounded px-1 cursor-pointer drop-shadow-[0_0_5px_rgba(74,222,128,0.5)] hover:drop-shadow-[0_0_15px_rgba(74,222,128,1)]"
                aria-label="ロボット世界への入り口"
              >
                0101010100110101010
              </button>
              <span className="opacity-70">010101010111010</span>
            </div>

            <div className="opacity-70">1010101001010101011101010101001010</div>
            <div className="opacity-70">1010101001010101011101010101001010</div>
          </div>
        )}
      </div>
    </div>
  );
}
