"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    date: "2020",
    title: "Saudi-Made Innovations",
    description: "Pioneered the first Saudi-made core boxes, reducing reliance on imports and championing local manufacturing in line with Vision 2030.",
    href: "#",
  },
  {
    date: "2021",
    title: "Rapid Expansion",
    description: "Expanded significantly, deploying over 18 DESCO rigs across Saudi Arabia, reinforcing AITC's position as a market leader.",
    href: "#",
  },
  {
    date: "2022",
    title: "Core Tray Milestone",
    description: "Achieved sales of more than 200,000 core trays nationwide, while focusing on product enhancements and raw material development.",
    href: "#",
  },
  {
    date: "2023",
    title: "Record-Breaking Year",
    description: "Celebrated the company's most successful year, setting new records in growth, client satisfaction, and industry impact.",
    href: "#",
  },
  {
    date: "2024",
    title: "The Bronze Year",
    description: "Surpassed 250,000 core boxes sold. Established Saudi Arabia's first IMDEX repair centre, enhancing service efficiency and strengthening client relationships.",
    href: "#",
  },
  {
    date: "2025",
    title: "The Silver Year",
    description: "Continuing a legacy of innovation and excellence with anticipated achievements in technology and market expansion.",
    href: "#",
  },
];

export const BlogsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progress = ((activeIndex + 1) / data.length) * 100;

  return (
    <section className="py-16 md:py-24 bg-[#f2f2f2]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end px-0 md:px-16 pb-10 md:pb-16">
          <div>
            <p className="uppercase tracking-widest text-[#1f1f1f] text-sm mb-5">
              Our Journey
            </p>
            <h2 className="text-[28px] md:text-[40px] font-normal text-[#1f1f1f] w-full mb-4">
              Our Achievements
            </h2>
            <p className="text-[#1f1f1f] text-lg font-light mb-[22px] w-full">
              A decade of innovation and excellence in the mining industry
            </p>
          </div>
          <div className="text-blue-400 flex items-center gap-3 text-sm font-medium group mt-5 md:mt-0">
            Read All News
            <Link href={"#"} className="">
              <div className="flex flex-col justify-between items-center">
                {/* Arrow */}
                <motion.span
                  className="self-end inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-full border-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                    className="arrow-icon"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                      fill="currentColor"
                    />{" "}
                  </svg>
                </motion.span>
              </div>
            </Link>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          loop={false}
          autoplay={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Link
                href={item.href}
                className="group relative rounded-2xl overflow-hidden h-[450px] flex mb-4"
              >
                <div className="absolute inset-0 bg-white" />
                <div className="relative z-10 flex flex-col justify-between w-full h-full p-6">
                  <div>
                    <span className="block font-normal text-sm tracking-widest text-[#1f1f1f] mb-2">
                      {item.date}
                    </span>
                    <h3 className="text-xl mt-4 font-normal text-[#1f1f1f] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[#1f1f1f] text-md font-light mt-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    className="self-end mt-4 inline-flex items-center justify-center w-9 h-9 rounded-full border-2 border-[#63b3ed]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className="arrow-icon" > <path fillRule="evenodd" clipRule="evenodd" d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z" fill="#63b3ed" /> </svg>
                  </motion.span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 mt-6 rounded overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
};