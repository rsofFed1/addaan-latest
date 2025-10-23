"use client"

import AnimatedSection from "@/components/ui/animated-section"
import { discoverData } from "@/constant/aboutUs"
import { cn } from "@/lib/utils"
import { Params } from "@/types/locale"
import { CheckCircle } from "lucide-react"
import { useTranslations } from 'next-intl'
import Image from "next/image"
import { useParams } from "next/navigation"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function About() {
  const t = useTranslations('AboutPage');
  const { locale } = useParams<Params>();
  const isRTL = locale === 'ar';

  return (
    <>
      <div className="bg-black pt-[80px] md:pt-[112px]">
        <section className="relative text-white py-18 px-4 md:px-16 mb-24" style={{ backgroundImage: "url('/images/artwork/artwork-7.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }} >
          <div className="container max-w-6xl mx-auto px-4 z-10 relative">
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-12 h-1 bg-[#13A7DC] m-4" />
                <span className="text-white font-semibold uppercase tracking-wider text-sm"> {t('title')} </span>
                <div className="w-12 h-1 bg-[#13A7DC] m-4" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> {t('heading')} </h2>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/artwork/artwork-5.jpg')" }}
          >
          </div>
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
              <AnimatedSection animation="fadeInLeft">
                <div className="space-y-5 text-lg text-white leading-relaxed">
                  <p>{t('description.paragraph1')}</p>
                  <p>{t('description.paragraph2')}</p>
                  <p>{t('description.paragraph3')}</p>
                  <p>{t('description.paragraph4')}</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight">
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={1}
                  spaceBetween={16}
                  loop={false}
                  autoplay={false}
                  pagination={true}
                  className="h-full w-full"
                >
                  {discoverData.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div
                        className="group relative rounded-2xl overflow-hidden shadow-md h-[300px] md:h-full w-full"
                      >
                        <Image
                          src={item.image}
                          alt={item.label}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          priority={idx === 0}
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 flex flex-col justify-between p-6">
                          <div>
                            {/* <span className="block text-xs font-semibold tracking-widest text-white mb-2">
                              {t(item.label)}
                            </span> */}
                            {/* <h3 className="text-xl font-normal text-white leading-snug line-clamp-3">
                            {t(item.title)}
                          </h3> */}
                          </div>

                          {/* Arrow */}
                          {/* <span className={cn("self-end mt-4 inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/80 bg-black/30 group-hover:bg-white/20", isRTL && "rotate-180 mr-2")}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className="arrow-icon" > {" "} <path fillRule="evenodd" clipRule="evenodd" d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z" fill="#FFFFFF" />{" "} </svg>
                        </span> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </AnimatedSection>
            </div>
            <div>
              <h3 className="text-sm md:text-xl font-extrabold text-white mt-8">
                {t('features.title')}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                  <AnimatedSection key={index} delay={index * 100} animation="fadeInUp">
                    <div className="flex items-start p-2 rounded-lg hover:bg-mining-blue/5 transition-all group">
                      <CheckCircle className={cn("h-5 w-5 text-white mr-3 flex-shrink-0 group-hover:scale-110 transition-transform", isRTL && "ml-3", "mr-3")} />
                      <span className="text-white text-sm group-hover:text-mining-blue transition-colors">
                        {t(`features.${index}`)}
                      </span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="text-center group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-mining-blue/10 to-mining-blue/5 rounded-xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative p-4">
                      <div className="text-4xl text-white font-extrabold bg-gradient-to-r from-mining-blue to-mining-blue/70 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                        {t(`stats.${index}.number`)}
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-mining-gray">
                        {t(`stats.${index}.label`)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
