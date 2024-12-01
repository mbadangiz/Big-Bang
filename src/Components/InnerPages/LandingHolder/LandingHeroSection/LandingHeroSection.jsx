import { useRef } from "react";
import { HeroSectionRightSide } from "./HeroSectionRightSide";
import { HeroSectionLeftSide } from "./HeroSectionLeftSide";

const LandingHeroSection = () => {
  return (
    <div className="width-handler mt-20 md:mt-10 flex-row-all-center justify-between ">
      <HeroSectionRightSide />
      <HeroSectionLeftSide />
    </div>
  );
};
// csd

export { LandingHeroSection };
