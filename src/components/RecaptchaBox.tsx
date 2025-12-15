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
    setTimeout(() => setStatus("checked"), 3000);
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
        : "checked relative"
    }
  `}
    >
    </span>
  );


  return (
    <div className="flex flex-col items-start gap-4">
      <button
        onClick={handleClick}
        className="
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
        px-4" 
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

      <span className="text-black">TEST : Current Status is {status}</span>
   
    </div>
  );
};

export default RecaptchaBox;
