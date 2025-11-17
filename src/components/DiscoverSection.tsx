"use client";
import { cn } from "@/lib/utils";
import { Params } from "@/types/locale";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import "swiper/css";
import { SwiperSlide } from "swiper/react";

const DiscoverSlider = () => {
  const t = useTranslations("DiscoverSection");
  const { locale } = useParams<Params>();
  const isRTL = locale === 'ar';
  const discoverData = [
    {
      label: "cards.0.label",
      title: "cards.0.title",
      href: `/${locale}/aboutUs`
    },
    {
      label: "cards.1.label",
      title: "cards.1.title",
      href: `/${locale}/aboutUs`
    },
    {
      label: "cards.2.label",
      title: "cards.2.title",
      href: `/${locale}/aboutUs`
    },
  ];

  return (
    <>
      <section className="py-16 md:py-24 relative my-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/artwork/artwork-7.webp')" }}
        >
        </div>

        <div className="max-w-[1250px] mx-auto px-6 relative">
          <div className="pb-6">
            <p className="uppercase tracking-widest text-[#ffffff] text-sm mb-5">
              {t("heading.label")}
            </p>
            <h2 className="text-[28px] md:text-[40px] font-normal text-[#ffffff] max-full mb-4">
              {t("heading.title")}
            </h2>
            <p className="text-[#ffffff] text-[20px] font-normal mb-[22px]">
              {t("heading.description")}
            </p>
          </div>

          {discoverData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Link
                href={item.href}
                className="group relative"
              >
                <div className="relative z-10 flex justify-between items-center w-full h-full py-4 gap-4">
                  <div>
                    <span className="block text-md font-semibold tracking-widest text-[#ffffff] mb-2">
                      {t(item.label)}
                    </span>
                    <h3 className="text-lg font-normal text-[#ffffff]">
                      {t(item.title)}
                    </h3>
                  </div>
                  <div>
                    <motion.span className={cn("self-end mt-4 inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/80 bg-black/30 group-hover:bg-white/20", isRTL && "rotate-180 mr-2")}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className="arrow-icon" > {" "} <path fillRule="evenodd" clipRule="evenodd" d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z" fill="#FFFFFF" />{" "} </svg>
                    </motion.span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </section>
    </>
  );
};

export default DiscoverSlider;
