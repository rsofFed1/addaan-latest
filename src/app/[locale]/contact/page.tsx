import ContactConversion from "@/components/contactConversion";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations('Contact');
    return (
        <>
        <div className="bg-black pt-[80px] md:pt-[112px]">
            <section className="relative text-white py-18 px-4 md:px-16 mb-24" style={{ backgroundImage: "url('/images/artwork/artwork-7.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backgroundBlendMode: 'multiply' }} >
                {/* <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] bg-grid-pattern"></div> */}
                <div className="container max-w-6xl mx-auto px-4 z-10 relative">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center mb-6">
                            <div className="w-12 h-1 bg-[#13A7DC] m-4" />
                            <span className="text-white font-semibold uppercase tracking-wider text-sm"> {t('heading.label')} </span>
                            <div className="w-12 h-1 bg-[#13A7DC] m-4" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> {t('heading.title')} </h2>
                        <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"> {t('heading.description')} </p>
                    </div>
                </div>
            </section>
            <ContactConversion />
        </div>
        </>
    );
}
