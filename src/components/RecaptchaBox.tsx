"use client";

import { useState } from "react";
import Recaptcha from "@/components/Recaptcha";
import Image from "next/image";

type Status = "idle" | "loading" | "checked";

const RecaptchaBox = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleClick = () => {
    if (status === "loading") return;
    if (status === "checked") {
      setStatus("idle");
      return;
    }
    setStatus("loading");
    setTimeout(() => setStatus("checked"), 300);
  };

  let checkboxContent = (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-black bg-white" />
  );

  if (status === "loading") {
    checkboxContent = (
      <span className="relative inline-flex h-6 w-6 items-center justify-center">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#7ac142]/30 border-t-[#7ac142]" />
      </span>
    );
  } else if (status === "checked") {
    checkboxContent = (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-green-600 bg-green-50">
        <span className="text-xs font-semibold text-green-700">✓</span>
      </span>
    );
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <button
        onClick={handleClick}
        className="
	flex
	items-center
	gap-2
	rounded
	border border-[#d3d3d3]
	bg-[#f9f9f9]
	text-left
	shadow-sm
	text-gray-700 hover:bg-gray-100
	w-[450px] h-[110px]
        px-4" 
        aria-label="reCAPTCHA checkbox"
      >
        {checkboxContent}
        <span className="text-lg font-medium text-[#444]">
          I am a robot
        </span>
	<Image
	  src="/meCHAKCHA.png"
	  alt="meCHAKCHA"
	  width={55}
	  height={55}
	  className="ml-auto"
	/>
      </button>

      {status === "checked" && <Recaptcha />}
    </div>
  );
};

export default RecaptchaBox;
