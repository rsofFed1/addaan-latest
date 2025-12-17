import { Params } from "@/types/locale";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

const AnnouncementBar = () => {
    const { locale } = useParams<Params>()
    const t = useTranslations("AnnouncementBar");
    return (
        <div className="flex h-10 items-center gap-4 bg-black/50  px-4 rounded-full border border-white/20">
            <Link
                href="/en"
                className={`relative px-2 text-sm font-medium transition-all duration-300 rounded-full ${locale === 'en'
                        ? 'bg-white text-black'
                        : 'text-white hover:text-black hover:bg-white/70'
                    }`}
            >
                {t('language.english')}
                {locale === 'en' && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-white/60 animate-pulse"></span>
                )}
            </Link>

            <span className="text-white/50">|</span>

            <Link
                href="/ar"
                className={`relative px-2 text-sm font-medium transition-all duration-300 rounded-full ${locale === 'ar'
                        ? 'bg-white text-black'
                        : 'text-white hover:text-black hover:bg-white/70'
                    }`}
            >
                {t('language.arabic')}
                {locale === 'ar' && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-white/60 animate-pulse"></span>
                )}
            </Link>
        </div>

    );
};

export default AnnouncementBar;
