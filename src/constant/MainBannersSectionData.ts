interface SlideData {
  titleKey: string;
  image: string;
  href: string;
}

export const dataItems = (locale: string): SlideData[] => [
  {
    titleKey: "MainBanners.items.imdex",
    image: '/images/IMDEX-1.webp',
    href: `/${locale}/imdex`,
  },
  {
    titleKey: "MainBanners.items.desco",
    image: '/images/products/DESCO/6.webp',
    href: `/${locale}/desco`,
  },
  {
    titleKey: "MainBanners.items.drillingTools",
    image: '/images/products/DESCO/3.webp',
    href: `/${locale}/drillingTools`,
  },
  {
    titleKey: "MainBanners.items.aitcCoreTrays",
    image: '/images/AITCCoreTrays/11.webp',
    href: `/${locale}/aitc`,
  },
];