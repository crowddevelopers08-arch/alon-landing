
// import CarRentalHero from "@/component/banner";
import FurtherQuestionsBanner from "@/component/contact";
import WhoWeAreSection from "@/component/hairtreatment/about";
import SkinHeroSection from "@/component/hairtreatment/banner";
import CTASection from "@/component/hairtreatment/cta-section";
import HairSpecialistComponent from "@/component/hairtreatment/doctor-section";
import FAQSection from "@/component/hairtreatment/faq";
import Footered from "@/component/hairtreatment/footer";
import HairTreatmentProcedure from "@/component/hairtreatment/hair-treatment-procedure";
import IframeTwoColumnSection from "@/component/hairtreatment/iframe";
import Navbar from "@/component/hairtreatment/navbar";
import SkinTreatments from "@/component/hairtreatment/service";
import CosBeforeAfterSection from "@/component/hairtreatment/service-two";

import MedicalServicesComponent from "@/component/our-team";
import HealthcareFeaturesSection from "@/component/service-two";
import ClinicVideosSection from "@/component/videosection";
import Image from "next/image";

export default function page() {
  return (
      <div>
      <Navbar />
      <SkinHeroSection/>
      <WhoWeAreSection />
      <HairTreatmentProcedure />
      <SkinTreatments />
      <HairSpecialistComponent />

      <CosBeforeAfterSection />
      {/* <ClinicVideosSection /> */}
      {/* <MedicalServicesComponent /> */}
      <FAQSection />
      <IframeTwoColumnSection />
      {/* <FurtherQuestionsBanner />   */}
      <CTASection />
      <Footered />
      </div>
  );
}
