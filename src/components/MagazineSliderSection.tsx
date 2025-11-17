"use client";
import { cn } from "@/lib/utils";
import { Params } from "@/types/locale";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useRef } from "react";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { VideoPlayer, VideoPlayerContent, VideoPlayerControlBar, VideoPlayerPlayButton, VideoPlayerTimeDisplay, VideoPlayerTimeRange } from "./ui/video-player";

const DataItems = [
  {
    label: "cards.0.label",
    title: "cards.0.title",
    image: '/images/main_large.webp',
    video: "/videos/video1.mp4",
  },
  {
    label: "cards.1.label",
    title: "cards.1.title",
    image: '/images/main_large.webp',
    video: "/videos/IMDEX - 2025.mp4",
  },
  {
    label: "cards.2.label",
    title: "cards.2.title",
    image: '/images/partnersLogo/DescoLogo.webp',
    video: "/videos/2 Rod rack system.mp4",
  },
  {
    label: "cards.3.label",
    title: "cards.3.title",
    image: '/images/partnersLogo/IMDEXLogo-1.webp',
    video: "/videos/IMDEX - 2025.mp4",
  },
  {
    label: "cards.4.label",
    title: "cards.4.title",
    image: '/images/main_large.webp',
    video: "/videos/فيلم عدان 2023.mp4",
  },
  {
    label: "cards.5.label",
    title: "cards.5.title",
    image: '/images/main_large.webp',
    video: "/videos/تقرير عدان في الرياض.mp4",
  },
  {
    label: "cards.5.label",
    title: "cards.5.title",
    image: '/images/main_large.webp',
    video: "/videos/عدان 2024.mp4",
  },
];

const MagazineSlider = () => {
  const t = useTranslations("MagazineSection");
  const swiperRef = useRef<SwiperType | undefined>(undefined);
  const { locale } = useParams<Params>();
  const isRTL = locale === 'ar';

  return (
    <>
      <section className="py-16 md:py-24 relative my-24">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/artwork/artwork-6.webp')" }} > </div>
        <div className="max-w-[1250px] mx-auto px-6 relative">
          <div className="pb-10 md:pb-16 flex justify-between items-center">
            <h2 className="text-[28px] md:text-[40px] font-normal text-white max-full mb-4">
              {t("heading.title")}
            </h2>
            <div className="gap-4 hidden md:flex">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className={cn("w-12 h-12 mt-0 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer", isRTL && "rotate-180")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className={cn("w-12 h-12 mt-0 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer", isRTL && "rotate-180")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          {/* Slider */}
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            loop={false}
            autoplay={false}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >
            {DataItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-[180px] md:h-[300px] mb-4 shadow-md">
                  <VideoPlayer className="w-full h-full overflow-hidden rounded-xl">
                    <VideoPlayerContent
                      className=" w-full h-full object-cover"
                      crossOrigin=""
                      muted
                      preload="auto"
                      slot="media"
                      src={item.video}
                    />
                    <VideoPlayerControlBar>
                      <VideoPlayerPlayButton className="bg-black"/>
                      {/* <VideoPlayerSeekBackwardButton />
                      <VideoPlayerSeekForwardButton /> */}
                      <VideoPlayerTimeRange className="bg-black" />
                      <VideoPlayerTimeDisplay className="bg-black text-white" showDuration />
                      {/* <VideoPlayerMuteButton /> */}
                      {/* <VideoPlayerVolumeRange /> */}
                    </VideoPlayerControlBar>
                  </VideoPlayer>
                </div>
                <div className="relative z-10 flex flex-col justify-between w-full h-full">
                  <div>
                    <span className="block text-xs font-semibold tracking-widest text-white mb-2">
                      {t(item.label)}
                    </span>
                    <h3 className="text-xl font-normal text-white leading-snug line-clamp-3">
                      {t(item.title)}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default MagazineSlider;
