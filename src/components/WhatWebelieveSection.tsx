"use client";
import { dataItems } from "@/constant/WhatWebelieveSectionData";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BackgroundAnimations } from "./animations/animations";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { Params } from "@/types/locale";

const WhatWebelieveSection = () => {
  const t = useTranslations("WhatWeBelieve");
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const progress = ((activeIndex + 1) / dataItems.length) * 100;
  const { locale } = useParams<Params>();
  const isRTL = locale === 'ar';

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top
    });
  };

  return (
    <section className="py-16 md:py-24 bg-[#202021] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] bg-grid-pattern"></div>
      <BackgroundAnimations />
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="px-0 md:px-16 pb-10 md:pb-16">
          <p className="uppercase tracking-widest text-white text-sm mb-5">
            {t("heading.label")}
          </p>
          <h2 className="text-[28px] md:text-[40px] font-normal text-white w-full mb-4">
            {t("heading.title")}
          </h2>
        </div>
        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
          >
            {dataItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link href={item.href} className="group block relative">
                  <div
                    className="relative h-[280px] overflow-hidden rounded-t-[20px] rounded-l-[20px] mt-8"
                    onMouseMove={(e) => handleMouseMove(e)}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === idx && (
                      <motion.div
                        className="pointer-events-none absolute w-20 h-20 rounded-full bg-white/20 shadow-lg z-50"
                        animate={{ x: mousePosition.x - 40, y: mousePosition.y - 40, scale: 1.5, opacity: 0.3, }}
                        initial={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.2, }}
                      />
                    )}
                    <Image
                      src={item.image}
                      alt={item.titleKey}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                      priority={idx === 0}
                    />
                  </div>
                  <div className="py-4">
                    <p className="text-white text-sm font-normal mb-2">{t(item.titleKey.replace('WhatWeBelieve.', ''))}</p>
                    <p className="text-gray-300 text-xs font-light mb-4">{t(item.descriptionKey.replace('WhatWeBelieve.', ''))}</p>
                    <span className="text-blue-400 flex items-center gap-2 text-sm font-medium">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={cn("group-hover:translate-x-1 transition-transform mr-4", isRTL && "rotate-180 mr-4")}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                          fill="currentColor"
                        />
                      </motion.svg>
                      {t("learnMore")}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-200 mt-6 rounded overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWebelieveSection;
