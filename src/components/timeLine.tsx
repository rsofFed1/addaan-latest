"use client";

import { timeLineData } from "@/constant/TimeLineData";
import { cn } from "@/lib/utils";
import { Params } from "@/types/locale";
import { motion } from "motion/react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ScrollStack from "./scroll-stack";

export default function TimeLine() {
    const t = useTranslations();
    const { locale } = useParams<Params>();
    const isRTL = locale === 'ar';

    return (
        <section className="bg-[#202021] relative">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url('/images/artwork/artwork-1.jpg')" }}
            >
            </div>
            {/* <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] bg-grid-pattern"></div> */}
            {/* <BackgroundAnimations /> */}
            <div className="min-h-[300vh] max-w-[1250px] mx-auto">
                <div className="container mx-auto px-4 py-20">
                    <div className="flex flex-col md:flex-row justify-between items-end px-0 pb-10 md:pb-16 relative">
                        <div>
                            <p className="uppercase tracking-widest text-white text-sm mb-5">{t('TimeLine.heading.label')}</p>
                            <h2 className="text-[28px] md:text-[40px] font-normal text-white w-full mb-4">{t('TimeLine.heading.title')}</h2>
                            <p className="text-white text-lg font-light mb-[22px] w-full">{t('TimeLine.heading.description')}</p>
                        </div>
                        <div className="text-white flex items-center gap-3 text-sm font-medium group mt-5 md:mt-0">
                            {t('TimeLine.readAllNews')}
                            <Link href={`/${locale}/achievements`} className="">
                                <div className="flex flex-col justify-between items-center">
                                    <motion.span
                                        className="self-end inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-full border-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            aria-hidden="true"
                                            focusable="false"
                                            className={cn("arrow-icon" , isRTL && "rotate-180")}
                                        >
                                            {" "}
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                                                fill="currentColor"
                                            />{" "}
                                        </svg>
                                    </motion.span>
                                </div>
                            </Link>
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
                                        className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl p-12 min-h-[300px] flex items-center shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden`}
                                    >
                                        <div className="relative z-10 w-full">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div className="bg-white w-fit rounded-2xl">
                                                            {item.logo && (
                                                                <div>
                                                                    <Image
                                                                        src={item.logo}
                                                                        alt={t(item.titleKey)}
                                                                        width={120}
                                                                        height={120}
                                                                        className="p-2"
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="bg-white/20 w-fit backdrop-blur-sm rounded-2xl px-3 py-1 border border-white/30">
                                                            <span className={`text-md font-bold ${item.textColor}`}> {item.date} </span>
                                                        </div>
                                                    </div>
                                                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${item.textColor} leading-tight`}>{t(item.titleKey)}</h3>
                                                    <p className={`text-lg ${item.textColor} opacity-90 leading-relaxed font-light`}>{t(item.descriptionKey)}</p>
                                                    <div className="mt-6">
                                                        <Link
                                                            href={item.href}
                                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/30 hover:gap-3"
                                                        >
                                                            {t('TimeLine.learnMore')}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                className="transform transition-transform group-hover:translate-x-1"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="hidden md:block">
                                                    {item.image && (
                                                        <div className="relative w-full h-80 overflow-hidden rounded-xl">
                                                            <Image
                                                                src={item.image}
                                                                alt={t(item.titleKey)}
                                                                fill
                                                                className="object-cover w-full h-full"
                                                            />
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
