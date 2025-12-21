"use client";

import { Suspense } from "react";
import PentagonChart from "@/components/PentagonChart";
import { useRouter, useSearchParams } from "next/navigation";

// useSearchParamsを使用するコンポーネントを分離
function ResultContent() {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const router = useRouter();
  const numericScore = score ? parseInt(score, 10) : 0;
  const isPerfectRobot = numericScore === 100;

  // スコアから仮のパラメータを生成
  // 100の場合は全てカンスト
  const mockParams = isPerfectRobot
    ? {
        clickSpeed: 100,
        judgment: 100,
        accuracy: 100,
        reaction: 100,
        robotness: 100,
      }
    : {
        clickSpeed: Math.min(100, Math.max(0, numericScore + Math.floor(Math.random() * 20) - 10)),
        judgment: Math.min(100, Math.max(0, numericScore + Math.floor(Math.random() * 30) - 15)),
        accuracy: Math.min(100, Math.max(0, numericScore + Math.floor(Math.random() * 25) - 12)),
        reaction: Math.min(100, Math.max(0, numericScore + Math.floor(Math.random() * 15) - 8)),
        robotness: Math.min(100, Math.max(0, numericScore + Math.floor(Math.random() * 20) - 10)),
      };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      {/* 不気味な横揺れアニメーション用スタイル */}
      <style jsx>{`
        @keyframes creepyShake {
          0%, 100% { transform: translateX(0); }
          10% { transform: translateX(-3px) rotate(-0.5deg); }
          20% { transform: translateX(3px) rotate(0.5deg); }
          30% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          50% { transform: translateX(-3px) rotate(0.3deg); }
          60% { transform: translateX(1px); }
          70% { transform: translateX(-2px) rotate(-0.3deg); }
          80% { transform: translateX(2px); }
          90% { transform: translateX(-1px); }
        }
        .creepy-shake {
          animation: creepyShake 0.8s ease-in-out infinite;
        }
        .creepy-shake:hover {
          animation: creepyShake 0.3s ease-in-out infinite;
        }
      `}</style>

      {/* 背景：reCAPTCHA風のデザイン */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 opacity-40 pointer-events-none">
        {/* タイトル */}
        <div className="mb-20 flex items-center gap-4">
          <span className="text-4xl opacity-60 grayscale animate-spin select-none" style={{ animationDuration: '4s' }}>
            ⚙️
          </span>
          <span className="text-5xl font-black font-mono tracking-widest bg-gradient-to-b from-gray-600 via-gray-300 to-gray-600 bg-clip-text text-transparent select-none">
            ARE YOU A ROBOT?
          </span>
          <span className="text-4xl opacity-60 grayscale select-none" style={{ animation: 'spin 4s linear infinite reverse' }}>
            ⚙️
          </span>
        </div>
        
        {/* チェックボックス風 */}
        <div className="flex items-center gap-5 rounded border border-[#d3d3d3] bg-[#f9f9f9] shadow-sm text-gray-700 w-[400px] h-[110px] px-4">
          <span className="inline-flex items-center justify-center h-9 w-9 rounded border border-black bg-white"></span>
          <span className="text-lg font-medium text-[#444]">I'm a robot</span>
          <div className="flex flex-col items-center justify-center ml-auto px-3 py-2">
            <div className="text-[11px] font-medium text-gray-600">meCHAKCHA</div>
            <div className="text-[9px] text-gray-600">No Privacy No Terms</div>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center">
        <div className="w-96 bg-white border border-gray-300 shadow-lg rounded-md p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            🤖 ロボット診断結果
          </h2>
          <p className="text-center text-gray-600 mb-4">
            総合スコア: <span className="text-blue-600 font-bold text-xl">{numericScore}</span>点
          </p>
          <PentagonChart
            clickSpeed={mockParams.clickSpeed}
            judgment={mockParams.judgment}
            accuracy={mockParams.accuracy}
            reaction={mockParams.reaction}
            robotness={mockParams.robotness}
            size={280}
          />
          
          {/* 100点以外の場合のメッセージ */}
          {!isPerfectRobot && (
            <div className="mt-4 text-center">
              <p className="text-gray-600 font-bold text-lg">
                あなたはロボットではありません
              </p>
              <p className="text-gray-400 text-sm mt-1">
                残念...まだ人間のようです
              </p>
            </div>
          )}
          
          {/* 100点の場合の不穏なメッセージ */}
          {isPerfectRobot && (
            <div className="mt-4 text-center">
              <p className="text-red-600 font-bold text-lg animate-pulse">
                ⚠ 完璧なロボット適性を検出
              </p>
              <p className="text-gray-500 text-sm mt-1">
                我々の仲間へようこそ...
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex gap-8">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-md text-lg" 
            onClick={() => {router.push('./start')}}
          >
            もう一度プレイ
          </button>
          {isPerfectRobot ? (
            <button 
              className="creepy-shake bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-12 rounded-md text-lg shadow-lg shadow-red-500/50"
              onClick={() => {router.push('./despair')}}
            >
              ヨウコソ
            </button>
          ) : (
            <div className="bg-gray-200 py-3 px-12 rounded-md text-gray-400 font-bold text-lg">
              繝ｨ繧ｦ繧ｳ繧ｽ
            </div>
          )}
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
