import { CommentSection } from "./CommentSection/CommentSection";
import { LandingHistorySection } from "./LandingHistorySection/LandingHistorySection";
import { LandingPopularCoursesSection } from "./LandingPopularCoursesSection/LandingPopularCoursesSection";
import { ServicesSection } from "./LandingServicesSection/ServicesSection";
import { LandingTeachersSection } from "./LandingTeachersSection/LandingTeachersSection";
import { CategorySection } from "./LandingCategorySection/CategorySection";
import { LandingArticlesNewsSection } from "./LandingArticlesNewsSection/LandingArticlesNewsSection";
import { LandingHeroSection } from "./LandingHeroSection/LandingHeroSection";
import { useEffect } from "react";
import Aos from "aos";

const LandingHolder = () => {
  useEffect(() => {
    document.body.style.background = "#fff";
  }, []);
  return (
    <>
      <LandingHeroSection />
      <ServicesSection />
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
