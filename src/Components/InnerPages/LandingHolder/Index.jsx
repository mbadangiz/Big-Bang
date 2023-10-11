import { LandingHistorySection } from "./LandingHistorySection/LandingHistorySection";
import { LandingPopularCoursesSection } from "./LandingPopularCoursesSection/LandingPopularCoursesSection";
import { ServicesSection } from "./LandingServicesSection/ServicesSection";
import { LandingTeachersSection } from "./LandingTeachersSection/LandingTeachersSection";
import { CategorySection } from "./LandingCategorySection/CategorySection";
import { LandingArticlesNewsSection } from "./LandingArticlesNewsSection/LandingArticlesNewsSection";

const LandingHolder = () => {
  return (
    <>
      <ServicesSection />
      <CategorySection />
      <LandingPopularCoursesSection />
      <LandingHistorySection />
      <LandingTeachersSection />
      <LandingArticlesNewsSection />
    </>
  );
};

export { LandingHolder };
