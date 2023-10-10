import { LandingHistorySection } from "./LandingHistorySection/LandingHistorySection";
import { LandingPopularCoursesSection } from "./LandingPopularCoursesSection/LandingPopularCoursesSection";
import { ServicesSection } from "./LandingServicesSection/ServicesSection";
import { LandingTeachersSection } from "./LandingTeachersSection/LandingTeachersSection";

const LandingHolder = () => {
  return (
    <>
      <ServicesSection />
      <LandingPopularCoursesSection />
      <LandingHistorySection />
      <LandingTeachersSection />
    </>
  );
};

export { LandingHolder };
