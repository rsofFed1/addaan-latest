"use client"

import { Box, CheckCircle, ChevronRight, Drill, Globe, Package, Shield, Star, Users, Zap } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { ProductDetailModal } from "./ProductDetailModal"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Products() {
    const [expandedCategory, setExpandedCategory] = useState<string | null>("imdex")
    const t = useTranslations()

    const productCategories = [
        {
            id: "imdex",
            title: "IMDEX",
            image: "/images/partnersLogo/IMDEXLogo.png",
            icon: Globe,
            description: "Innovative Mining Technology Company",
            banner: "Empowering Mining with Real-Time Data and Advanced Drilling Technologies",
            fullDescription: "IMDEX is a global mining technology company headquartered in Perth. With a focus on drilling optimization, rock knowledge, and digital transformation, IMDEX provides advanced drilling fluids, state-of-the-art downhole instrumentation, and robust data management software.",
            features: ["Real-time Data Analytics", "Advanced Drilling Fluids", "Digital Transformation", "Global Support"],
            subcategories: [
                {
                    image: "/images/partnersLogo/REFLEXLogo.png",
                    name: "REFLEX – Downhole Survey & Structural Geology Tools",
                    description: "Reflex provides high-performance tools for downhole survey, orientation, and structural geology, enabling accurate borehole mapping and geotechnical insight in real time.",
                    products: [
                        { name: "ACT III", image: "/images/products/REFLEX/1.png", description: "REFLEX ACT III™ is a digital core orientation system that records the orientation of the core sample and other key data in core drilling operations. It has a patented rapid descent system that reduces time to complete core recovery. It delivers exceptional accuracy, while being easy to use and reliable in harsh field conditions and is the preferred core orientation system for drillers and geologists worldwide. Its high level of data accuracy leads to better understanding of the geological structure, ultimately resulting in enhanced drill program management and geotechnical planning.", link: "https://www.imdex.com/rock-knowledge/structural-geology/actx" },
                        { name: "ACT X", image: "/images/products/REFLEX/2.png", description: "ACTx is a groundbreaking, digital core orientation system that enhances safety, accuracy, and time to orient core at the drill rig site.", link: "https://www.imdex.com/rock-knowledge/structural-geology/logrx" },
                        { name: "EZ-Trac", image: "/images/products/REFLEX/3.jpg", description: "The REFLEX EZ-TRAC™ is a digital downhole survey instrument that is multifunctional, easy to operate, highly accurate, robust and reliable. The REFLEX EZ-TRAC™ is able to transfer vital downhole data in real-time via our new android based REFLEX EZ-TRAC™ App available on a REFLEX supplied tablet. Built using our industry preferred user interface, the user friendly REFLEX EZ-TRAC™ App on handheld device will operate the tool, execute surveys and sync the data to the IMDEXHUBIQ™ at the press of a button. Results are automatically calculated and displayed on the handheld device, eliminating the risk of human error, and survey data uploaded into IMDEXHUB-IQ™ can be accessed by geologists anywhere, any time", link: "https://www.imdex.com/rock-knowledge/structural-geology/logrx" },
                        { name: "Sprint IQ", image: "/images/products/REFLEX/4.jpg", description: "The fastest, most accurate north seeking gyro is here. The REFLEX GYRO SPRINT-IQ™ is available in continuous, single shot, multi shot and over shot modes and provides highly accurate survey data at speeds of up to 3x faster than currently used gyros.", link: "https://www.imdex.com/rock-knowledge/structural-geology/actx" },
                        { name: "LogrX", image: "/images/products/REFLEX/5.png", description: "LOGRx is an innovative, handheld digital device that significantly enhances both the speed and accuracy of capturing the orientation of structural features in diamond core.  Its ability to seamlessly transfer structural measurements digitally creates a dependable audit trail.", link: "https://www.imdex.com/rock-knowledge/structural-geology/logrx" },
                        { name: "OMNIx™38", image: "/images/products/REFLEX/6.png", description: "OMNIx38 is a premium, north seeking and all-attitude continuous gyro, delivering the highest performance accuracy ratings in downhole navigation. Advancing on the market-leading REFLEX GYRO SPRINT-IQ™, OMNIx38 further reduces uncertainties associated with survey measurements to provide geologists with critical borehole information they can trust, in a small form factor; catering to the driller and operator.", link: "https://www.imdex.com/rock-knowledge/survey/omnix38" },
                    ],
                },
                {
                    image: "/images/partnersLogo/AMCLogo.png",
                    name: "AMC – Drilling Fluids",
                    description: "AMC offers a comprehensive range of drilling fluids and additives designed to improve hole stability, reduce environmental impact, and optimize drilling performance across all ground conditions.",
                    products: [
                        { name: "AMC CR 650", image: "/images/products/AMC/1.png", description: "AMC CR 650™ is a high molecular weight, powdered polymer which has been developed to improve cuttings encapsulation as well as helping to stabilise the formation. AMC CR 650™ forms a protective polymer film on the drill pipe and bit as well as on the walls of the bore hole which helps to provide lubrication when drilling in troublesome formations. It is ideally suited for use in horizontal directional drilling, water well, mining and tunnelling applications.", link: "https://www.imdex.com/rock-knowledge/structural-geology/actx" },
                        { name: "AMC LIQUIPOL", image: "/images/products/AMC/2.png", description: "AMC LIQUI POL™ is a rapid yielding, high molecular weight polymer in liquid form that provides viscosity without the problems associated with mixing powdered polymers. AMC LIQUI POL™ will help improve core recovery, particularly in clays and shales and highly fractured formations. It provides cuttings encapsulation as well as helping to stabilise the formation.", link: "https://www.imdex.com/rock-knowledge/structural-geology/logrx" },
                        { name: "AMC BOS FIX", image: "/images/products/AMC/3.jpg", description: "AMC BOS FIX™ is designed specifically to be used in conjunction with the AMC BOS UNIT™ as a preventative maintenance system to minimize borehole torque and fluid losses, while also maximising borehole stabilisation, penetration rates, core recovery and overall productivity.", link: "https://www.imdex.com/rock-knowledge/structural-geology/actx" },
                        { name: "AMC CORE WELL", image: "/images/products/AMC/4.jpg", description: "AMC COREWELL™ is a sophisticated, multifunctional single sack system created especially for diamond coring and slim-hole drilling activities. AMC COREWELL™ provides superior core protection and side wall stabilisation. AMC COREWELL™ helps secure a native state, preserved sample allowing for more reliable core analysis data which ultimately leads to more accurate resource evaluations. AMC COREWELL™ employs physical mechanisms that entrap unconsolidated soils and cuttings to prevent dispersion.", link: "https://www.imdex.com/rock-knowledge/structural-geology/logrx" },
                        { name: "AMC FLOC DD", image: "/images/products/AMC/5.png", description: "AMC FLOC DD™ is a specially formulated flocculant designed specifically to promote settlement of fine to colloidal sized drill cuttings in non-dispersed, polymer and low-solids water based drilling fluid systems. The cationic charge found in AMC FLOC DD™ neutralises the surface charges and also attaches to particles causing them to aggregate and form flocs, the flocs then settle quickly when entering the surface pits.", link: "https://www.imdex.com/rock-knowledge/structural-geology/actx" },
                        { name: "AMC PLUG", image: "/images/products/AMC/6.png", description: "AMC PLUG™ is a polymer in granular form that absorbs up to 500 times its original volume in water. AMC PLUG™ is ideal for sealing zones of lost circulation and can also be used to reduce rod vibration in holes where lost returns are a problem.", link: "https://www.imdex.com/rock-knowledge/structural-geology/logrx" },
                        { name: "AMC WATER CONDITIONER", image: "/images/products/AMC/2.png", description: "AMC WATER CONDITIONER™ is a blend of water treating agents used for the treatment of water containing large amounts of magnesium, calcium and other metal ions that have a detrimental effect on the yield of drilling fluid additives such as bentonite or polymers", link: "https://www.imdex.com/rock-knowledge/structural-geology/actx" },
                    ],
                },
                {
                    image: "/images/partnersLogo/DevjcoLogo.png",
                    name: "DEVICO – Borehole Survey & Rig Alignment Tools",
                    description: "Devico specializes in precision borehole surveying and rig alignment solutions, helping drillers enhance accuracy, reduce deviation, and improve operational control from the surface.",
                    products: [
                        { name: "Devi Aligner", image: "/images/products/DEVICO/1.png", description: "State-of-the-art north seeking rig alignment system, with the fastest settling time available on the market. Recording precise azimuth, inclination and roll angles, both surface and underground through advanced fiber optic gyro technology. Can you afford not to have the DeviAligner on your drill program?", link: "https://www.imdex.com/rock-knowledge/structural-geology/actx" },
                        { name: "Devi Gyro", image: "/images/products/DEVICO/2.png", description: "The DeviGyro is an advanced, miniature rate gyro survey instrument supporting high-speed, all-angle, continuous, and multi-shot borehole surveying. Designed for versatility, it is provided through a range of purpose-built running gear configurations suited to a large variety of mining and civil drilling applications.", link: "https://www.imdex.com/rock-knowledge/structural-geology/logrx" },
                        { name: "Devi Health", image: "/images/products/DEVICO/3.png", description: "DeviHealth is an innovative, portable calibration-check system specifically designed for the DeviGyro instrument.", link: "https://www.imdex.com/rock-knowledge/structural-geology/actx" },
                    ],
                },
            ],
        },
        {
            id: "desco",
            title: "DESCO",
            image: "/images/partnersLogo/DescoLogo.png",
            icon: Drill,
            description: "Precision Engineered Drill Rigs",
            banner: "Precision Engineered Drill Rigs Built to Perform in the Toughest Environments",
            fullDescription: "Desco Drilling Rigs provide reliable and advanced drilling equipment for demanding mining operations with over 30 years of industry expertise.",
            features: ["Rugged Construction", "Advanced Hydraulics", "Precision Control", "Global Service Network"],
            subcategories: [
                {
                    image: "/images/partnersLogo/DescoLogo.png",
                    name: "Drilling Rigs",
                    description: "High-performance drilling rigs designed for the most challenging mining environments.",
                    products: [
                        { name: "Surface Drilling Rigs", image: "/images/products/DESCO/1.jpg", description: "The best entry-level premium drill rig up to 150M depth for water well & geothermal. The compact size enables drillers to easily operate & manage in working place. SP3500 features a pullback capacity of 8.0 tons and the torque can be increased. SP3500 can also equip an advanced rod management system (RiHS) that ensures safer and faster operation. A radio remote control safely positions the driller away from the rig during traveling." },
                        { name: "Underground Drilling Equipment", image: "/images/products/DESCO/2.jpeg", description: "Specialized equipment for underground mining applications" },
                        { name: "Rig Accessories", image: "/images/products/DESCO/3.jpeg", description: "Comprehensive range of accessories and spare parts" },
                    ],
                },
            ],
        },
        // {
        //     id: "cr-epiroc",
        //     title: "CR POWERED BY EPIROC",
        //     image: "/images/partnersLogo/CRPoweredbyEpiroc.webp",
        //     icon: Wrench,
        //     description: "Next-Generation Mining Productivity",
        //     banner: "Delivering next-generation mining productivity with advanced lips, GET, dragline buckets, and digital solutions",
        //     fullDescription: "Cutting-edge mining solutions powered by Epiroc's global expertise and innovative technology stack.",
        //     features: ["Digital Integration", "Premium Materials", "Performance Analytics", "Technical Support"],
        //     subcategories: [
        //         {
        //             image: "/images/partnersLogo/CRPoweredbyEpiroc.webp",
        //             name: "Digital Solutions",
        //             description: "Advanced digital solutions for enhanced mining operations.",
        //             products: [
        //                 { name: "Lips & GET Systems", image: "/images/products/lips&GetSystem.jpg", description: "High-performance ground engaging tools" },
        //                 { name: "Cast Lips", image: "/images/products/DecaEdgeHeroImage.jpg", description: "Durable cast lip solutions for extreme conditions" },
        //                 { name: "Titan Software", image: "/images/products/titanSoftware.png", description: "Advanced software for operational optimization" },
        //             ],
        //         },
        //     ],
        // },
        {
            id: "drilling-tools",
            title: "DRILLING TOOLS",
            image: "/images/partnersLogo/DescoLogo.png",

            icon: Package,
            description: "Comprehensive Drilling Solutions",
            banner: "Complete range of drilling tools for all mining applications",
            fullDescription: "Professional drilling tools and accessories for all mining operations with guaranteed performance and durability.",
            features: ["Premium Quality", "Extended Durability", "Precision Engineering", "Global Certification"],
            subcategories: [
                {
                    image: "/images/partnersLogo/DescoLogo.png",
                    name: "Diamond Tools",
                    description: "High-quality diamond drilling tools for precision operations.",
                    products: [
                        { name: "Diamond Bits", image: "/images/products/DESCO/1.jpg", description: "Premium diamond bits for core drilling" },
                        { name: "Diamond Reamers", image: "/images/products/DESCO/2.jpeg", description: "Precision reaming tools for hole enlargement" },
                        { name: "Diamond Stabilizers", image: "/images/products/DESCO/3.jpeg", description: "Stabilization tools for straight hole drilling" },
                    ],
                },
                {
                    image: "/images/partnersLogo/DescoLogo.png",
                    name: "RC Tools",
                    description: "Reverse circulation tools for efficient sample collection.",
                    products: [
                        { name: "RC Bits", image: "/images/products/DESCO/4.jpeg", description: "Specialized bits for reverse circulation drilling" },
                        { name: "RC Hammers", image: "/images/products/DESCO/5.jpeg", description: "High-performance hammers for RC operations" },
                        { name: "RC Rods", image: "/images/products/DESCO/6.jpeg", description: "Durable rods for reverse circulation systems" },
                    ],
                },
            ],
        },
        {
            id: "aitc-core-trays",
            title: "AITC CORE TRAYS",
            image: "/images/brandLogo/Adaan-Logo.png",
            icon: Box,
            description: "Durable, Saudi-Made Solutions",
            banner: "Durable, Saudi-Made Solutions Engineered for Precision and Reliability",
            fullDescription: "Locally manufactured HQ, PQ, and NQ core boxes - Saudi Made excellence supporting Vision 2030 with state-of-the-art manufacturing facilities in Rabigh.",
            features: ["Saudi Made", "Vision 2030", "Premium Materials", "Custom Solutions"],
            subcategories: [
                {
                    image: "/images/brandLogo/Adaan-Logo.png",
                    name: "Core Solutions",
                    description: "Complete core handling solutions for mining operations.",
                    products: [
                        { name: "Core Boxes", image: "/images/AITCCoreTrays/9.jpg", description: "HQ, PQ, and NQ core boxes for all drilling applications" },
                        { name: "Core Covers", image: "/images/AITCCoreTrays/10.jpg", description: "Protective covers for core sample preservation" },
                        { name: "Run Markers", image: "/images/AITCCoreTrays/11.jpg", description: "Precision markers for core run identification" },
                    ],
                },
            ],
        },
    ]

    return (
        <>
            <main className="bg-black pt-[80px] md:pt-[112px]">
                <section className="relative text-white py-18 px-4 md:px-16 mb-24" style={{ backgroundImage: "url('/images/artwork/artwork-7.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }}  >
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
                <section id="products" className="py-20 relative overflow-hidden" style={{ backgroundImage: "url('/images/artwork/artwork-7.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }}  >
                    <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                        <div className="space-y-6 max-w-[1400px] mx-auto">
                            {productCategories.map((category) => (
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
                                                <div key={subIndex} className="p-6 border-b border-gray-400 last:border-b-0 bg-black" style={{ backgroundImage: "url('/images/artwork/artwork-6.jpg')" }} >
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
                                                                <div className="flex flex-col justify-between h-full">
                                                                    <div>
                                                                        <div className="w-full h-[400px] mb-4 rounded-lg flex items-center justify-center shadow ">
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
                                                                        <ProductDetailModal product={product} />
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
                        <div className="mt-20 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-black rounded-4xl transform rotate-2 scale-105 opacity-20 animate-gradient-xy" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black  rounded-4xl transform -rotate-1 scale-105 opacity-10 animate-gradient-xy delay-1000" />
                            <div className="relative bg-gradient-to-r from-black to-black rounded-4xl p-12 text-white transform transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-3xl overflow-hidden">
                                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce delay-500" />
                                <div className="relative z-10">
                                    <div className="text-center mb-10">
                                        <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl mb-6 border border-white/30 shadow-lg">
                                            <Star className="h-4 w-4 text-white fill-current animate-spin-slow" />
                                            <span className="text-sm font-black uppercase tracking-wider">{t('Products.coreTrays.flagshipProduct')}</span>
                                            <Zap className="h-4 w-4 text-white fill-current animate-pulse" />
                                        </div>
                                        <h3 className="text-3xl font-black mb-6 text-white drop-shadow-lg">
                                            {t('Products.coreTrays.title')}
                                        </h3>
                                        <p className="text-md font-medium opacity-95 max-w-3xl mx-auto leading-relaxed drop-shadow">
                                            {t('Products.coreTrays.subtitle')}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
                                        {[
                                            { key: 'coreBoxes', icon: Package, color: "from-amber-400 to-yellow-400" },
                                            { key: 'saudiMade', icon: Shield, color: "from-green-400 to-emerald-400" },
                                            { key: 'vision', icon: Users, color: "from-blue-400 to-cyan-400" },
                                        ].map((stat, index) => (
                                            <div
                                                key={index}
                                                className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 text-center transition-all duration-500 ease-out hover:bg-white/20 hover:scale-110 hover:shadow-2xl border border-white/20 overflow-hidden"
                                                style={{ transitionDelay: `${index * 200}ms` }}
                                            >
                                                {/* Background Glow */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                                                <div className="relative">
                                                    <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out">
                                                        <stat.icon className="h-6 w-6 text-white" />
                                                    </div>
                                                    <div className="font-black text-2xl mb-3 text-white drop-shadow-lg transition-all duration-300 ease-out group-hover:scale-110">
                                                        {t(`Products.coreTrays.stats.${stat.key}.number`)}
                                                    </div>
                                                    <div className="text-white/90 font-semibold text-sm transition-all duration-300 ease-out">
                                                        {t(`Products.coreTrays.stats.${stat.key}.label`)}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="text-center">
                                        <Button className="rounded-2xl font-bold bg-white text-black px-10 py-5 transition-all duration-600 ease-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-amber-200">
                                            {t('Products.coreTrays.exploreButton')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}