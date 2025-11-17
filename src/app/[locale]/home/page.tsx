import CallToAction from "@/components/CallToAction";
import DiscoverSection from "@/components/DiscoverSection";
import HeroSlider from "@/components/HeroSlider";
import MagazineSlider from "@/components/MagazineSliderSection";
import MainBanners from "@/components/MainBanners";
import { OurClientsSection } from "@/components/ourClientsSection";
import { OurPartnersSection } from "@/components/ourPartnersSection";
import TimeLine from "@/components/timeLine";

export default async function page() {

  return (
    <div className="bg-black">
      <HeroSlider />
      <div className="my-20"> <CallToAction /> </div>
      <DiscoverSection />
      <OurPartnersSection />
      <MainBanners />
      <OurClientsSection />
      {/* <MagazineSection /> */}
      <TimeLine />
      <MagazineSlider />
      {/* <BlogsSection /> */}
      {/* <ContentKeyFactsText /> */}
      {/* <VideoSection /> */}
      <div className="pb-20"> <CallToAction /> </div>
      {/* <ContactConversion /> */}
      {/* <AboutUsSection /> */}
    </div>
  );
}