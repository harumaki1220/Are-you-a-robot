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
