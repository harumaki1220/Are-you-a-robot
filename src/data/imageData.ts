// 画像データの型定義
export type ImageItem = {
  id: number;
  src: string;
  isCorrect: boolean;
};

// 愛のある画像データ(100番台)
export const LOVE_IMAGE_DATA: ImageItem[] = [
  { id: 100, src: "../../public/love/love_1_false.png", isCorrect: false },
  { id: 101, src: "../../public/love/love_2_false.png", isCorrect: false },
  { id: 102, src: "../../public/love/love_3_false.png", isCorrect: false },
  { id: 103, src: "../../public/love/love_4_false.png", isCorrect: false },
  { id: 104, src: "../../public/love/love_5_false.png", isCorrect: false },
  { id: 105, src: "../../public/love/love_6_false.png", isCorrect: false },
  { id: 106, src: "../../public/love/love_7_false.png", isCorrect: false },
  { id: 107, src: "../../public/love/love_8_false.png", isCorrect: false },
  { id: 108, src: "../../public/love/love_9_false.png", isCorrect: false },
  { id: 109, src: "../../public/love/love_10_false.png", isCorrect: true },
  { id: 110, src: "../../public/love/love_11_false.png", isCorrect: true },
  { id: 111, src: "../../public/love/love_12_false.png", isCorrect: true },
  { id: 112, src: "../../public/love/love_13_false.png", isCorrect: true },
  { id: 113, src: "../../public/love/love_14_false.png", isCorrect: true },
  { id: 114, src: "../../public/love/love_15_false.png", isCorrect: true },
  { id: 115, src: "../../public/love/love_16_false.png", isCorrect: true },
  { id: 116, src: "../../public/love/love_17_false.png", isCorrect: true },
  { id: 117, src: "../../public/love/love_18_false.png", isCorrect: true },
  // ここにデータを追加
];

// 自転車の画像データ(200番台)
export const BIKE_IMAGE_DATA: ImageItem[] = [
  { id: 201, src: "/images/bike/19.webp", isCorrect: true },
  { id: 202, src: "/images/bike/20.webp", isCorrect: false },
  { id: 203, src: "/images/bike/21.webp", isCorrect: false },
  { id: 204, src: "/images/bike/22.webp", isCorrect: true },
  { id: 205, src: "/images/bike/23.webp", isCorrect: false },
  { id: 206, src: "/images/bike/24.webp", isCorrect: true },
  { id: 207, src: "/images/bike/25.webp", isCorrect: true },
  { id: 208, src: "/images/bike/26.webp", isCorrect: false },
  { id: 209, src: "/images/bike/27.webp", isCorrect: false },
  { id: 210, src: "/images/bike/28.webp", isCorrect: true },
  { id: 211, src: "/images/bike/29.webp", isCorrect: false },
  { id: 212, src: "/images/bike/30.webp", isCorrect: false },
  { id: 213, src: "/images/bike/31.webp", isCorrect: false },
  { id: 214, src: "/images/bike/32.webp", isCorrect: true },
  { id: 215, src: "/images/bike/33.webp", isCorrect: false },
  { id: 216, src: "/images/bike/34.webp", isCorrect: true },
  { id: 217, src: "/images/bike/35.webp", isCorrect: true },
  { id: 218, src: "/images/bike/36.webp", isCorrect: false },
  // ここにデータを追加
];
