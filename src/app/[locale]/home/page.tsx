import DiscoverSection from "@/components/DiscoverSection";
import HeroSlider from "@/components/HeroSlider";
import MagazineSlider from "@/components/MagazineSliderSection";
import ContactConversion from "@/components/contactConversion";
import { OurClientsSection } from "@/components/ourClientsSection";
import { OurPartnersSection } from "@/components/ourPartnersSection";
import TimeLine from "@/components/timeLine";

export default async function page() {

  return (
    <div className="bg-black">
      <HeroSlider />
      <DiscoverSection />
      <OurPartnersSection />
      <OurClientsSection />
      {/* <WhatWebelieveSection /> */}
      {/* <MagazineSection /> */}
      <TimeLine />
      <MagazineSlider />
      {/* <BlogsSection /> */}
      {/* <ContentKeyFactsText /> */}
      {/* <VideoSection /> */}
      <ContactConversion />
      {/* <AboutUsSection /> */}
    </div>
  );
}