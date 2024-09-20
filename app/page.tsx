import CurveLine from "@/components/curve-line/curve-line";

export default function Home() {
  return (
    <div className="relative container mx-auto p-5 h-[100vh] flex justify-center items-center">
      <div>
        <div className="w-full">
          <CurveLine />
        </div>
        <div className="text-xl lg:w-[50%] mt-10">
          StretchRopeEffect is a dynamic and interactive rope-like line effect. This effect makes the line stretch when moused over, providing a visually engaging and unique user experience.
        </div>
        <div className="flex items-center flex-wrap">
          <button className="px-3 py-1 mt-3 rounded-full border">Next js</button>
        </div>
        <div className="absolute px-5 py-3 bg-[#191919] bottom-5 rounded-full left-0 w-full flex items-center justify-between">
          <div className="text-2xl tracking-tighter font-[500]">Credits</div>
          <a href="https://shilp.co" target="_blank" className="text-xl">
            <button className="px-3 py-1 mt-3 rounded-full underline text-blue-500">
              Venil Sutariya
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
