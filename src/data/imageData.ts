// 画像データの型定義
export type ImageItem = {
  id: number;
  src: string;
  isCorrect: boolean;
};

// 愛のある画像データ(100番台)
export const LOVE_IMAGE_DATA: ImageItem[] = [
  { id: 100, src: "/images/love/1.webp", isCorrect: true },
  { id: 101, src: "/images/love/2.webp", isCorrect: false },
  { id: 102, src: "/images/love/3.webp", isCorrect: false },
  { id: 103, src: "/images/love/4.webp", isCorrect: true },
  { id: 104, src: "/images/love/5.webp", isCorrect: false },
  { id: 105, src: "/images/love/6.webp", isCorrect: true },
  { id: 106, src: "/images/love/7.webp", isCorrect: true },
  { id: 107, src: "/images/love/8.webp", isCorrect: false },
  { id: 108, src: "/images/love/9.webp", isCorrect: false },
  { id: 109, src: "/images/love/10.webp", isCorrect: true },
  { id: 110, src: "/images/love/11.webp", isCorrect: false },
  { id: 111, src: "/images/love/12.webp", isCorrect: false },
  { id: 112, src: "/images/love/13.webp", isCorrect: false },
  { id: 113, src: "/images/love/14.webp", isCorrect: true },
  { id: 114, src: "/images/love/15.webp", isCorrect: false },
  { id: 115, src: "/images/love/16.webp", isCorrect: true },
  { id: 116, src: "/images/love/17.webp", isCorrect: true },
  { id: 117, src: "/images/love/18.webp", isCorrect: false },
  // ここにデータを追加
];

// 自転車の画像データ(200番台)
export const BIKE_IMAGE_DATA: ImageItem[] = [
  { id: 201, src: "/bicycle/bicycle_1_true.png", isCorrect: true },
  { id: 202, src: "/bicycle/bicycle_2_false.png", isCorrect: false },
  { id: 203, src: "/bicycle/bicycle_3_false.png", isCorrect: false },
  { id: 204, src: "/bicycle/bicycle_4_true.png", isCorrect: true },
  { id: 205, src: "/bicycle/bicycle_5_false.png", isCorrect: false },
  { id: 206, src: "/bicycle/bicycle_6_false.png", isCorrect: false },
  { id: 207, src: "/bicycle/bicycle_7_false.png", isCorrect: false },
  { id: 208, src: "/bicycle/bicycle_8_true.png", isCorrect: true },
  { id: 209, src: "/bicycle/bicycle_9_false.png", isCorrect: false },
  { id: 210, src: "/bicycle/bicycle_10_true.png", isCorrect: true },
  { id: 211, src: "/bicycle/bicycle_11_true.png", isCorrect: true },
  { id: 212, src: "/bicycle/bicycle_12_true.png", isCorrect: true },
];
