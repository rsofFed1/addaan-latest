"use client"

import AnimatedSection from "@/components/ui/animated-section"
import ParallaxElement from "@/components/ui/parallax-element"
import { discoverData } from "@/constant/aboutUs"
import { cn } from "@/lib/utils"
import { Params } from "@/types/locale"
import { CheckCircle, Eye, Target } from "lucide-react"
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
              <p className="text-md md:text-xl font-bold text-white mb-6"> {t('subheading')} </p>
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
                  <p>{t('description.paragraph')}</p>
                  <div>
                    <h3 className="text-xl md:text-xl font-bold text-white mb-6"> {t('ourJourney.title')} </h3>
                    <p>{t('ourJourney.description')}</p>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-xl font-bold text-white mb-6"> {t('Supporting.title')} </h3>
                    <p>{t('Supporting.description')}</p>
                  </div>
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
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </AnimatedSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="relative h-full bg-white backdrop-blur-md border border-mining-blue/20 rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
                  <ParallaxElement speed={0.1} className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="w-full h-full bg-gradient-to-r from-mining-blue/10 via-transparent to-mining-blue/5"></div>
                  </ParallaxElement>
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-black mr-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-black">{t('stats.ourMission.title')}</h3>
                  </div>
                  <p className="text-black"> {t('stats.ourMission.description')} </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <div className="relative h-full bg-white backdrop-blur-md border border-mining-blue/20 rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
                  <ParallaxElement speed={0.15} className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="w-full h-full bg-gradient-to-l from-mining-blue/15 to-transparent"></div>
                  </ParallaxElement>
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-black mr-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-black">{t('stats.ourVision.title')}</h3>
                  </div>
                  <p className="text-black"> {t('stats.ourVision.description')} </p>
                </div>
              </AnimatedSection>
            </div>
            <div>
              <h3 className="text-sm md:text-xl font-extrabold text-white mt-8">
                {t('features.title')}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {[0, 1, 2, 3, 4].map((index) => (
                  <AnimatedSection key={index} delay={index * 100} animation="fadeInUp">
                    <div className="flex items-start p-2 rounded-lg hover:bg-mining-blue/5 transition-all group">
                      <CheckCircle className={cn("h-5 w-5 text-white mr-3 flex-shrink-0 group-hover:scale-110 transition-transform", isRTL && "ml-3", "mr-3")} />
                      <span className="text-white text-sm group-hover:text-white transition-colors">
                        {t(`features.${index}`)}
                      </span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
                <AnimatedSection animation="fadeInLeft" delay={200}>
                  <div className="relative h-full bg-white/10 backdrop-blur-lg shadow-sm border border-white/40 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-mining-blue/10 via-transparent to-mining-light-blue/10 opacity-60"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="flex items-center justify-center w-12 h-12">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl text-white font-bold drop-shadow-sm">{t('stats.certifications.title')}</h3>
                      </div>
                      <p className="text-white mb-6 font-medium drop-shadow-sm">{t('stats.certifications.description')}</p>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 p-4 rounded-xl shadow-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white text-lg mb-3">{t('stats.certifications.iso9001.title')}</h4>
                            <p className="text-white text-sm">{t('stats.certifications.iso9001.description')}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-xl shadow-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white text-lg mb-3">{t('stats.certifications.iso45001.title')}</h4>
                            <p className="text-white/80 font-medium mb-1"></p>
                            <p className="text-white text-sm">{t('stats.certifications.iso45001.description')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={400}>
                  <div className="relative h-full bg-white/10 backdrop-blur-lg shadow-sm border border-white/40 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-mining-blue/10 via-transparent to-mining-light-blue/10 opacity-60"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="flex items-center justify-center w-12 h-12">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{t('stats.contactInformation.title')}</h3>
                      </div>
                      <p className="text-white mb-6">
                        {t('stats.contactInformation.description')}
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 p-4 rounded-xl shadow-lg">
                          <div className="flex-shrink-0 w-12 h-12 bg-mining-blue/10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white text-lg mb-1">{t('stats.contactInformation.headOffice.title')}</h4>
                            <p className="text-white">
                              {t('stats.contactInformation.headOffice.address')}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-xl shadow-lg">
                          <div className="flex-shrink-0 w-12 h-12 bg-mining-blue/10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white text-lg mb-1">{t('stats.contactInformation.email.title')}</h4>
                            <p className="text-white hover:text-mining-light-blue transition-colors cursor-pointer">
                              {t('stats.contactInformation.email.address')}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-xl shadow-lg">
                          <div className="flex-shrink-0 w-12 h-12 bg-mining-blue/10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white text-lg mb-1">{t('stats.contactInformation.contact.title')}</h4>
                            <p className="text-white">{t('stats.contactInformation.contact.phone')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="my-20">
                <AnimatedSection animation="fadeInUp" delay={200}>
                  <div className="relative bg-black backdrop-blur-md border border-mining-blue/20 rounded-2xl p-8 shadow-lg overflow-hidden">
                    <ParallaxElement speed={0.1} className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <div className="w-full h-full bg-gradient-to-r from-mining-blue/5 via-transparent to-mining-light-blue/5"></div>
                    </ParallaxElement>

                    <div className="relative z-10 text-center">
                      <h3 className="text-2xl font-bold mb-3 text-white">{t('stats.callToAction.title')}</h3>
                      <p className="text-white mb-6">{t('stats.callToAction.description')}</p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button className="bg-mining-blue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-mining-light-blue hover:scale-105 flex-1 sm:flex-none">
                          {t('stats.callToAction.buttons.contact')}
                        </button>

                        <button className="bg-white shadow-sm border border-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-mining-blue/5 hover:scale-105 flex-1 sm:flex-none">
                          {t('stats.callToAction.buttons.explore')}
                        </button>

                        <button className="bg-mining-gray text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-mining-gray/80 hover:scale-105 flex-1 sm:flex-none">
                          {t('stats.callToAction.buttons.quote')}
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
