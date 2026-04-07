import WhoWeAreSection from "@/component/skin-treatment/about";
import SkinHeroSection from "@/component/skin-treatment/banner";
import CTASection from "@/component/skin-treatment/cta-section";
import HairSpecialistComponent from "@/component/skin-treatment/doctor-section";
import FAQSection from "@/component/skin-treatment/faq";
import Footer from "@/component/skin-treatment/footer";
import HairTreatmentProcedure from "@/component/skin-treatment/hair-treatment-procedure";
import IframeTwoColumnSection from "@/component/skin-treatment/iframe";
import Navbar from "@/component/skin-treatment/navbar";
import SkinTreatments from "@/component/skin-treatment/service";
import CosBeforeAfterSection from "@/component/skin-treatment/service-two";



export default function page() {
  return (
      <div>
      <Navbar />
      <SkinHeroSection />
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
      <Footer />
      </div>
  );
}
