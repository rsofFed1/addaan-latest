"use client";

import React from 'react'
import AnimatedSection from "@/components/ui/animated-section"
import ParallaxElement from "@/components/ui/parallax-element"
import Link from 'next/link'
import { RequestQuoteModel } from './RequestQuoteModel'
import { Params } from "@/types/locale"
import { useTranslations } from 'next-intl'
import { useParams } from "next/navigation"

interface CallToActionProps {
    title?: string
    description?: string
    showExploreButton?: boolean
    useAnimation?: boolean
    useBlackBg?: boolean
}

function CallToAction({
    title,
    description,
    showExploreButton = true,
    useAnimation = true,
    useBlackBg = true
}: CallToActionProps) {
    const t = useTranslations('callToAction');
    const { locale } = useParams<Params>();

    const content = (
        <div
            className={`relative ${useBlackBg ? 'bg-black border border-mining-blue/20 p-8 rounded-2xl ' : 'bg-transparent border-none p-0 '
                } backdrop-blur-md rounded-2xlshadow-lg overflow-hidden`}
        >
            {useBlackBg && (
                <ParallaxElement speed={0.1} className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="w-full h-full bg-gradient-to-r from-mining-blue/5 via-transparent to-mining-light-blue/5"></div>
                </ParallaxElement>
            )}

            <div className="relative z-10 text-center">
                <h3 className={`text-2xl font-bold mb-3 ${useBlackBg ? 'text-white' : 'text-white'}`}>
                    {title || t('title')}
                </h3>
                <p className={`${useBlackBg ? 'text-white mb-6' : 'text-white'}`}>
                    {description || t('description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {/* Contact Button */}
                    <Link
                        href={`/${locale}/contact`}
                        className="bg-mining-blue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-mining-light-blue hover:scale-105 flex-1 sm:flex-none"
                    >
                        {t('buttons.contact')}
                    </Link>

                    {/* Explore Button (Optional) */}
                    {showExploreButton && (
                        <Link
                            href={`/${locale}/products`}
                            className="bg-white shadow-sm border border-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-mining-blue/5 hover:scale-105 flex-1 sm:flex-none"
                        >
                            {t('buttons.explore')}
                        </Link>
                    )}

                    {/* Request Quote Button */}
                    <button className="bg-mining-gray text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-mining-gray/80 hover:scale-105 flex-1 sm:flex-none">
                        <RequestQuoteModel
                            trigger={<div>{t('buttons.quote')}</div>}
                            title={t('buttons.quote')}
                        />
                    </button>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {useAnimation ? (
                <AnimatedSection animation="fadeInUp" delay={200}>
                    {content}
                </AnimatedSection>
            ) : (
                content
            )}
        </div>
    )
}

export default CallToAction
