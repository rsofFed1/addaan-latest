"use client";
import { Params } from "@/types/locale";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef } from "react";
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Client {
  // title: string;
  logo: React.ReactNode;
  image: string;
  href: string;
}

const getClientData = (t: (key: string) => string): Client[] => [
  {
    // title: t('OurClients.clients.imdex.title'),
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="27" fill="none">
        <g fill="#163345" clipPath="url(#a)">
          <path d="M7.38.304688H0V26.6051h7.38V.304688ZM30.09.304688 25.26 17.2867 20.34.304688H9.84V26.6051h7.13V8.37446l5.25 18.23064h5.82l5.33-18.39305V26.6051h7.14V.304688H30.09ZM54.04.304688H42.97V26.6051h11.07c8.94 0 13.61-5.7453 13.61-13.1452C67.65 6.06011 62.97.304688 54.04.304688Zm0 19.641512h-3.69V6.96352h3.69c3.94 0 5.99 2.49707 5.99 6.49638.08 4.0806-1.97 6.4863-5.99 6.4863ZM68.96.304688V26.6051h20.83v-6.6589H76.26v-3.573h10v-5.8265h-10V6.96352h13.53V.304688H68.96ZM122.18.304688v.416177h.9V3.39049h.49V.720865h.99V.304688h-2.38ZM127.34.304688l-.9 2.334652-.9-2.334652h-.57V3.39049h.49V2.38557l-.08-1.32973.9 2.33465h.41l.9-2.33465-.08 1.32973v1.00492h.49V.304688h-.66ZM111.47.304688 89.79 26.6051h9.26l6.21-7.5318 4.64-5.6134L120.74.304688h-9.27Z" />
          <path d="M89.79.304688 99.85 12.5058l4.63-5.62348L99.05.304688h-9.26ZM106.04 20.0173l5.43 6.5878h9.27L110.68 14.404l-4.64 5.6133Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h128v26.3004H0z" transform="translate(0 .304688)" />
          </clipPath>
        </defs>
      </svg>
    ),
    image: "/images/partnersLogo/IMDEXLogo.png",
    href: "#",
  },
  {
    // title: t('OurClients.clients.imdex.title'),
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="27" fill="none">
        <g fill="#163345" clipPath="url(#a)">
          <path d="M7.38.304688H0V26.6051h7.38V.304688ZM30.09.304688 25.26 17.2867 20.34.304688H9.84V26.6051h7.13V8.37446l5.25 18.23064h5.82l5.33-18.39305V26.6051h7.14V.304688H30.09ZM54.04.304688H42.97V26.6051h11.07c8.94 0 13.61-5.7453 13.61-13.1452C67.65 6.06011 62.97.304688 54.04.304688Zm0 19.641512h-3.69V6.96352h3.69c3.94 0 5.99 2.49707 5.99 6.49638.08 4.0806-1.97 6.4863-5.99 6.4863ZM68.96.304688V26.6051h20.83v-6.6589H76.26v-3.573h10v-5.8265h-10V6.96352h13.53V.304688H68.96ZM122.18.304688v.416177h.9V3.39049h.49V.720865h.99V.304688h-2.38ZM127.34.304688l-.9 2.334652-.9-2.334652h-.57V3.39049h.49V2.38557l-.08-1.32973.9 2.33465h.41l.9-2.33465-.08 1.32973v1.00492h.49V.304688h-.66ZM111.47.304688 89.79 26.6051h9.26l6.21-7.5318 4.64-5.6134L120.74.304688h-9.27Z" />
          <path d="M89.79.304688 99.85 12.5058l4.63-5.62348L99.05.304688h-9.26ZM106.04 20.0173l5.43 6.5878h9.27L110.68 14.404l-4.64 5.6133Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h128v26.3004H0z" transform="translate(0 .304688)" />
          </clipPath>
        </defs>
      </svg>
    ),
    image: "/images/partnersLogo/DescoLogo.png",
    href: "#",
  },
  {
    // title: t('OurClients.clients.imdex.title'),
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="27" fill="none">
        <g fill="#163345" clipPath="url(#a)">
          <path d="M7.38.304688H0V26.6051h7.38V.304688ZM30.09.304688 25.26 17.2867 20.34.304688H9.84V26.6051h7.13V8.37446l5.25 18.23064h5.82l5.33-18.39305V26.6051h7.14V.304688H30.09ZM54.04.304688H42.97V26.6051h11.07c8.94 0 13.61-5.7453 13.61-13.1452C67.65 6.06011 62.97.304688 54.04.304688Zm0 19.641512h-3.69V6.96352h3.69c3.94 0 5.99 2.49707 5.99 6.49638.08 4.0806-1.97 6.4863-5.99 6.4863ZM68.96.304688V26.6051h20.83v-6.6589H76.26v-3.573h10v-5.8265h-10V6.96352h13.53V.304688H68.96ZM122.18.304688v.416177h.9V3.39049h.49V.720865h.99V.304688h-2.38ZM127.34.304688l-.9 2.334652-.9-2.334652h-.57V3.39049h.49V2.38557l-.08-1.32973.9 2.33465h.41l.9-2.33465-.08 1.32973v1.00492h.49V.304688h-.66ZM111.47.304688 89.79 26.6051h9.26l6.21-7.5318 4.64-5.6134L120.74.304688h-9.27Z" />
          <path d="M89.79.304688 99.85 12.5058l4.63-5.62348L99.05.304688h-9.26ZM106.04 20.0173l5.43 6.5878h9.27L110.68 14.404l-4.64 5.6133Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h128v26.3004H0z" transform="translate(0 .304688)" />
          </clipPath>
        </defs>
      </svg>
    ),
    image: "/images/partnersLogo/AMCLogo.png",
    href: "#",
  },
  {
    // title: t('OurClients.clients.imdex.title'),
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="27" fill="none">
        <g fill="#163345" clipPath="url(#a)">
          <path d="M7.38.304688H0V26.6051h7.38V.304688ZM30.09.304688 25.26 17.2867 20.34.304688H9.84V26.6051h7.13V8.37446l5.25 18.23064h5.82l5.33-18.39305V26.6051h7.14V.304688H30.09ZM54.04.304688H42.97V26.6051h11.07c8.94 0 13.61-5.7453 13.61-13.1452C67.65 6.06011 62.97.304688 54.04.304688Zm0 19.641512h-3.69V6.96352h3.69c3.94 0 5.99 2.49707 5.99 6.49638.08 4.0806-1.97 6.4863-5.99 6.4863ZM68.96.304688V26.6051h20.83v-6.6589H76.26v-3.573h10v-5.8265h-10V6.96352h13.53V.304688H68.96ZM122.18.304688v.416177h.9V3.39049h.49V.720865h.99V.304688h-2.38ZM127.34.304688l-.9 2.334652-.9-2.334652h-.57V3.39049h.49V2.38557l-.08-1.32973.9 2.33465h.41l.9-2.33465-.08 1.32973v1.00492h.49V.304688h-.66ZM111.47.304688 89.79 26.6051h9.26l6.21-7.5318 4.64-5.6134L120.74.304688h-9.27Z" />
          <path d="M89.79.304688 99.85 12.5058l4.63-5.62348L99.05.304688h-9.26ZM106.04 20.0173l5.43 6.5878h9.27L110.68 14.404l-4.64 5.6133Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h128v26.3004H0z" transform="translate(0 .304688)" />
          </clipPath>
        </defs>
      </svg>
    ),
    image: "/images/partnersLogo/REFLEXLogo.png",
    href: "#",
  },
  {
    // title: t('OurClients.clients.imdex.title'),
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="27" fill="none">
        <g fill="#163345" clipPath="url(#a)">
          <path d="M7.38.304688H0V26.6051h7.38V.304688ZM30.09.304688 25.26 17.2867 20.34.304688H9.84V26.6051h7.13V8.37446l5.25 18.23064h5.82l5.33-18.39305V26.6051h7.14V.304688H30.09ZM54.04.304688H42.97V26.6051h11.07c8.94 0 13.61-5.7453 13.61-13.1452C67.65 6.06011 62.97.304688 54.04.304688Zm0 19.641512h-3.69V6.96352h3.69c3.94 0 5.99 2.49707 5.99 6.49638.08 4.0806-1.97 6.4863-5.99 6.4863ZM68.96.304688V26.6051h20.83v-6.6589H76.26v-3.573h10v-5.8265h-10V6.96352h13.53V.304688H68.96ZM122.18.304688v.416177h.9V3.39049h.49V.720865h.99V.304688h-2.38ZM127.34.304688l-.9 2.334652-.9-2.334652h-.57V3.39049h.49V2.38557l-.08-1.32973.9 2.33465h.41l.9-2.33465-.08 1.32973v1.00492h.49V.304688h-.66ZM111.47.304688 89.79 26.6051h9.26l6.21-7.5318 4.64-5.6134L120.74.304688h-9.27Z" />
          <path d="M89.79.304688 99.85 12.5058l4.63-5.62348L99.05.304688h-9.26ZM106.04 20.0173l5.43 6.5878h9.27L110.68 14.404l-4.64 5.6133Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h128v26.3004H0z" transform="translate(0 .304688)" />
          </clipPath>
        </defs>
      </svg>
    ),
    image: "/images/partnersLogo/AMCLogo.png",
    href: "#",
  },
  {
    // title: t('OurClients.clients.imdex.title'),
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="27" fill="none">
        <g fill="#163345" clipPath="url(#a)">
          <path d="M7.38.304688H0V26.6051h7.38V.304688ZM30.09.304688 25.26 17.2867 20.34.304688H9.84V26.6051h7.13V8.37446l5.25 18.23064h5.82l5.33-18.39305V26.6051h7.14V.304688H30.09ZM54.04.304688H42.97V26.6051h11.07c8.94 0 13.61-5.7453 13.61-13.1452C67.65 6.06011 62.97.304688 54.04.304688Zm0 19.641512h-3.69V6.96352h3.69c3.94 0 5.99 2.49707 5.99 6.49638.08 4.0806-1.97 6.4863-5.99 6.4863ZM68.96.304688V26.6051h20.83v-6.6589H76.26v-3.573h10v-5.8265h-10V6.96352h13.53V.304688H68.96ZM122.18.304688v.416177h.9V3.39049h.49V.720865h.99V.304688h-2.38ZM127.34.304688l-.9 2.334652-.9-2.334652h-.57V3.39049h.49V2.38557l-.08-1.32973.9 2.33465h.41l.9-2.33465-.08 1.32973v1.00492h.49V.304688h-.66ZM111.47.304688 89.79 26.6051h9.26l6.21-7.5318 4.64-5.6134L120.74.304688h-9.27Z" />
          <path d="M89.79.304688 99.85 12.5058l4.63-5.62348L99.05.304688h-9.26ZM106.04 20.0173l5.43 6.5878h9.27L110.68 14.404l-4.64 5.6133Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h128v26.3004H0z" transform="translate(0 .304688)" />
          </clipPath>
        </defs>
      </svg>
    ),
    image: "/images/partnersLogo/REFLEXLogo.png",
    href: "#",
  },
];

