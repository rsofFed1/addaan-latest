"use client";

import { timeLineData } from "@/constant/TimeLineData";
import { motion } from "motion/react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollStack from "./scroll-stack";

export default function TimeLine() {
    const t = useTranslations();
    // const { locale } = useParams<Params>();
    // const isRTL = locale === 'ar';

    return (
        <section className="bg-[#202021] relative">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url('/images/artwork/artwork-1.jpg')" }}
            >
            </div>
            <div className="max-w-[1250px] mx-auto">
                <div className="container mx-auto px-4 py-20">
                    <div className="flex flex-col md:flex-row justify-between items-end px-0 pb-10 md:pb-16 relative">
                        <div>
                            <p className="uppercase tracking-widest text-white text-sm mb-5">{t('TimeLine.heading.label')}</p>
                            <h2 className="text-[28px] md:text-[40px] font-normal text-white w-full mb-4">{t('TimeLine.heading.title')}</h2>
                            <p className="text-white text-lg font-light mb-[22px] w-full">{t('TimeLine.heading.description')}</p>
                        </div>
                    </div>
                    <ScrollStack className="space-y-6">
                        {timeLineData.map((item, idx) => (
                            <div key={idx} className="group">
                                <div className="relative z-10">
                                    {idx < timeLineData.length - 1 && (
                                        <div className="absolute left-8 top-full w-1 h-20 bg-gradient-to-b from-blue-200 to-purple-200 transform -translate-y-10 z-0"></div>
                                    )}
                                    <motion.div
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl p-8 flex items-center shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden`}
                                    >
                                        <div className="relative z-10 w-full">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <div className="flex justify-between items-start mb-8">
                                                        <div className="bg-white/20 w-fit backdrop-blur-sm rounded-2xl px-3 py-1 border border-white/30">
                                                            <span className={`text-md font-bold ${item.textColor}`}> {item.date} </span>
                                                        </div>
                                                    </div>
                                                    <h3 className={`text-2xl md:text-2xl font-bold mb-8 ${item.textColor} leading-tight`}>{t(item.titleKey)}</h3>
                                                    <p className={`text-md ${item.textColor} opacity-90 leading-relaxed font-light`}>{t(item.descriptionKey)}</p>
                                                </div>
                                                <div className="flex justify-center mx-auto max-w-[500px] w-full">
                                                    {item.images && item.images.length > 0 && (
                                                        <div className="relative w-full h-60 overflow-hidden rounded-xl">
                                                            <Swiper
                                                                modules={[Pagination]}
                                                                slidesPerView={1}
                                                                spaceBetween={16}
                                                                loop={false}
                                                                autoplay={false}
                                                                pagination={true}
                                                                className="h-full w-full"
                                                            >
                                                                {item.images.map((img, imgIdx) => (
                                                                    <SwiperSlide key={String(imgIdx) + img}>
                                                                        <div className="group relative rounded-2xl overflow-hidden shadow-md h-full w-full">
                                                                            <Image
                                                                                src={img}
                                                                                alt={t(item.titleKey)}
                                                                                fill
                                                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                                                priority={idx === 0 && imgIdx === 0}
                                                                            />
                                                                        </div>
                                                                    </SwiperSlide>
                                                                ))}
                                                            </Swiper>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </ScrollStack>
                </div>
            </div>
        </section>
    );
}
