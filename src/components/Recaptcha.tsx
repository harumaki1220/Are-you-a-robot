"use client";

import { useRouter } from "next/navigation";

const Recaptcha = () => {
  const router = useRouter();
  const handleMove = () => {
    router.push("/result");
  };
  return (
    <div className="text-black">
      これはテストだよ。Recaptchaコンポーネントより<br />
      <button onClick={handleMove}>結果画面へ</button>
    </div>
  );
};

export default Recaptcha;
