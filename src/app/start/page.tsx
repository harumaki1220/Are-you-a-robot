"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import RecaptchaBox from "@/components/RecaptchaBox";

export default function Home() {
  const [phase, setPhase] = useState<"begin" | "recaptcha">("begin");
  
  return (
    <div className="overflow-hidden w-screen h-screen bg-white">
	  <RecaptchaBox />

    </div>
  );
}
