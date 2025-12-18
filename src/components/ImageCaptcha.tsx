"use client";

import { useEffect, useState } from "react";

import { RefreshCw, Headphones, Info } from "lucide-react";

type ImageItem = {
  id: number;

  isCorrect: boolean;
};

const LOVE_IMAGE_DATA: ImageItem[] = [
  { id: 1, isCorrect: true },
  { id: 2, isCorrect: false },
  { id: 3, isCorrect: false },
  { id: 4, isCorrect: true },
  { id: 5, isCorrect: false },
  { id: 6, isCorrect: true },
  { id: 7, isCorrect: true },
  { id: 8, isCorrect: false },
  { id: 9, isCorrect: false },
  { id: 10, isCorrect: true },
  { id: 11, isCorrect: false },
  { id: 12, isCorrect: false },
  { id: 13, isCorrect: false },
  { id: 14, isCorrect: true },
  { id: 15, isCorrect: false },
  { id: 16, isCorrect: true },
  { id: 17, isCorrect: true },
  { id: 18, isCorrect: false },
  // ここにデータを入れる
];

const BIKE_IMAGE_DATA: ImageItem[] = [
  { id: 19, isCorrect: true },
  { id: 20, isCorrect: false },
  { id: 21, isCorrect: false },
  { id: 22, isCorrect: true },
  { id: 23, isCorrect: false },
  { id: 24, isCorrect: true },
  { id: 25, isCorrect: true },
  { id: 26, isCorrect: false },
  { id: 27, isCorrect: false },
  { id: 28, isCorrect: true },
  { id: 29, isCorrect: false },
  { id: 30, isCorrect: false },
  { id: 31, isCorrect: false },
  { id: 32, isCorrect: true },
  { id: 33, isCorrect: false },
  { id: 34, isCorrect: true },
  { id: 35, isCorrect: true },
  { id: 36, isCorrect: false },
];

// まっちゃへ
// 必ず一枚は isCorrect: true の画像を含むようランダムに9枚を選ぶ関数に実装
const getRandomImages = (sourceData: ImageItem[]) => {
  // true の画像の集合を作成
  // そこからランダムに一つ選ぶ
  const trueSet = sourceData.filter(item => item.isCorrect);
  const randomTrue = trueSet[Math.floor(Math.random() * trueSet.length)];

  // 先程選んだ正解の画像を除外してシャッフルし、8枚選ぶ
  const shuffled = [...sourceData].filter(item => item !== randomTrue).sort(() => 0.5 - Math.random());

  // 8枚選び、ランダムな位置に正解画像を挿入する
  const selected = shuffled.slice(0, 8);
  const insertIndex = Math.floor(Math.random() * (selected.length + 1));
  selected.splice(insertIndex, 0, randomTrue);
  return selected;
};  

export default function ImageCaptcha() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showInfo, setShowInfo] = useState(false);
  const [displayedImages, setDisplayedImages] = useState<ImageItem[]>([]);
  const [questionStep, setQuestionStep] = useState(0); // 0: 自転車, 1: 愛
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const data = questionStep === 0 ? BIKE_IMAGE_DATA : LOVE_IMAGE_DATA;
      setDisplayedImages(getRandomImages(data));
    }, 0);

    return () => clearTimeout(timer);
  }, [questionStep]);

  const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleRefresh = () => {
    const data = questionStep === 0 ? BIKE_IMAGE_DATA : LOVE_IMAGE_DATA;
    setDisplayedImages(getRandomImages(data));
    setSelectedIds([]);
    setShowInfo(false);
  };

  const handleNextQuestion = () => {
    if (selectedIds.length === 0) {
      setErrorMessage("該当する画像をすべて選択してください。");
      return;
    }
    if (errorMessage) {
      setErrorMessage(null);
    }
    if (questionStep === 0) {
      setQuestionStep(questionStep + 1);
      setSelectedIds([]);
    } else {
      alert("認証完了！");
    }
  };

  return (
    <div className="bg-white p-2 shadow-lg w-full max-w-100 mx-auto max-h-150 overflow-auto [scrollbar-gutter:stable]">
      {/* 青いヘッダー */}
      <div className="bg-blue-500 p-4 text-white mb-2">
        <h2 className="font-bold text-xl">
          {questionStep === 0 ? "自転車" : "愛"}
        </h2>
        <p>の画像をすべて選択してください</p>
      </div>

      <div className="grid gap-2 grid-cols-3 grid-rows-3">
        {displayedImages.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleSelect(item.id)}
            className={`bg-gray-200 aspect-square flex items-center justify-center cursor-pointer
                ${
                  selectedIds.includes(item.id)
                    ? "border-2 border-blue-500"
                    : ""
                }
            `}
          >
            ID: {item.id}
          </div>
        ))}
      </div>
      {errorMessage && (
        <div className="text-center text-red-500 my-2">{errorMessage}</div>
      )}

      {/* フッター */}
      <div className="mt-4 pt-2 border-t">
        <div className="flex justify-between items-center">
          <div className="flex gap-6 text-gray-400">
            <button
              onClick={handleRefresh}
              className="hover:text-gray-600 transition-colors"
            >
              <RefreshCw className="w-8 h-8" />
            </button>
            <div className="hover:text-gray-600 cursor-pointer transition-colors">
              <Headphones className="w-8 h-8" />
            </div>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className={`hover:text-gray-700 transition-colors ${
                showInfo ? "text-blue-500" : ""
              }`}
            >
              <Info className="w-8 h-8" />
            </button>
          </div>
          <button
            onClick={handleNextQuestion}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            {questionStep === 0 ? "確認" : "次へ"}
          </button>
        </div>
        {showInfo && (
          <div className="mt-4 p-4 text-sm text-gray-700 animate-in fade-in slide-in-from-top-2 duration-300">
            <p>
              テキストで書かれているものを含むタイルをすべてクリックします。該当するものを含む新しい画像が表示された場合は、それもクリックしてください。クリックする画像がなくなったら、[確認]をクリックします。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
