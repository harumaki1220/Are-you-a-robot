"use client";

import { useState } from "react";

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

  const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className="bg-white p-2 shadow-lg max-w-100 w-full">
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
      <div className="flex justify-between items-center mt-4 pt-2 border-t">
        <div className="flex gap-4 text-gray-400 text-xl">
          <span>↻</span>
          <span>🎧</span>
          <span>i</span>
        </div>

        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          次へ
        </button>
      </div>
    </div>
  );
}
