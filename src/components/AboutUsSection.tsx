"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { useParams } from "next/navigation";
import { Params } from "@/types/locale";

const AboutUsSection = () => {
    const t = useTranslations();
    const {locale} = useParams<Params>()

    return (
        <section className="relative h-[200px] lg:h-[250px] overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="https://images.pexels.com/photos/4484078/pexels-photo-4484078.webp"
                    alt={t('AboutUs.image.alt')}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                    <Link
                        href={`/${locale}/aboutUs`}
                        className="group inline-block"
                    >
                        <div className="space-y-6">
                            <h3 className="text-4xl lg:text-5xl font-light text-white leading-tight">
                                {t('AboutUs.heading')}
                            </h3>
                            <div className="flex items-center gap-3 text-white group-hover:text-blue-300 transition-colors">
                                <div className="flex items-center gap-2">
                                    <motion.div
                                        className="flex items-center justify-center"
                                        whileHover={{ x: [0, 6, 0] }}
                                        transition={{ duration: 0.6, repeat: Infinity }}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white group-hover:text-blue-300 transition-colors mr-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </motion.div>

                                    <span className="text-lg font-medium">{t('AboutUs.learnMore')}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
