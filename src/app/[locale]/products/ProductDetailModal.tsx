'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, ChevronRight } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProductDetailModalProps = {
    product: {
        name: string;
        description: string;
        image: string;
        link?: string;
    }
}

export function ProductDetailModal({ product: { name, description, image, link } }: ProductDetailModalProps) {
    const [expandedSections, setExpandedSections] = useState<string[]>([])

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        )
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button className="text-black text-sm font-medium transition-colors duration-200 flex items-center space-x-1 cursor-pointer">
                    <span>Learn More </span>
                    <ArrowRight className="h-4 w-4 text-black cursor-pointer" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                    <div className="w-full h-auto p-4 my-4 rounded-lg flex items-center justify-center">
                        <Image
                            src={image ? image : "/images/img1.jpeg"}
                            className="rounded-md mt-4 w-full max-h-[400px] object-contain shadow"
                            alt={name}
                            width={300}
                            height={300}
                        />
                    </div>
                    <DialogDescription className="leading-snug line-clamp-4">
                        {description}
                    </DialogDescription>


                    <div className="mt-8 space-y-4">
                        <div className="border border-gray-200 rounded-lg shadow-sm">
                            <button
                                onClick={() => toggleSection('core-sizes')}
                                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <h3 className="text-md font-bold text-gray-800">CORE SIZES</h3>
                                </div>
                                <ChevronRight
                                    className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${expandedSections.includes('core-sizes') ? "rotate-90" : "rotate-0"}`}
                                />
                            </button>
                            <div className={`px-6 pb-4 ${expandedSections.includes('core-sizes') ? "" : "hidden"}`}>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">N</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">N2</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">N3</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">H</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">H3</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">P</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">LTK60</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">B</span>
                                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium">BTK®</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">W/L56</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">W/L66</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">W/L76</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">BTW</span>
                                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-gray-700 text-sm font-medium">NTW</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg shadow-sm">
                            <button
                                onClick={() => toggleSection('dimensions')}
                                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <h3 className="text-md font-bold text-gray-800">DIMENSIONS</h3>
                                </div>
                                <ChevronRight
                                    className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${expandedSections.includes('dimensions') ? "rotate-90" : "rotate-0"}`}
                                />
                            </button>
                            <div className={`px-6 pb-4 ${expandedSections.includes('dimensions') ? "" : "hidden"}`}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <span className="font-semibold text-gray-700">Length</span>
                                            <span className="text-blue-600 font-bold">300 – 400mm</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <h4 className="font-semibold text-gray-700 mb-3">Control Unit</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Outer diameter</span>
                                                    <span className="font-medium">42mm</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Length</span>
                                                    <span className="font-medium">300mm</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Weight</span>
                                                    <span className="font-medium">30kg</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg shadow-sm">
                            <button
                                onClick={() => toggleSection('accuracy')}
                                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <h3 className="text-md font-bold text-gray-800">ACCURACY</h3>
                                </div>
                                <ChevronRight
                                    className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${expandedSections.includes('accuracy') ? "rotate-90" : "rotate-0"}`}
                                />
                            </button>
                            <div className={`px-6 pb-4 ${expandedSections.includes('accuracy') ? "" : "hidden"}`}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                    <div className="text-center p-4 bg-white rounded-lg border border-blue-100">
                                        <div className="text-2xl font-bold text-blue-600 mb-2">0° to ±88°</div>
                                        <div className="text-sm text-gray-600 font-medium">Dip Range</div>
                                    </div>
                                    <div className="text-center p-4 bg-white rounded-lg border border-blue-100">
                                        <div className="text-2xl font-bold text-green-600 mb-2">± 1°</div>
                                        <div className="text-sm text-gray-600 font-medium">Accuracy</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg shadow-sm">
                            <button
                                onClick={() => toggleSection('depth-rating')}
                                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <h3 className="text-md font-bold text-gray-800">DEPTH RATING</h3>
                                </div>
                                <ChevronRight
                                    className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${expandedSections.includes('depth-rating') ? "rotate-90" : "rotate-0"}`}
                                />
                            </button>
                            <div className={`px-6 pb-4 ${expandedSections.includes('depth-rating') ? "" : "hidden"}`}>
                                <div className="bg-black text-white p-4 rounded-lg text-center mt-2">
                                    <div className="text-3xl font-bold mb-1">10,000 PSI</div>
                                    <div className="text-blue-100 text-sm">Maximum Housing Pressure</div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg shadow-sm">
                            <button
                                onClick={() => toggleSection('temperature-rating')}
                                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <h3 className="text-md font-bold text-gray-800">TEMPERATURE RATING</h3>
                                </div>
                                <ChevronRight
                                    className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${expandedSections.includes('temperature-rating') ? "rotate-90" : "rotate-0"}`}
                                />
                            </button>
                            <div className={`px-6 pb-4 ${expandedSections.includes('temperature-rating') ? "" : "hidden"}`}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                    <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
                                        <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            Downhole Instrument
                                        </h4>
                                        <div className="text-center p-3 bg-white rounded border">
                                            <div className="text-md font-bold text-gray-800">-30°C to +60°C</div>
                                            <div className="text-sm text-gray-600">-22°F to 176°F</div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-100">
                                        <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            Control Unit
                                        </h4>
                                        <div className="text-center p-3 bg-white rounded border">
                                            <div className="text-md font-bold text-gray-800">-30°C to +50°C</div>
                                            <div className="text-sm text-gray-600">-22°F to 122°F</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg shadow-sm">
                            <button
                                onClick={() => toggleSection('battery')}
                                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <h3 className="text-md font-bold text-gray-800">BATTERY</h3>
                                </div>
                                <ChevronRight
                                    className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${expandedSections.includes('battery') ? "rotate-90" : "rotate-0"}`}
                                />
                            </button>
                            <div className={`px-6 pb-4 ${expandedSections.includes('battery') ? "" : "hidden"}`}>
                                <div className="mb-4 p-4 bg-white rounded-lg border border-green-100 mt-2">
                                    <p className="text-gray-700 text-sm mb-3">Non-rechargeable lithium battery pack. Approximate battery life for downhole instrument:</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="text-2xl font-bold text-blue-600 mb-1">2 Years</div>
                                        <div className="text-sm text-gray-600 font-medium">Infrequent Use</div>
                                    </div>
                                    <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="text-2xl font-bold text-green-600 mb-1">12 Months</div>
                                        <div className="text-sm text-gray-600 font-medium">Normal Use</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <Link href={link || '#'} target="_blank">
                        <Button className="bg-black text-white px-4 py-2 rounded-md hover:bg-black/90 transition-colors">
                            More Details
                        </Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
