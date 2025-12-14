import RecaptchaBox from "@/components/RecaptchaBox";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f1f3f4] p-6">
      <RecaptchaBox />
    </div>
  );
}