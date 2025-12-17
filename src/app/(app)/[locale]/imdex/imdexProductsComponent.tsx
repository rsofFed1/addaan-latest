"use client"

import { ImdexProductsData } from "@/constant/SuppliersProductsData/ImdexSupplier"
import { CheckCircle, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react"
import { ProductDetailModel } from "../../../components/ProductDetailModel"
import { cn } from "@/lib/utils"

export default function IMDEXProducts() {
    return (
        <ImdexProductsComponent showHeader={true} />
    )
}

export const ImdexProductsComponent = ({ showHeader = true }: { showHeader: boolean }) => {

    const [expandedCategory, setExpandedCategory] = useState<string | null>("imdex")
    const t = useTranslations()
    return (
        <main className={cn("bg-black", showHeader ? "pt-[80px]  md:pt-[112px]" : "pt-0")}>
            {showHeader && (
                <section className="relative text-white py-18 px-4 md:px-16 mb-24" style={{ backgroundImage: "url('/images/artwork/artwork-7.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }}  >
                    <div className="max-w-[1400px] mx-auto px-4 z-10 relative">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center mb-6">
                                <div className="w-12 h-1 bg-[#13A7DC] m-4" />
                                <span className="text-white font-semibold uppercase tracking-wider text-sm"> {t('Products.imdex.title')} </span>
                                <div className="w-12 h-1 bg-[#13A7DC] m-4" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> {t('Products.imdex.heading')} </h2>
                            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"> {t('Products.imdex.description')} </p>
                        </div>
                    </div>
                </section>
            )}
            <section id="products" className="py-20 relative overflow-hidden" style={{ backgroundImage: "url('/images/artwork/artwork-7.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }}  >
                <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                    <div className="space-y-6 max-w-[1400px] mx-auto">
                        {ImdexProductsData.map((category) => (
                            <div
                                key={category.id}
                                className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ease-out overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row gap-6 items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                                >
                                    <div className="md:max-w-40 w-full h-20 p-2 m-0 rounded-lg flex items-center justify-center shadow">
                                        {category.image ? (<Image height={250} width={250} src={category.image} alt={category.title} className="object-contain h-full w-full" />) : (<div className="text-gray-400">No Image Available</div>)}
                                    </div>
                                    <div className="flex items-center justify-between w-full gap-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {category.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mt-1">
                                                {category.description}
                                            </p>
                                            {category.banner && (
                                                <p className="text-black text-xs font-medium mt-2">
                                                    {category.banner}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <div className="hidden lg:flex items-center space-x-2">
                                                {category.features.slice(0, 2).map((feature, index) => (
                                                    <span
                                                        key={index}
                                                        className="text-xs text-black bg-gray-100 px-2 py-1 rounded-md"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                                                <ChevronRight
                                                    className={`h-5 w-5 text-black transition-transform duration-300 ${expandedCategory === category.id ? "rotate-90" : "rotate-0"
                                                        }`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCategory === category.id ? "max-h-full opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="border-t border-gray-100">
                                        <div className="p-6 border-b border-gray-100">
                                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                                <div className="lg:col-span-2">
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {category.fullDescription}
                                                    </p>
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                                                        Key Features
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {category.features.map((feature, index) => (
                                                            <div key={index} className="flex items-center space-x-3">
                                                                <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                                                                <span className="text-gray-700 text-sm">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {category.subcategories.map((subcategory, subIndex) => (
                                            <div key={subIndex} className="p-6 border-b border-gray-400 last:border-b-0 bg-black" style={{ backgroundImage: "url('/images/artwork/artwork-6.webp')" }} >
                                                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                                                    <div className="md:max-w-40 w-full h-20 p-2 m-0 rounded-lg flex items-center justify-center shadow bg-white ">
                                                        {subcategory.image ? (<Image height={250} width={250} src={subcategory.image} alt={subcategory.name} className="object-contain h-full w-full" />) : (<div className="text-gray-400">No Image Available</div>)}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-semibold text-white mb-2">
                                                            {subcategory.name}
                                                        </h4>
                                                        <p className="text-gray-200 leading-relaxed">
                                                            {subcategory.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col md:flex-row items-center gap-4">
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                                                >
                                                    {subcategory.products.map((product, productIndex) => (
                                                        <div
                                                            key={productIndex}
                                                            className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                                                        >
                                                            <div className="flex flex-col justify-between">
                                                                <div>
                                                                    <div className="w-full h-[200px] md:h-[320px] mb-4 shadow">
                                                                        {product.image ? (<Image height={600} width={600} src={product.image} alt={product.name} className="object-cover h-full w-full" />) : (<div className="text-gray-400">No Image Available</div>)}
                                                                    </div>
                                                                    <h5 className="font-semibold text-gray-900 mb-2">
                                                                        {product.name}
                                                                    </h5>
                                                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                                                        {product.description}
                                                                    </p>
                                                                </div>
                                                                <div className="mt-3 pt-3 border-t border-gray-100">
                                                                    <ProductDetailModel product={product} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
