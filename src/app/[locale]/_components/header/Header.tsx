"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import AnnouncementBar from "./component/announcementBar";
import { useParams } from "next/navigation";
import { Params } from "@/types/locale";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function Header() {
    const t = useTranslations("Header");
    const { locale } = useParams<Params>()
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const isRTL = locale === 'ar';
    const navItems = [
        { label: t("navItems.home"), href: `/${locale}` },
        { label: t("navItems.aboutUs"), href: `/${locale}/aboutUs` },
        { label: t("navItems.products"), href: `/${locale}/products` },
        { label: t("navItems.AITCCoreTrays"), href: `/${locale}/AITCCoreTrays` },
        { label: t("navItems.achievements"), href: `/${locale}/achievements` },
        { label: t("navItems.contact"), href: `/${locale}/contact` },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeMobile = () => setMobileOpen(false);

    return (
        <header className="fixed inset-x-0 z-50">
            <motion.div
                animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
                transition={{ duration: 0.75 }}
            >
            </motion.div>
            <motion.div
                animate={{ backgroundColor: scrolled ? "rgba(34, 34, 34, 1)" : "rgba(0, 0, 0, 0)" }}
                transition={{ duration: 0.75 }}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:h-28 h-20 flex items-center justify-between text-white">
                    <div className="flex flex-row gap-4 md:gap-10 items-center z-50">
                        <button
                            title={t("search.title")}
                            aria-label={t("search.title")}
                            className="hidden lg:block"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="chakra-icon transition-colors duration-200 hover:text-[#13A7DC] cursor-pointer" viewBox="0 0 25.98 25.98" focusable="false" aria-hidden="true" width="25.98" height="25.98"><path d="m17.5,11.25c0,3.45-2.8,6.25-6.25,6.25s-6.25-2.8-6.25-6.25,2.8-6.25,6.25-6.25,6.25,2.8,6.25,6.25Zm-2.44,0c0,2.11-1.71,3.81-3.81,3.81s-3.81-1.71-3.81-3.81,1.71-3.81,3.81-3.81,3.81,1.71,3.81,3.81Z" fillRule="evenodd" fill="currentColor" /><path d="m11.25,22.5c2.64,0,5.07-.91,6.99-2.44l5.54,5.54c.5.5,1.32.5,1.82,0s.5-1.32,0-1.82l-5.54-5.54c1.52-1.92,2.44-4.35,2.44-6.99C22.5,5.04,17.46,0,11.25,0S0,5.04,0,11.25s5.04,11.25,11.25,11.25Zm0-2.44c4.87,0,8.81-3.95,8.81-8.81S16.12,2.44,11.25,2.44,2.44,6.38,2.44,11.25s3.95,8.81,8.81,8.81Z" fillRule="evenodd" fill="currentColor" /></svg>
                        </button>

                        <button
                            type="button"
                            aria-label={t("menu.toggle")}
                            className="lg:hidden p-2 rounded-md transition-all duration-200 hover:bg-white/15 hover:scale-105 active:scale-95"
                            onClick={() => setMobileOpen((v) => !v)}
                        >
                            {!mobileOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden>
                                    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden>
                                    <path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3 10.6 10.6 16.9 4.3z" />
                                </svg>
                            )}
                        </button>

                        <nav className="hidden lg:block">
                            <ul className="flex items-center gap-8">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="uppercase tracking-wide text-sm font-semibold text-white/90 transition-all duration-200 hover:text-[#13A7DC] relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[0.3px] after:bg-[#13A7DC] after:transition-all after:duration-400 hover:after:w-full"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex gap-8 justify-center items-center">
                        <div className="hidden lg:block">
                            <AnnouncementBar />
                        </div>
                        <Link href={"/"} className="flex items-center">
                            <Image
                                width={100}
                                height={100}
                                src="/images/brandLogo/Adaan-Dark-Logo.webp"
                                alt={t("logo.alt")}
                                className="h-16 w-auto md:h-20"
                            />
                        </Link>
                    </div>

                </div>
                <motion.div
                    initial={false}
                    animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
                    className="lg:hidden overflow-hidden bg-[#222222] text-white backdrop-blur-sm absolute top-0 w-full"
                >
                    <div className="flex flex-col px-6 py-16 h-screen gap-40">
                        <div className="flex flex-col gap-6">
                            <div className="relative mb-8">
                                <input
                                    type="search"
                                    placeholder={t("search.placeholder")}
                                    className={cn("w-full bg-transparent border-b border-white/20 py-2  text-white placeholder-white/50 focus:outline-none focus:border-white/40", isRTL ? "pr-10 pl-4" : "pl-10 pr-4")}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="chakra-icon transition-colors duration-200 hover:text-[#13A7DC] cursor-pointer absolute top-[9px]" viewBox="0 0 25.98 25.98" focusable="false" aria-hidden="true" width="20" height="20"><path d="m17.5,11.25c0,3.45-2.8,6.25-6.25,6.25s-6.25-2.8-6.25-6.25,2.8-6.25,6.25-6.25,6.25,2.8,6.25,6.25Zm-2.44,0c0,2.11-1.71,3.81-3.81,3.81s-3.81-1.71-3.81-3.81,1.71-3.81,3.81-3.81,3.81,1.71,3.81,3.81Z" fillRule="evenodd" fill="currentColor" /><path d="m11.25,22.5c2.64,0,5.07-.91,6.99-2.44l5.54,5.54c.5.5,1.32.5,1.82,0s.5-1.32,0-1.82l-5.54-5.54c1.52-1.92,2.44-4.35,2.44-6.99C22.5,5.04,17.46,0,11.25,0S0,5.04,0,11.25s5.04,11.25,11.25,11.25Zm0-2.44c4.87,0,8.81-3.95,8.81-8.81S16.12,2.44,11.25,2.44,2.44,6.38,2.44,11.25s3.95,8.81,8.81,8.81Z" fillRule="evenodd" fill="currentColor" /></svg>
                            </div>
                            <nav className="mb-8">
                                <ul className="flex flex-col gap-6">
                                    {navItems.map((item) => (
                                        <li key={`m-${item.href}`}>
                                            <Link
                                                href={item.href}
                                                className="group flex items-center justify-between py-2 text-lg font-medium text-white/90 transition-all duration-200 hover:text-white"
                                                onClick={closeMobile}
                                            >
                                                {item.label}
                                                <div className={cn(isRTL ? "rotate-180" : "rotate-0")}>
                                                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" >
                                                        <path d="M14.4016 3.9304L21.6978 11.2267C21.9198 11.4486 22.0195 11.7466 21.9969 12.0368L21.6978 12.6863L14.4015 19.9826C13.9986 20.3856 13.3452 20.3856 12.9422 19.9826C12.5393 19.5796 12.5393 18.9263 12.9422 18.5233L18.5362 12.9294H2.93184C2.39455 12.9294 1.95898 12.4938 1.95898 11.9565C1.95898 11.4192 2.39455 10.9837 2.93184 10.9837H18.5363L12.9423 5.38968C12.5393 4.98671 12.5393 4.33337 12.9423 3.9304C13.3452 3.52743 13.9986 3.52743 14.4016 3.9304Z" fill="currentColor" />
                                                    </motion.svg>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="flex items-center justify-between pt-8 border-t border-white/10">
                                <AnnouncementBar />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </header>
    );
};
