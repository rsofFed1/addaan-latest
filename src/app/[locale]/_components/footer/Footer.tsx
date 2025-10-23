"use client";
import { Params } from "@/types/locale";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Footer = () => {
    const t = useTranslations("Footer");
    const { locale } = useParams<Params>();

    const quickLinks = [
        { name: t("quickLinks.home"), href: `/${locale}` },
        { name: t("quickLinks.aboutUs"), href: `/${locale}/aboutUs` },
        { name: t("quickLinks.products"), href: `/${locale}/products` },
        { name: t("quickLinks.contact"), href: `/${locale}/contact` },
        { name: t("quickLinks.achievements"), href: `/${locale}/achievements` },
    ];

    const ourProducts = [
        { name: t("products.coreTray"), href: "#" },
        { name: t("products.imdex"), href: "#" },
        { name: t("products.desco"), href: "#" },
        { name: t("products.crEpiroc"), href: "#" },
        { name: t("products.tools"), href: "#" },
    ];

    const otherWebsites = [
        { name: "IMDEX", href: "https://www.imdex.com", external: true },
        { name: "CR Powered by Epiroc", href: "https://crmining.com", external: true },
        { name: "Desco Drilling", href: "https://gtd-desco.com", external: true },
    ];

    const socialLinks = [
        { name: "Twitter", href: "https://x.com/Addaan", icon: "twitter" },
        { name: "Facebook", href: "https://www.facebook.com/Addaan", icon: "facebook" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/Addaan/", icon: "linkedin" },
        { name: "Instagram", href: "https://www.instagram.com/Addaan/", icon: "instagram" },
        { name: "YouTube", href: "https://www.youtube.com/user/AddaanVideo", icon: "youtube" },
    ];

    return (
        <footer className="bg-[#202021] border-t border-gray-200">
            <div className="max-w-[1260px] mx-auto py-14 px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-bold text-white mb-6 uppercase tracking-widest">
                            {t("sections.quickLinks")}
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-1 md:gap-x-0 md:space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-sm text-white hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Site Information */}
                    <div>
                        <h3 className="text-xs font-bold text-white mb-6 uppercase tracking-widest">
                            {t("sections.ourProducts")}
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-1 md:gap-x-0 md:space-y-3">
                            {ourProducts.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-sm text-white hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Other Websites */}
                    <div>
                        <h3 className="text-xs font-bold text-white mb-6 uppercase tracking-widest">
                            {t("sections.otherWebsites")}
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-1 md:gap-x-0 md:space-y-3">
                            {otherWebsites.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    target={link.external ? "_blank" : "_self"}
                                    rel={link.external ? "noopener noreferrer" : ""}
                                    className="block text-sm text-white hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex justify-center md:justify-end">
                        <div className="flex flex-row gap-8 md:grid md:grid-cols-2 md:gap-4 md:mt-10">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 md:w-12 md:h-12 rounded-full border-1 border-white flex items-center justify-center text-white hover:text-blue-400 hover:border-blue-400 transition-colors ${index === 4 ? 'md:col-span-2 justify-center md:justify-self-end' : ''
                                        }`}
                                    aria-label={social.name}
                                >
                                    {social.icon === "twitter" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <path d="m14.24,10.12L22.94.02h-2.03l-7.57,8.79L7.33,0H.28l9.13,13.38L.29,23.97h2.03l7.99-9.28,6.35,9.31h7.05l-9.47-13.88Zm-3.75,2h0L3.32,1.6h3.17l14.19,20.79h-3.17l-7.01-10.28Z" fill="currentColor" />
                                        </svg>
                                    )}
                                    {social.icon === "facebook" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <path d="m7.95,24h-2.01V6.37c0-3.51,2.86-6.37,6.37-6.37h6.63v2.01h-6.63c-2.4,0-4.36,1.96-4.36,4.36v17.63Z" fill="currentColor" />
                                            <rect x="6.94" y="11.52" width="9.47" height="2" fill="currentColor" />
                                        </svg>
                                    )}
                                    {social.icon === "linkedin" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <path d="m6,7v17" strokeWidth="2px" stroke="currentColor" fill="none" />
                                            <path d="m11,24v-16h4.71c1.76.09,5.29,1.19,5.29,4.88v11.12" strokeWidth="2px" fill="none" stroke="currentColor" />
                                            <circle cx="6" cy="2" r="2" stroke="none" fill="currentColor" />
                                        </svg>
                                    )}
                                    {social.icon === "instagram" && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                            <rect x="1" y="1" width="22" height="22" rx="8" strokeWidth="2" stroke="currentColor" fill="none" />
                                            <rect x="7.40002" y="7.40002" width="9.2" height="9.2" rx="4.6" strokeWidth="2" stroke="currentColor" fill="none" />
                                            <circle cx="18" cy="5.80005" r="1" fill="currentColor" />
                                        </svg>
                                    )}
                                    {social.icon === "youtube" && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                                            <rect x="1" y="3.40002" width="22" height="17.2" rx="6.2" strokeWidth="2" stroke="currentColor" fill="none" />
                                            <path d="M10.4 14.4V9.59998L15.2 12L10.4 14.4Z" fill="currentColor" />
                                        </svg>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href="/en"
                            className={`hover:text-[#13A7DC] ${locale === 'en' ? 'text-[#13A7DC]' : 'text-white'
                                }`}
                        >
                            {t("language.english")}
                        </Link>
                        <span className="opacity-60 text-white">|</span>
                        <Link
                            href="/ar"
                            className={`hover:text-[#13A7DC] ${locale === 'ar' ? 'text-[#13A7DC]' : 'text-white'
                                }`}
                        >
                            {t("language.arabic")}
                        </Link>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-300 pt-10">
                    <div className="flex justify-between items-center">
                        <Link href="/home" className="flex items-center">
                            <Image
                                width={100}
                                height={100}
                                src="/images/brandLogo/Adaan-Dark-Logo.png"
                                alt={t("logo.alt")}
                                className="h-16 w-auto md:h-20 transition-all duration-300 rounded-md"
                            />
                        </Link>
                        <p className="text-sm text-white"> {t("copyright")} </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

