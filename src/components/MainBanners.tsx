"use client";
import { dataItems } from "@/constant/MainBannersSectionData";
import { cn } from "@/lib/utils";
import { Params } from "@/types/locale";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MainBanners = () => {
  const t = useTranslations("MainBanners");
  const [_, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    <section className="py-16 md:py-24 relative mb-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/artwork/artwork-4.webp')" }}
      >
      </div>
      <div className="max-w-[1250px] mx-auto px-6 relative">
        <div>
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
              1280: { slidesPerView: 4 },
            }}
          >
            {dataItems(locale).map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link href={item.href} className="group block relative rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-b from-white/5 to-white/10">
                  <div
                    className="relative h-[280px] overflow-hidden rounded-t-[20px]"
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
                  <div className="p-4">
                    <p className="text-white text-sm font-normal mb-2">{t(item.titleKey.replace('MainBanners.', ''))}</p>
                    <span className="text-blue-400 flex items-center gap-2 text-sm font-medium">
                      {t("learnMore")}
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={cn("group-hover:translate-x-1 transition-transform mr-2", isRTL && "rotate-180 mr-2")}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                          fill="currentColor"
                        />
                      </motion.svg>
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MainBanners;
