"use client";

import { Suspense } from "react";
import RecaptchaBox from "@/components/RecaptchaBox";
import { useSearchParams } from "next/navigation";

// useSearchParamsを使用するコンポーネントを分離
function ResultContent() {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const displayScore = score ?? "スコアを取得できませんでした";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-40 pointer-events-none">
        <div className="transform scale-90">
          <RecaptchaBox />
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center">
        <div className="w-80 h-96 bg-gray-100 border border-gray-300 shadow-lg rounded-md flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-gray-700">
            SCORE: {displayScore}
          </h2>
        </div>

        <div className="mt-8 flex gap-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-md text-lg">
            もう一度プレイ
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-12 rounded-md text-lg">
            ヨウコソ
          </button>
        </div>
      </div>
    </div>
  );
}

// メインコンポーネント - Suspenseでラップ
const Result = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">読み込み中...</div>}>
      <ResultContent />
    </Suspense>
  );
};

export default Result;