export const OurClientsSection = () => {
  const t = useTranslations("OurClients");
  const swiperRef = useRef<SwiperType | undefined>(undefined);
  const { locale } = useParams<Params>();
  const isRTL = locale === 'ar';

  return (
    <section className="py-16 md:py-20 relative mb-24">
      <div className="absolute inset-0 bg-white/100" />
      <div className="max-w-[1250px] mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-6">
          <div>
            <p className="uppercase tracking-widest text-[#000000] text-sm mb-5">
              {t('heading.label')}
            </p>
            <h2 className="text-[28px] md:text-[40px] font-normal text-[#000000] w-full">
              {t('heading.title')}
            </h2>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          dir={isRTL ? 'ltl' : 'rtr'}
          direction="horizontal"
          autoplay={{ delay: 0, disableOnInteraction: true, pauseOnMouseEnter: true }}
          speed={2000}
          allowTouchMove={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 4 },
          }}
        >
          {getClientData(t).map((item, idx) => (
            <SwiperSlide key={idx}>
              <Link
                key={idx}
                href={item.href}
                className="group block text-center"
              >
                <div className="relative overflow-hidden rounded-[20px] h-40 flex items-center justify-center p-2 bg-black/1">
                  {item.image ? (<Image height={200} width={200} src={item.image} alt={`Client ${idx + 1}`} />) : (item.logo)}
                </div>
                {/* <div className="relative group overflow-hidden rounded-t-[20px] rounded-l-[20px] mb-5 flex items-center justify-center p-4 bg-white/10  shadow-lg border border-white/20 hover:shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-10 group-hover:opacity-90 transition-opacity duration-500"></div>
                      {item.logo}
                </div> */}

                {/* <h3 className="text-2xl font-medium text-[#ffffff] mb-2"> {item.title} </h3> */}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
