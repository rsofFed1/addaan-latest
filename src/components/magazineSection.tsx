"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Wa’ed Ventures: a decade of empowering entrepreneurs",
    image: "https://images.pexels.com/photos/12247603/pexels-photo-12247603.webp",
    href: "#",
  },
  {
    title: "Addaan’s historic ‘No. 1’ wells",
    image: "https://images.pexels.com/photos/33192/paddle-wheel-bucket-wheel-excavators-brown-coal-open-pit-mining.webp",
    href: "#",
  },
  {
    title: "How Addaan is progressing toward a circular economy",
    image: "https://images.pexels.com/photos/17971796/pexels-photo-17971796.webp",
    href: "#",
  },
];

export const MagazineSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1260px] mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
          <h2 className="text-[28px] md:text-[40px] font-normal text-[#1f1f1f] w-full">
            Explore the latest from Elements magazine
          </h2>
          <div className="text-blue-400 flex items-center gap-3 text-sm font-medium group mt-5 md:mt-0">
            Visit the magazine
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

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Left side: two stacked small articles */}
          <div className="grid gap-6">
            {data.slice(0, 2).map((item, idx) => (
              <Link key={idx} href={item.href} className="group block h-full">
                <div className="relative h-[200px] md:h-[300px] overflow-hidden rounded-t-[20px] rounded-l-[20px] mb-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[#1f1f1f]  my-4 text-[24px] font-normal">{item.title}</h3>
                <span className="text-blue-400 flex items-center gap-2 text-sm font-medium">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                      fill="currentColor"
                    />
                  </motion.svg>
                  Read more
                </span>
              </Link>
            ))}
          </div>

          {/* Right side: one large article */}
          <Link
            href={data[2].href}
            className="group block lg:col-span-2"
          >
            <div className="relative h-[200px] md:h-[752px] overflow-hidden rounded-t-[20px] rounded-l-[20px] mb-3">
              <Image
                src={data[2].image}
                alt={data[2].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-[#1f1f1f]  my-4 text-[24px] font-normal">{data[2].title}</h3>
            <span className="text-blue-400 flex items-center gap-2 text-sm font-medium">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:translate-x-1 transition-transform mr-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                  fill="currentColor"
                />
              </motion.svg>
              Read more
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
