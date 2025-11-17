"use client"
import { cn } from '@/lib/utils';
import { Params } from '@/types/locale';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Navigation, Thumbs } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSlider = () => {
    const t = useTranslations('HeroSlider');
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);
    const [isContentHovered, setIsContentHovered] = useState(false);
    const progressInterval = useRef<NodeJS.Timeout | null>(null);
    const mainSwiperRef = useRef<SwiperRef>(null);
    const progressStartTime = useRef(0);
    const pausedProgress = useRef(0);
    const progressDuration = 5000;
    const { locale } = useParams<Params>();
    const isRTL = locale === 'ar';

    const slides = [
        {
            id: 1,
            image: '/images/IMDEX-2.webp',
            logos: '/images/partnersLogo/IMDEXLogo-1.webp',
            subLogos: '/images/partnersLogo/subLogos.webp',
            title: t('slides.0.title'),
            titleNextLine: t('slides.0.titleNextLine'),
            description: t('slides.0.description'),
            buttonText: t('slides.0.buttonText'),
            thumbTitle: t('slides.0.thumbTitle')
        },
        {
            id: 2,
            image: '/images/AITC.webp',
            logos: '/images/brandLogo/Adaan-short-Logo.webp',
            title: t('slides.1.title'),
            titleNextLine: t('slides.1.titleNextLine'),
            description: t('slides.1.description'),
            buttonText: t('slides.1.buttonText'),
            thumbTitle: t('slides.1.thumbTitle')
        },
        {
            id: 3,
            image: '/images/products/DESCO/2.webp',
            logos: '/images/partnersLogo/DescoLogo.webp',
            title: t('slides.2.title'),
            titleNextLine: t('slides.2.titleNextLine'),
            description: t('slides.2.description'),
            buttonText: t('slides.2.buttonText'),
            thumbTitle: t('slides.2.thumbTitle')
        },
    ];

    useEffect(() => {
        if (progressInterval.current) {
            clearInterval(progressInterval.current);
        }

        if (progress === 0) {
            progressStartTime.current = Date.now();
        }

        const updateProgress = () => {
            if (hoveredThumb === null && !isContentHovered) {
                const elapsed = Date.now() - progressStartTime.current;
                const newProgress = Math.min((elapsed / progressDuration) * 100, 100);

                setProgress(newProgress);

                if (newProgress >= 100) {
                    if (progressInterval.current) {
                        clearInterval(progressInterval.current);
                    }
                    if (mainSwiperRef.current?.swiper) {
                        mainSwiperRef.current.swiper.slideNext();
                    }
                }
            }
        };

        let currentInterval: NodeJS.Timeout | null = null;

        if (hoveredThumb === null && !isContentHovered) {
            currentInterval = setInterval(updateProgress, 50);
            progressInterval.current = currentInterval;
        }

        return () => {
            if (currentInterval) {
                clearInterval(currentInterval);
            }
        };
    }, [activeIndex, hoveredThumb, isContentHovered, progress]);

    const handleContentHover = () => {
        setIsContentHovered(true);
        pausedProgress.current = progress;
        if (mainSwiperRef.current?.swiper) {
            mainSwiperRef.current.swiper.autoplay.stop();
        }
    };

    const handleContentLeave = () => {
        setIsContentHovered(false);
        if (mainSwiperRef.current?.swiper && hoveredThumb === null) {
            mainSwiperRef.current.swiper.autoplay.start();
            progressStartTime.current = Date.now() - (pausedProgress.current / 100) * progressDuration;
        }
    };

    const handleThumbHover = (index: number) => {
        setHoveredThumb(index);
        pausedProgress.current = progress;
        if (mainSwiperRef.current?.swiper) {
            mainSwiperRef.current.swiper.autoplay.stop();
        }
    };

    const handleThumbLeave = () => {
        setHoveredThumb(null);
        if (mainSwiperRef.current?.swiper && !isContentHovered) {
            mainSwiperRef.current.swiper.autoplay.start();
            progressStartTime.current = Date.now() - (pausedProgress.current / 100) * progressDuration;
        }
    };

    const handleThumbClick = (index: number) => {
        if (mainSwiperRef.current?.swiper) {
            mainSwiperRef.current.swiper.slideToLoop(index);
        }
    };

    return (
        <>
            <div className="h-screen w-full overflow-hidden relative">
                <Swiper
                    ref={mainSwiperRef}
                    modules={[Navigation, Thumbs, Autoplay, EffectFade]}
                    effect="fade"
                    speed={1000}
                    loop={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                        waitForTransition: false
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex);
                        setProgress(0);
                    }}
                    className="h-full w-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id} className="relative h-full w-full px-4 md:px-20 ">
                            <div className="absolute inset-0">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                <div className={cn('absolute inset-0 from-black/70 via-black/50 to-black/20', isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r")}></div>
                            </div>
                            <div
                                className="absolute top-30 z-10 flex flex-col justify-evenly gap-2 items-start text-white max-w-[1250px]"
                                onMouseEnter={handleContentHover}
                                onMouseLeave={handleContentLeave}
                            >
                                <AnimatePresence mode="wait">
                                    {activeIndex === index && (
                                        <>
                                            <motion.div
                                                key={`logos-${slide.id}`}
                                                initial="hidden"
                                                animate="visible"
                                                variants={{
                                                    hidden: { opacity: 0, y: 30 },
                                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                                }}
                                                className='flex items-center gap-4 mb-10'
                                            >
                                                {slide.logos && (
                                                    <div>
                                                        <Image
                                                            height={100}
                                                            width={200}
                                                            src={slide.logos}
                                                            alt={slide.title}
                                                            className='object-contain h-[70px] w-full py-4 '
                                                        />
                                                    </div>
                                                )}

                                                {slide.subLogos && (
                                                    <div>
                                                        <Image
                                                            height={150}
                                                            width={300}
                                                            src={slide.subLogos}
                                                            alt={slide.title}
                                                            className='object-contain drop-shadow-lg border-l-2 border-gray-400 pl-4'
                                                        />
                                                    </div>
                                                )}
                                            </motion.div>
                                            <motion.h2
                                                key={`title-${slide.id}`}
                                                initial="hidden"
                                                animate="visible"
                                                variants={{
                                                    hidden: { opacity: 0, y: 30 },
                                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                                }}
                                                className="text-3xl md:text-[48px] font-bold mb-4 md:leading-18 md:tracking-wide"
                                            >
                                                {slide.title} <br />
                                                <motion.div
                                                    key={`title-${slide.id}`}
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={{
                                                        hidden: { opacity: 0, y: 30 },
                                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                                    }}
                                                    className='text-[#60ccf3]'>
                                                    {slide.titleNextLine}
                                                </motion.div>
                                            </motion.h2>
                                            <motion.div
                                                key={`underline-${slide.id}`}
                                                initial="hidden"
                                                animate="visible"
                                                variants={{
                                                    hidden: { opacity: 0, width: 0 },
                                                    visible: { opacity: 1, width: '60px', transition: { duration: 0.8, ease: "easeOut" } }
                                                }}
                                                className="h-1 w-[60px] bg-[#60ccf3] mb-4"
                                            >
                                            </motion.div>
                                            <motion.p
                                                key={`description-${slide.id}`}
                                                initial="hidden"
                                                animate="visible"
                                                variants={{
                                                    hidden: { opacity: 0, y: 30 },
                                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                                }}
                                                className="text-3xl md:text-4xl font-medium mb-4 md:max-w-[600px] tracking-wide"
                                            >
                                                {slide.description}
                                            </motion.p>
                                            <motion.a
                                                key={`btn-${slide.id}`}
                                                initial="hidden"
                                                animate="visible"
                                                variants={{
                                                    hidden: { opacity: 0, y: 30 },
                                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                                }}
                                                transition={{ delay: 0.4 }}
                                                href="#"
                                                className="py-4"
                                            >
                                                <span className='text-2xl'>
                                                    {slide.buttonText}
                                                </span>
                                                <motion.div
                                                    className="relative w-8 h-8 flex items-center justify-center overflow-hidden"
                                                    initial={{ width: 0 }}
                                                    whileHover={{ width: 32 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <motion.svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="absolute"
                                                        initial={{ x: 24 }}
                                                        whileHover={{ x: 0 }}
                                                        transition={{ duration: 0.3, delay: 0.1 }}
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                                                            fill="currentColor"
                                                        />
                                                    </motion.svg>
                                                </motion.div>
                                            </motion.a>
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-7xl px-4">
                    <div className="flex justify-center space-x-3">
                        {slides.map((slide, index) => (
                            <motion.div
                                key={slide.id}
                                className={`relative cursor-pointer ${index === activeIndex ? 'md:flex-1 flex-[4]' : 'flex-1'}`}
                                onMouseEnter={() => handleThumbHover(index)}
                                onMouseLeave={handleThumbLeave}
                                onClick={() => handleThumbClick(index)}
                            >
                                {hoveredThumb === index && index !== activeIndex && (
                                    <motion.div
                                        className="absolute bottom-full left-0 right-0 mb-2 z-10 hidden md:block"
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        style={{ pointerEvents: 'none' }}
                                    >
                                        <div className="relative w-full h-32 rounded-lg overflow-hidden shadow-lg">
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                <div className="flex flex-col items-center relative">
                                    <p className="text-xs text-center text-gray-200 mb-2 font-medium hidden md:block">
                                        {slide.thumbTitle.toUpperCase()}
                                    </p>

                                    <motion.div
                                        className="w-full bg-gray-600 relative overflow-hidden rounded-full h-1"
                                        initial={false}
                                        animate={{
                                            height: 4,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                            duration: 0.5
                                        }}
                                    >
                                        {index === activeIndex && (
                                            <motion.div
                                                className="absolute top-0 left-0 h-full rounded-full"
                                                style={{
                                                    background: "linear-gradient(90deg, #2563eb 0%, #38bdf8 50%, #fbbf24 100%)"
                                                }}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                transition={{
                                                    type: "tween",
                                                    ease: "linear",
                                                    duration: 0.05
                                                }}
                                            />
                                        )}

                                        {index !== activeIndex && (
                                            <div className="absolute top-0 left-0 w-full h-full bg-gray-500/40"></div>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSlider;