import ScrollProgressBar from '@/components/ScrollProgressBar';
import { routing } from '@/i18n/routing';
import { Params } from '@/types/locale';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Geist } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import Footer from './_components/footer/Footer';
import HeaderSwitcher from './_components/header/HeaderSwitcher';

const geist = Geist({
  subsets: ['latin'],
})

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={geist.className} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <HeaderSwitcher />
          <ScrollProgressBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}