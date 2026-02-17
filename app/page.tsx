import WhoWeAreSection from "@/component/about";
import CarRentalHero from "@/component/banner";
import FurtherQuestionsBanner from "@/component/contact";
import MedicalLabSection from "@/component/doctor-section";
import FAQSection from "@/component/faq";
import IframeTwoColumnSection from "@/component/iframe";
import MedicalServicesComponent from "@/component/our-team";
import HairFallTreatmentSection from "@/component/service";
import HealthcareFeaturesSection from "@/component/service-two";
import ClinicVideosSection from "@/component/videosection";
import Image from "next/image";

export default function Home() {
  return (
      <>
      <CarRentalHero/>
      <WhoWeAreSection />
      <HairFallTreatmentSection />

      <HealthcareFeaturesSection />
      <ClinicVideosSection />
      <MedicalLabSection />
      <MedicalServicesComponent />
      <FAQSection />
      <IframeTwoColumnSection />
      <FurtherQuestionsBanner />
      </>
  );
}
