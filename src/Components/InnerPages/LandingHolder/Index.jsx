import { CommentSection } from "./CommentSection/CommentSection";
import { LandingHistorySection } from "./LandingHistorySection/LandingHistorySection";
import { LandingPopularCoursesSection } from "./LandingPopularCoursesSection/LandingPopularCoursesSection";
import { ServicesSection } from "./LandingServicesSection/ServicesSection";
import { LandingTeachersSection } from "./LandingTeachersSection/LandingTeachersSection";
import { CategorySection } from "./LandingCategorySection/CategorySection";
import { LandingArticlesNewsSection } from "./LandingArticlesNewsSection/LandingArticlesNewsSection";
import { LandingHeroSection } from "./LandingHeroSection/LandingHeroSection";

const LandingHolder = () => {
  return (
    <>
      <div className="w-full  bg-heroSectoin">
        <LandingHeroSection />
        <ServicesSection />
      </div>
      <CategorySection />
      <LandingPopularCoursesSection />
      <LandingHistorySection />
      <LandingTeachersSection />
      <LandingArticlesNewsSection />
      <CommentSection />
    </>
  );
};

export { LandingHolder };
