import { LandingHistorySection } from "./LandingHistorySection/LandingHistorySection";
import { LandingPopularCoursesSection } from "./LandingPopularCoursesSection/LandingPopularCoursesSection";
import { LandingTeachersSection } from "./LandingTeachersSection/LandingTeachersSection";

const LandingHolder = () => {
  return (
    <>
      <LandingPopularCoursesSection />
      <LandingHistorySection />
      <LandingTeachersSection />
    </>
  );
};

export { LandingHolder };
