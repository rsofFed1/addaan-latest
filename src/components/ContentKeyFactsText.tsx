"use client";
import { motion } from "motion/react";

const keyFactsData = [
  {
    value: "92",
    description: "Years of experience",
  },
  {
    value: "75,000+",
    description: "Total workforce",
  },
  {
    value: "250.0",
    description: "Total hydrocarbon reserves",
    subDescription: "(billion boe)",
  },
];

const ContentKeyFactsText = () => {
  return (
    <section className="py-16 md:py-24 bg-[#323232]">
      <div className="max-w-[1260px] mx-auto px-6">
        {/* Section Title */}
        <div className="pb-10 md:pb-18">
          <h2 className="text-[28px] md:text-[40px] font-normal text-white">
            At a glance
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyFactsData.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-left"
            >
              {/* Statistic Value */}
              <div className="mb-6">
                <h3 className="text-5xl font-light text-white leading-none">
                  {fact.value}
                </h3>
              </div>

              {/* Statistic Description */}
              <div className="space-y-1 h-12">
                <p className="text-sm text-white/90 font-light">
                  {fact.description}
                </p>
                {fact.subDescription && (
                  <p className="text-sm text-white/70 font-light">
                    {fact.subDescription}
                  </p>
                )}
              </div>

              {/* Divider Line */}
              <div className="mt-6 h-px bg-white w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentKeyFactsText;