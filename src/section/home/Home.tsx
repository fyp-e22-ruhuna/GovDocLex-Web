import CommonLabel from "@/components/common/Label";
import Court from "/assets/images/court.webp";

function Hero() {
  return (
    <div className="flex max-w-[1920px] mx-auto">
      <div className="flex flex-col justify-center gap-4 w-3/4">
        <CommonLabel text={"Welcome to GovDocLex"} />
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]/50 font-sfpro text-5xl">
          AI-Powered Extraction & Reasoning for Sri Lankan Government Documents
        </h1>
        <p className="text-white/80 font-sfpro">
          Transform unstructured Gazettes, Acts, and Bills into searchable,
          explainable, and actionable knowledge.
        </p>
      </div>
      <div className="">
        <img src={Court} alt="court" className="w-[360px]" />
      </div>
    </div>
  );
}

export default Hero;
