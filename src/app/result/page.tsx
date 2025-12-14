"use client";

import RecaptchaBox from "@/components/RecaptchaBox";

const Result = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-40 pointer-events-none">
        <div className="transform scale-90">
          <RecaptchaBox />
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center">
        <div className="w-80 h-96 bg-gray-100 border border-gray-300 shadow-lg rounded-md flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-gray-700">SCORE: 100%</h2>
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
};

export default Result;
