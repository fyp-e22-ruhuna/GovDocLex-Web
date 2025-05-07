import CommonLabel from "@/components/common/Label";
import greenball from "/assets/images/green_ball.png";

function About() {
  return (
    <div className="p-24 relative">
        <img src={greenball} alt="greenball" className="absolute z-0 bottom-0" />
      <div className="p-12 border bg-[#0E2324]/20 rounded-3xl text-center flex flex-col items-center gap-4">
        <CommonLabel text={"What is GovDocLex"} />
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]/50 font-sfpro text-4xl">
          Built for Innovators, Loved by Everyone
        </h1>
        <p className="text-white/80 font-sfpro">
          GovDocLex is an AI-powered platform designed to extract, analyze, and
          explain complex information from Sri Lankan government documents—such
          as Gazettes, Acts, Bills, and Circulars—transforming them into
          structured, interconnected knowledge.
        </p>
      </div>
    </div>
  );
}

export default About;
