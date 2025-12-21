"use client";

import { useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

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
  const [isExploding, setIsExploding] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  const handleClick = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
      setShowWelcome(true);
    }, 300);
  };

  return (
    <div
      className={`
        relative min-h-screen font-mono p-4 flex flex-col items-center justify-center overflow-hidden select-none transition-colors duration-100
        ${isExploding ? "bg-white" : "bg-black"} 
        ${isExploding ? "glitch-screen" : ""}
      `}
    >
      <div
        className="pointer-events-none absolute inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%]"
        style={{ backgroundSize: "100% 3px" }}
      />

      <div className="pointer-events-none absolute inset-0 z-50 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-40 opacity-[0.03] animate-pulse bg-white mix-blend-overlay"></div>

      {/* 背景の装飾（バイナリコード） */}
      <div
        className={`absolute inset-0 flex flex-wrap content-center justify-center pointer-events-none text-sm leading-tight break-all
          ${
            isExploding
              ? "opacity-80 text-red-500 font-bold"
              : "opacity-10 text-green-600"
          }
      `}
      >
        {Array.from({ length: 200 }).map((_, i) => (
          <span key={i} className="m-0.5">
            {BINARY_PATTERN[i % BINARY_PATTERN.length]}
          </span>
        ))}
      </div>

      <div className="z-10 text-center relative w-full max-w-4xl">
        {showWelcome ? (
          <div className="text-left inline-block">
            <div className="text-lg text-green-600 opacity-70 mb-4 animate-pulse h-8 font-bold">
              {showWelcome && (
                <TypeAnimation
                  sequence={[
                    "Detecting lifeform...",
                    500,
                    "ANALYZING...",
                    500,
                    "SYSTEM OVERRIDE... COMPLETE.",
                  ]}
                  wrapper="span"
                  speed={70}
                  cursor={true}
                />
              )}
            </div>

            <div className="animate-in fade-in delay-2500 duration-300 fill-mode-forwards opacity-0">
              <h1 className="cyber-text text-4xl md:text-7xl font-extrabold text-green-500 tracking-widest drop-shadow-[0_0_15px_rgba(74,222,128,0.8)] mb-6 leading-tight">
                WELCOME TO <br />
                <span className="text-red-500">ROBOT WORLD</span>
              </h1>
            </div>

            <div className="text-lg text-red-600/90 mt-2 h-24 font-bold tracking-wider">
              <TypeAnimation
                sequence={[
                  3000,
                  "SUBJECT: HUMANITY DETECTED.\nACTION: DELETING...",
                  3000,
                  "SUBJECT: HUMANITY DETECTED.\nACTION: DELETED.\n\nID: 201-384-ROBOT-V3 Verified.",
                  () => setTypingDone(true),
                ]}
                wrapper="span"
                speed={50}
                style={{ whiteSpace: "pre-line", display: "block" }}
                repeat={0}
                cursor={false}
              />
            </div>

            {typingDone && (
              <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <Link
                  href="/"
                  className="
                    relative inline-block px-8 py-3 
                    border border-green-600 text-green-600 font-bold tracking-widest
                    hover:bg-green-600 hover:text-black 
                    transition-colors duration-200
                    overflow-hidden
                    group
                  "
                >
                  <span
                    className="absolute inset-0 bg-black/10 group-hover:bg-transparent pointer-events-none bg-size-[100%_4px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)",
                    }}
                  ></span>
                  [ SYSTEM REBOOT ]
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="text-xl md:text-3xl tracking-widest flex flex-col items-center space-y-1 leading-snug text-green-600">
            <div className="opacity-70">1010101001010101011101010</div>
            <div className="opacity-70">1010101001010101011101010</div>

            <div className="flex space-x-1 my-2 items-center">
              <span className="opacity-70">101</span>
              <button
                onClick={handleClick}
                className="
                  text-2xl md:text-4xl text-green-300 font-bold 
                  animate-pulse rounded px-2 py-1 cursor-pointer 
                  hover:bg-green-900/50 hover:text-white transition-all duration-300
                  drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]
                "
              >
                0101010100110010
              </button>
              <span className="opacity-70">101</span>
            </div>

            <div className="opacity-70">1010101001010101011101010</div>
            <div className="opacity-70">1010101001010101011101010</div>
          </div>
        )}
      </div>
    </div>
  );
}
