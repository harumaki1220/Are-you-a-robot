"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import BeginSlide from "@/components/BeginSlide";
import RecaptchaBox from "@/components/RecaptchaBox";

export default function Home() {
  const [phase, setPhase] = useState<"begin" | "recaptcha">("begin");
  
  return (
    <div className="overflow-hidden w-screen h-screen bg-white">
      <motion.div
	className="flex w-[200vw] h-full"
	animate={{
	  x: phase === "begin" ? "0vw" : "-100vw",
      	}}
	transition={{
	  duration: 0.6,
	  ease: "easeInOut",
	}}
      >
	{/* phase-1: BeginSlide */}
        <div className="w-screen h-full flex items-center justify-center">
	  <BeginSlide onNext={() => setPhase("recaptcha")} />
	</div>

	{/* phase-2: RecaptchaBox */}
	<div className="w-screen h-full flex items-center justify-center">
	  <RecaptchaBox />
	</div>
      </motion.div>
    </div>
  );
}
