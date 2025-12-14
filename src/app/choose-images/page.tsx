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

export default function ChooseImagePage() {
  return (
    <div className="p-4 flex justify-center">
      <div className="grid gap-2 grid-cols-3 grid-rows-3">
        {IMAGE_DATA.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 aspect-square flex items-center"
          >
            ID: {item.id}
          </div>
        ))}
      </div>
    </div>
  );
}
