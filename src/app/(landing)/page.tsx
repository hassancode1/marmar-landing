import HeroSection from "@/components/sections/HeroSection";
import GetStartedToday from "@/components/sections/GetStartedToday";
import Faq from "@/components/sections/Faq";
import EmpoweringSection from "@/components/sections/EmpoweringSection";
import Testimonials from "@/components/sections/Testimonials";
import OurOfferings from "@/components/sections/OurOfferings";

const page = () => {
  return (
    <>
      <HeroSection />
      <GetStartedToday />
      <Faq />
      <EmpoweringSection />
      <Testimonials />
      <OurOfferings />
    </>
  );
};

export default page;
