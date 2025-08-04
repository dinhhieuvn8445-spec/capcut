import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import StatsSection from "@/components/sections/stats-section";
import CourseIntroSection from "@/components/sections/course-intro-section";
import WhyChooseUsSection from "@/components/sections/why-choose-us-section";
import InstructorsSection from "@/components/sections/instructors-section";
import PricingSection from "@/components/sections/pricing-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <CourseIntroSection />
        <WhyChooseUsSection />
        <InstructorsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
