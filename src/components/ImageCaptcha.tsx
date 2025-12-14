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
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="grid gap-2 grid-cols-3 grid-rows-3">
        {IMAGE_DATA.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleSelect(item.id)}
            className={`bg-gray-200 aspect-square flex items-center cursor-pointer
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
    </div>
  );
}
