// 画像データの型定義
export type ImageItem = {
  id: number;
  src: string;
  isCorrect: boolean;
};

// 愛のある画像データ(100番台)
export const LOVE_IMAGE_DATA: ImageItem[] = [
  { id: 100, src: "/love/love_1_False.png", isCorrect: false },
  { id: 101, src: "/love/love_2_False.png", isCorrect: false },
  { id: 102, src: "/love/love_3_False.png", isCorrect: false },
  { id: 103, src: "/love/love_4_False.png", isCorrect: false },
  { id: 104, src: "/love/love_5_False.png", isCorrect: false },
  { id: 105, src: "/love/love_6_False.png", isCorrect: false },
  { id: 106, src: "/love/love_7_False.png", isCorrect: false },
  { id: 107, src: "/love/love_8_False.png", isCorrect: false },
  { id: 108, src: "/love/love_9_False.png", isCorrect: false },
  { id: 109, src: "/love/love_10_True.png", isCorrect: true },
  { id: 110, src: "/love/love_11_True.png", isCorrect: true },
  { id: 111, src: "/love/love_12_True.png", isCorrect: true },
  { id: 112, src: "/love/love_13_True.png", isCorrect: true },
  { id: 113, src: "/love/love_14_True.png", isCorrect: true },
  { id: 114, src: "/love/love_15_True.png", isCorrect: true },
  { id: 115, src: "/love/love_16_True.png", isCorrect: true },
  { id: 116, src: "/love/love_17_True.png", isCorrect: true },
  { id: 117, src: "/love/love_18_True.png", isCorrect: true },
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
