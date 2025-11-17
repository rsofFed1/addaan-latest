"use client";

import ContactUsAITCForm from '@/components/ContactFormAITC';
import { cn } from '@/lib/utils';
import { Params } from '@/types/locale';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const AITCCoreTraysData = [
    {
        image: "/images/AITCCoreTrays/9.webp",
    },
    {
        image: "/images/AITCCoreTrays/10.webp",
    },
    {
        image: "/images/AITCCoreTrays/11.webp"
    },
    {
        image: "/images/AITCCoreTrays/9.webp",
    },
    {
        image: "/images/AITCCoreTrays/10.webp",
    },
    {
        image: "/images/AITCCoreTrays/11.webp"
    },
];

export default function AITCCoreTrays() {
    const t = useTranslations("AITCCoreTrays");
    const { locale } = useParams<Params>();
    const isRTL = locale === 'ar';

    return (
        <main className="bg-black pt-[80px] md:pt-[112px]">
            <section className="relative text-white py-18 px-4 md:px-16 mb-24" style={{ backgroundImage: "url('/images/artwork/artwork-7.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }} >
                <div className="container max-w-6xl mx-auto px-4 z-10 relative">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center mb-6">
                            <div className="w-12 h-1 bg-[#13A7DC] m-4" />
                            <span className="text-white font-semibold uppercase tracking-wider text-sm"> {t('heading.label')} </span>
                            <div className="w-12 h-1 bg-[#13A7DC] m-4" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> {t('hero.title')} </h2>
                        <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"> {t('hero.subtitle')} </p>
                        <div className="flex flex-wrap justify-center gap-2 mt-8">
                            <span className="bg-[#0598D8] bg-opacity-50 px-3 py-1 rounded-full text-sm">{t('hero.tagVision')}</span>
                            <span className="bg-[#0598D8] bg-opacity-50 px-3 py-1 rounded-full text-sm">{t('hero.tagLocal')}</span>
                            <span className="bg-[#0598D8] bg-opacity-50 px-3 py-1 rounded-full text-sm">{t('hero.tagTested')}</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/artwork/artwork-6.webp')" }} >
                </div>
                <section className="max-w-[1400px] mx-auto py-18 my-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
                            <div>
                                <h2 className="text-3xl text-white font-bold mb-12">{t('intro.heading')}</h2>
                                <p className="mb-4 text-xl text-white">{t('intro.paragraph1')}</p>
                                <p className="mb-12 text-xl text-white">{t('intro.paragraph2')}</p>
                                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-black">
                                    <p className="text-md text-black">
                                        {t('intro.industryFirst')}
                                    </p>
                                </div>
                            </div>
                            <div className="relative max-h-[450px] h-full">
                                <Swiper
                                    modules={[Pagination]}
                                    slidesPerView={1}
                                    spaceBetween={16}
                                    loop={false}
                                    autoplay={false}
                                    pagination={true}
                                    className="h-full w-full"
                                >
                                    {AITCCoreTraysData.map((item, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div
                                                className="group relative rounded-2xl overflow-hidden shadow-md h-[300px] md:h-full w-full"
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt="AITC Core Trays"
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    priority={idx === 0}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="py-18 relative" style={{ backgroundImage: "url('/images/artwork/artwork-6.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }} >
                <div className="max-w-[1400px] mx-auto px-4 z-10 py-8 relative">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('features.heading')}</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
                            <div className="max-h-[300px] h-full w-full rounded-lg shadow bg-white mb-4">
                                <Image height={300} width={300}
                                    src="/images/AITCCoreTrays/10.webp"
                                    alt={t('features.uv.title')}
                                    className="object-cover h-full w-full rounded-2xl"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('features.uv.title')}</h3>
                            <p className="text-black">{t('features.uv.text')}</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
                            <div className="max-h-[300px] h-full w-full rounded-lg shadow bg-white mb-4">
                                <Image height={300} width={300}
                                    src="/images/AITCCoreTrays/10.webp"
                                    alt={t('features.uv.title')}
                                    className="object-cover h-full w-full rounded-2xl"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('features.complete.title')}</h3>
                            <p className="text-black">{t('features.complete.text')}</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500">
                            <div className="max-h-[300px] h-full w-full rounded-lg shadow bg-white mb-4">
                                <Image height={300} width={300}
                                    src="/images/AITCCoreTrays/11.webp"
                                    alt={t('features.uv.title')}
                                    className="object-cover h-full w-full rounded-2xl"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('features.support.title')}</h3>
                            <p className="text-black">{t('features.support.text')}</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-yellow-500">
                            <div className="max-h-[300px] h-full w-full rounded-lg shadow bg-white mb-4">
                                <Image height={300} width={300}
                                    src="/images/AITCCoreTrays/9.webp"
                                    alt={t('features.uv.title')}
                                    className="object-cover h-full w-full rounded-2xl"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('features.safety.title')}</h3>
                            <p className="text-black">{t('features.safety.text')}</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500">
                            <div className="max-h-[300px] h-full w-full rounded-lg shadow bg-white mb-4">
                                <Image height={300} width={300}
                                    src="/images/AITCCoreTrays/10.webp"
                                    alt={t('features.uv.title')}
                                    className="object-cover h-full w-full rounded-2xl"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('features.stackable.title')}</h3>
                            <p className="text-black">{t('features.stackable.text')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-18 my-24 rounded-2xl"
                style={{ backgroundImage: "url('/images/artwork/artwork-7.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }}
            >
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl text-white font-bold mb-6">{t('sizes.heading')}</h2>
                            <div className="space-y-4">
                                {['pq', 'hq', 'nq'].map((key, index) => (
                                    <div key={index} className={cn("flex items-center p-4 bg-gray-50 rounded-lg border-black gap-6", isRTL ? "border-r-4" : "border-l-4")}>
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-black font-semibold">{t(`sizes.badge.${key}`)}</span>
                                        </div>
                                        <span className="font-medium">{t(`sizes.list.${key}`)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl text-white font-bold mb-6">{t('accessories.heading')}</h2>
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">{t('accessories.covers.title')}</h3>
                                    <ul className="list-disc p-5 text-black space-y-1">
                                        {t('accessories.covers.items').split('\n').map((it: string, i: number) => (
                                            <li key={i}>{it}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">{t('accessories.runMarkers.title')}</h3>
                                    <ul className="list-disc pl-5 text-black space-y-1">
                                        {t('accessories.runMarkers.items').split('\n').map((it: string, i: number) => (
                                            <li key={i}>{it}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">{t('accessories.rcChip.title')}</h3>
                                    <ul className="list-disc pl-5 text-black space-y-1">
                                        {t('accessories.rcChip.items').split('\n').map((it: string, i: number) => (
                                            <li key={i}>{it}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-24 py-12 bg-[#202021] text-white relative">
                <div className="max-w-[1400px] mx-auto px-4 z-10 relative">
                    <h2 className="text-3xl font-bold text-center mb-12">{t('why.heading')}</h2>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {t('why.list').split('\n').map((reason: string, index: number) => (
                                <div key={index} className="flex items-start">
                                    <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-lg px-2">{reason}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 bg-gradient-to-br from-black/60 to-black p-4 md:p-8 rounded-xl text-center z-10 relative shadow-2xl">
                            <h2 className="text-4xl font-bold text-center mb-10 text-white">{t('location.heading')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Head Office Section */}
                                <div className="bg-gradient-to-br from-white/10 to-white/10 p-6 rounded-xl text-left border border-gray-700 hover:border-gray-500 transition-all duration-300">
                                <div className='flex flex-col justify-between h-full'>
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <div className="bg-black p-2 rounded-lg mr-3">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white">{t('location.office')}</h3>
                                        </div>
                                        <div className="space-y-3 mb-4">
                                            <div className="flex items-start">
                                                <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <div>
                                                    <p className="text-lg text-white font-medium mb-1">Addaan International Trading Company (AITC)</p>
                                                    <p className="text-gray-300">Al Massa Center, Al Marwa District,</p>
                                                    <p className="text-gray-300">2nd Floor, Office No. 103,</p>
                                                    <p className="text-gray-300">Jeddah 23545, Saudi Arabia</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <div>
                                                    <p className="text-gray-300"><span className="font-medium text-white">Email:</span> info@addaaninternational.com</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <div>
                                                    <p className="text-gray-300"><span className="font-medium text-white">Phone:</span> +966 12 661 0243</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <div>
                                                    <p className="text-gray-300"><span className="font-medium text-white">Office Hours:</span></p>
                                                    <p className="text-gray-300">Sunday – Thursday: 9:00 AM – 6:00 PM</p>
                                                    <p className="text-gray-300">Friday – Saturday: Closed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="https://maps.app.goo.gl/dH4u47x2Tag6NUwEA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-black to-black text-white rounded-lg hover:from-black/80 hover:to-black/80 transition-all duration-300 mt-4 font-medium shadow-lg hover:shadow-xl"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {t('location.viewMap')}
                                    </a>
                                </div>
                                </div>

                                {/* Warehouse Section */}
                                <div className="bg-gradient-to-br from-white/10 to-white/10 p-6 rounded-xl text-left border border-gray-700 hover:border-gray-500 transition-all duration-300">
                                    <div className='flex flex-col justify-between h-full'>
                                        <div>
                                            <div className="flex items-center mb-4">
                                                <div className="bg-black p-2 rounded-lg mr-3">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9h18M9 21V9" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-semibold text-white">Warehouse</h3>
                                            </div>

                                            <div className="space-y-3 mb-4">
                                                <div className="flex items-start">
                                                    <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <div>
                                                        <p className="text-lg text-white font-medium mb-1">Addaan International Trading Company - Warehouse</p>
                                                        <p className="text-gray-300">2966 Al Zahed, Ad Dahiah,</p>
                                                        <p className="text-gray-300">Jeddah 22529, Saudi Arabia</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <div>
                                                    <p className="text-gray-300"><span className="font-medium text-white">Warehouse Timing:</span></p>
                                                    <p className="text-gray-300">Sunday – Thursday: 8:30 AM – 5:30 PM </p>
                                                    <p className="text-gray-300">Warehouse will be closed after working hours</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            href="https://maps.app.goo.gl/dH4u47x2Tag6NUwEA"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-black to-black text-white rounded-lg hover:from-black/80 hover:to-black/80 transition-all duration-300 mt-4 font-medium shadow-lg hover:shadow-xl"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {t('location.viewMap')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <ContactUsAITCForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
