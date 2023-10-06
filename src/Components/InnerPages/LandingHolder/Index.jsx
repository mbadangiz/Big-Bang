import { LandingHistorySection } from "./LandingHistorySection/LandingHistorySection";
import { LandingPopularCoursesSection } from "./LandingPopularCoursesSection/LandingPopularCoursesSection";

const LandingHolder = () => {
  return (
    <>
      <LandingPopularCoursesSection />
      <LandingHistorySection />
    </>
  );
};

export { LandingHolder };
