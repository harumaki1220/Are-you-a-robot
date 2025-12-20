"use client";

type BeginSlideProps = {
  onNext: () => void;
};

export default function BeginSlide({ onNext }: BeginSlideProps) {
  return (
    <button
      onClick={onNext}
      className="px-6 py-3 border rounded-md text-sm text-black hover:bg-gray-100 transition"
    >
      Start reCAPTCHA Test
    </button>
  );
}
