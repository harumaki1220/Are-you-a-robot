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
        min-h-screen font-mono p-4 flex flex-col items-center justify-center overflow-hidden select-none transition-colors duration-100
        ${isExploding ? "bg-white" : "bg-black"} 
        ${isExploding ? "glitch-screen" : ""}
      `}
    >
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
            <div className="text-lg text-green-600 opacity-70 mb-4 animate-pulse h-8">
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

            <div className="text-lg text-red-600/80 mt-2 h-24">
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
                    inline-block px-8 py-3 
                    border border-green-600 text-green-600 font-bold tracking-widest
                    hover:bg-green-600 hover:text-black 
                    transition-colors duration-200
                  "
                >
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
