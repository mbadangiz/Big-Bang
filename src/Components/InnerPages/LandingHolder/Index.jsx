import { LandingArticlesNewsSection } from "./LandingArticlesNewsSection/LandingArticlesNewsSection";
import { LandingHistorySection } from "./LandingHistorySection/LandingHistorySection";
import { LandingPopularCoursesSection } from "./LandingPopularCoursesSection/LandingPopularCoursesSection";
import { LandingTeachersSection } from "./LandingTeachersSection/LandingTeachersSection";

const LandingHolder = () => {
  return (
    <>
      <LandingPopularCoursesSection />
      <LandingHistorySection />
      <LandingTeachersSection />
      <LandingArticlesNewsSection />
    </>
  );
};

export { LandingHolder };
