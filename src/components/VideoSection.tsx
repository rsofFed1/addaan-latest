"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { BackgroundAnimations } from "./animations/animations";
import { useTranslations } from 'next-intl';

const VideoSection = () => {
    const t = useTranslations();
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const videoScale = useTransform(scrollYProgress, [0, 0.6], [0.5, 1.0]);
    const videoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <section ref={containerRef} className="py-16 md:py-24 bg-[#222222] overflow-hidden relative">
            <BackgroundAnimations />
            <div className="max-w-[1260px] mx-auto px-6">
                {/* Heading */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
                    <div className="">
                        <h2 className="uppercase tracking-wider text-white text-sm mb-4">
                            {t('VideoSection.heading.label')}
                        </h2>
                        <p className="text-[28px] md:text-[40px] font-normal text-white max-w-[620px] mb-4 md:mb-0">
                            {t('VideoSection.heading.title')}
                        </p>
                    </div>

                    <div className="text-blue-400 flex items-center gap-3 text-sm font-medium group ">
                        {t('VideoSection.exploreButton')}
                        <Link href={"#"} className="">
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
                                        className="arrow-icon"
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
            </div>
            <div className="relative">
                <motion.div
                    style={{ scale: videoScale, opacity: videoOpacity }}
                    className="relative rounded-t-[20px] rounded-l-[20px] overflow-hidden shadow-2xl"
                >
                    <div className="relative aspect-video bg-gray-900 h-full md:h-[650px] w-full">
                        <video
                            ref={videoRef}
                            className="w-full h-full md:h-auto object-cover"
                            muted
                            loop
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                        >
                            <source src="/videos/video1.mp4" type="video/mp4" />
                            {t('VideoSection.playbackError')}
                        </video>

                        {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    onClick={handlePlayPause}
                                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group cursor-pointer hover:bg-white/30 transition-all"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 25 28.12"
                                        className="w-8 h-8 text-white ml-1"
                                        fill="currentColor"
                                    >
                                        <path d="m23.53,13.69c.29.17.29.58,0,.74L1.92,26.81c-.31.18-.67-.05-.67-.37V1.68c0-.32.36-.55.67-.37l21.61,12.38Z" />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
