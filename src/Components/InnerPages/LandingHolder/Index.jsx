import { CategorySection } from "./LandingCategorySection/CategorySection";
import { LandingHistorySection } from "./LandingHistorySection/LandingHistorySection";
import { LandingPopularCoursesSection } from "./LandingPopularCoursesSection/LandingPopularCoursesSection";
import { LandingTeachersSection } from "./LandingTeachersSection/LandingTeachersSection";

const LandingHolder = () => {
  return (
    <>
      <CategorySection />
      <LandingPopularCoursesSection />
      <LandingHistorySection />
      <LandingTeachersSection />
    </>
  );
};

export { LandingHolder };
