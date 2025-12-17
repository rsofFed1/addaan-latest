"use client"

import CallToAction from "@/components/CallToAction"
import { useTranslations } from "next-intl"
import { AITCProductsComponent } from "../aitc/aitcProductsComponent"
import { DescoProductsComponent } from "../desco/descoProductsComponent"
import { DrillingToolsProductsComponent } from "../drillingTools/drillingToolsComponent"
import { ImdexProductsComponent } from "../imdex/imdexProductsComponent"

export default function Products() {
    const t = useTranslations()
    return (
        <>
            <main className="bg-black pt-[80px] md:pt-[112px]">
                <section className="relative text-white py-18 px-4 md:px-16 mb-24" style={{ backgroundImage: "url('/images/artwork/artwork-7.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }}  >
                    <div className="max-w-[1400px] mx-auto px-4 z-10 relative">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center mb-6">
                                <div className="w-12 h-1 bg-[#13A7DC] m-4" />
                                <span className="text-white font-semibold uppercase tracking-wider text-sm"> {t('Products.header.title')} </span>
                                <div className="w-12 h-1 bg-[#13A7DC] m-4" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> {t('Products.header.heading')} </h2>
                            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"> {t('Products.header.description')} </p>
                        </div>
                    </div>
                </section>
                <section id="products" className="py-20 relative overflow-hidden" style={{ backgroundImage: "url('/images/artwork/artwork-7.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }}  >
                    <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                        <ImdexProductsComponent showHeader={false} />
                        <DescoProductsComponent showHeader={false} />
                        <DrillingToolsProductsComponent showHeader={false}/>
                        <AITCProductsComponent showHeader={false} />
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-black rounded-4xl transform rotate-2 scale-105 opacity-20 animate-gradient-xy" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black  rounded-4xl transform -rotate-1 scale-105 opacity-10 animate-gradient-xy delay-1000" />
                            <div className="mt-20"> <CallToAction /> </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
