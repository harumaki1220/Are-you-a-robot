"use client";

type BeginSlideProps = {
  onNext: () => void;
};

export default function BeginSlide({ onNext }: BeginSlideProps) {
  return (
    <div
      className="
      bg-blue-500 text-white
      min-h-screen w-full
      flex  items-center justify-center
      "
    >
      <div className="flex items-center gap-6">
	{/* Profile */}
	<div
	  className="
	  flex flex-col
	  text-sm
	  leading-relaxed
          "
	>
	  <div className="text-lg font-medium">
	 東洋大学情報連携学部
	  </div>
	  <div className="text-lg font-medium">
	 情報技術メディア研究会
	  </div>
	  <div className="text-xl font-semibold">
	 チーム : WE ARE HUMAN
	  </div>
        </div>

	{/* Next Button */}
	<button
	  onClick={onNext}
	  className="
	  w-12 h-12
	  flex items-center justify-center
	  transition
          "
	>
	  <div
	    className="
	    w-0 h-0
	    border-t-16 border-b-16 border-l-30
	    border-t-transparent
	    border-b-transparent
	    border-l-white
	    ml-1
            "
	  />
	</button>
      </div>
    </div>
  );
}
