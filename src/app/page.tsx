// ひとまずは start, choose-images, result の 3ぺーじを遷移させる
// そのため、app/page.tsx にリダイレクトさせる
// /startに飛ばす

//import RecaptchaBox from "@/components/RecaptchaBox";
//
//export default function Home() {
//  return (
//    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f1f3f4] p-6">
//      <RecaptchaBox />
//    </div>
//  );
//}

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/start")
}
