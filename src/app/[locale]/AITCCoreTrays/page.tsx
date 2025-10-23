"use client";

import { cn } from '@/lib/utils';
import { Params } from '@/types/locale';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import "swiper/css"
import "swiper/css/pagination"
import { useParams } from 'next/navigation';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const AITCCoreTraysData = [
  {
    image: "/images/AITCCoreTrays/1.jpg",
  },
  {
    image: "/images/AITCCoreTrays/2.jpg",
  },
  {
    image: "/images/AITCCoreTrays/3.jpg",
  },
  {
    image: "/images/AITCCoreTrays/4.jpg"
  },
  {
    image: "/images/AITCCoreTrays/5.jpg",
  },
  {
    image: "/images/AITCCoreTrays/6.jpg",
  },
  {
    image: "/images/AITCCoreTrays/7.jpg",
  },
  {
    image: "/images/AITCCoreTrays/8.jpg"
  },
  {
    image: "/images/AITCCoreTrays/9.jpg",
  },
  {
    image: "/images/AITCCoreTrays/10.jpg",
  },
  {
    image: "/images/AITCCoreTrays/11.jpg"
  },
];

export default function AITCCoreTrays() {
    const t = useTranslations("AITCCoreTrays");
    const { locale } = useParams<Params>();
    const isRTL = locale === 'ar';

    return (
        <main className="bg-black pt-[80px] md:pt-[112px]">
            <section className="relative text-white py-18 px-4 md:px-16 mb-24" style={{ backgroundImage: "url('/images/artwork/artwork-7.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }} >
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
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/artwork/artwork-6.jpg')" }} >
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
            <section className="py-18 relative" style={{ backgroundImage: "url('/images/artwork/artwork-6.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }} >
                <div className="max-w-[1400px] mx-auto px-4 z-10 py-8 relative">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('features.heading')}</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
                            <div className="max-h-[300px] h-full w-full rounded-lg shadow bg-white mb-4">
                                <Image height={300} width={300}
                                    src="/images/AITCCoreTrays/1.jpg"
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
                                    src="/images/AITCCoreTrays/10.jpg"
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
                                    src="/images/AITCCoreTrays/6.jpg"
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
                                    src="/images/AITCCoreTrays/8.jpg"
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
                                    src="/images/AITCCoreTrays/5.jpg"
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
                style={{ backgroundImage: "url('/images/artwork/artwork-7.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }}
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

                        <div className="mt-12 bg-black p-6 rounded-lg text-center z-10 relative">
                            <h3 className="text-xl font-semibold mb-2">{t('vision.heading')}</h3>
                            <p>{t('vision.paragraph')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
