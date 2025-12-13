"use client";

import { useState } from "react";
import Recaptcha from "@/components/Recaptcha";

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
    <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white" />
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
        className="flex w-full max-w-xs items-center gap-2 rounded border border-gray-300 bg-white px-3 py-2 text-left text-gray-700 hover:bg-gray-50"
        aria-label="reCAPTCHA checkbox"
      >
        {checkboxContent}
        <span className="text-lg font-medium text-[#444]">
          I&apos;m a robot
        </span>
      </button>

      {status === "checked" && <Recaptcha />}
    </div>
  );
};

export default RecaptchaBox;
