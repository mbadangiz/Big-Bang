import { useRef } from "react";
import { HeroSectionRightSide } from "./HeroSectionRightSide";
import { HeroSectionLeftSide } from "./HeroSectionLeftSide";

const LandingHeroSection = () => {
  return (
    <div className="width-handler h-[calc(100vh-80px)] flex-row-all-center justify-between ">
      <HeroSectionRightSide />
      <HeroSectionLeftSide />
    </div>
  );
};

export { LandingHeroSection };
