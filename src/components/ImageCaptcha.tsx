"use client";

import { useState } from "react";
import { RefreshCw, Headphones, Info } from "lucide-react";

type ImageItem = {
  id: number;
  hasLove: boolean;
};

const IMAGE_DATA: ImageItem[] = [
  { id: 1, hasLove: true },
  { id: 2, hasLove: false },
  { id: 3, hasLove: false },
  { id: 4, hasLove: true },
  { id: 5, hasLove: false },
  { id: 6, hasLove: true },
  { id: 7, hasLove: true },
  { id: 8, hasLove: false },
  { id: 9, hasLove: false },
  // ここにデータを入れる
];

export default function ImageCaptcha() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showInfo, setShowInfo] = useState(false);

  const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleRefresh = () => {
    setSelectedIds([]);
  };

  return (
    <div className="bg-white p-2 shadow-lg w-full max-w-100 mx-auto max-h-150 overflow-auto [scrollbar-gutter:stable]">
      {/* 青いヘッダー */}
      <div className="bg-blue-500 p-4 text-white mb-2">
        <h2 className="font-bold text-xl">愛</h2>
        <p>の画像をすべて選択してください</p>
      </div>

      <div className="grid gap-2 grid-cols-3 grid-rows-3">
        {IMAGE_DATA.map((item) => (
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

          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            次へ
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
