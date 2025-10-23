"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { Params } from "@/types/locale";

const DataItems = [
  {
    label: "cards.0.label",
    title: "cards.0.title",
    image: '/images/img1.jpeg',
    video: "/videos/video1.mp4",
  },
  {
    label: "cards.1.label",
    title: "cards.1.title",
    image: '/images/img2.jpeg',
    video: "/videos/فيلم عدان 2023.mp4",
  },
  {
    label: "cards.2.label",
    title: "cards.2.title",
    image: '/images/img3.jpeg',
    video: "/videos/عدان 2024.mp4",
  },
  {
    label: "cards.3.label",
    title: "cards.3.title",
    image: '/images/img4.jpeg',
    video: "/videos/فيلم IMDEX -  مؤتمر التعدين - ٢٠٢٥.mp4",
  },
    {
    label: "cards.4.label",
    title: "cards.4.title",
    image: '/images/img5.jpeg',
    video: "/videos/فيلم التعدين - IMDEX - عدان ٢٠٢٥.mp4",
  },
  {
    label: "cards.5.label",
    title: "cards.5.title",
    image: '/images/img6.jpeg',
    video: "/videos/تقرير عدان في الرياض.mp4",
  },
  {
    label: "cards.5.label",
    title: "cards.5.title",
    image: '/images/img6.jpeg',
    video: "/videos/2 Rod rack system.mp4",
  },
];

const MagazineSlider = () => {
  const t = useTranslations("MagazineSection");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | undefined>(undefined);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const { locale } = useParams<Params>();
  const isRTL = locale === 'ar';

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  const handlePlayPause = async (index: number) => {
    try {
      const video = videoRefs.current[index];
      if (video) {
        if (playingIndex === index) {
          video.pause();
          setPlayingIndex(null);
        } else {
          if (playingIndex !== null && videoRefs.current[playingIndex]) {
            videoRefs.current[playingIndex]?.pause();
          }
          await video.play();
          setPlayingIndex(index);
        }
      }
    } catch (error) {
      console.error('Error playing/pausing video:', error);
    }
  };

  return (
    <>
      <section className="py-16 md:py-24 relative my-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/artwork/artwork-6.jpg')" }}
        >
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative">
          <div className="px-0 md:px-16 pb-10 md:pb-16 flex justify-between items-center">
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
                <div
                  className="group relative rounded-2xl overflow-hidden shadow-md h-[200px] md:h-[320px] flex mb-4"
                  onMouseMove={(e) => handleMouseMove(e)}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {hoveredCard === idx && (
                    <motion.div
                      className="pointer-events-none absolute w-40 h-40 rounded-full bg-white/30 backdrop-blur-sm z-50"
                      animate={{ x: mousePosition.x - 48, y: mousePosition.y - 48, scale: 1.2, opacity: 0.3, }}
                      initial={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1, }}
                    />
                  )}
                  {item.video ? (
                    <video
                      ref={(el) => { videoRefs.current[idx] = el; }}
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      onClick={() => handlePlayPause(idx)}
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.image!}
                      alt={item.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      priority={idx === 0}
                    />
                  )}
                  {item.video && playingIndex !== idx && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        onClick={() => handlePlayPause(idx)}
                        className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group cursor-pointer hover:bg-white/30 transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 25 28.12"
                           className="w-5 h-5 text-white ml-1"
                           fill="currentColor"
                        >
                          <path d="m23.53,13.69c.29.17.29.58,0,.74L1.92,26.81c-.31.18-.67-.05-.67-.37V1.68c0-.32.36-.55.67-.37l21.61,12.38Z" />
                        </svg>
                      </div>
                    </div>
                  )}
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
