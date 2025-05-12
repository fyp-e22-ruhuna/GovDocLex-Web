import TeamCard from "./TeamCard";
import box from "/assets/images/blue_box.webp";

const cardPositions = [
  { top: "0%", left: "-30%" },
  { top: "35%", left: "-30%" },
  { top: "70%", left: "-30%" },
   { top: "0%", left: "90%" },
  { top: "35%", left: "90%" },
  { top: "70%", left: "90%" },
];

function TeamBox() {
  return (
    <div className="relative py-6 flex items-center justify-center">
      {/* Background Image */}
      <img src={box} alt="box" className="w-[500px]" />

      {/* Dynamically Render Cards */}
      {cardPositions.map((pos, index) => (
        <div
          key={index}
          className="absolute"
          style={{ top: pos.top, left: pos.left }}
        >
          <TeamCard />
        </div>
      ))}
    </div>
  )
}

export default TeamBox
