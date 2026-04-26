"use client";

import { motion } from "framer-motion";

const menuItems = [
  {
    number: "01",
    name: "WELCOME TO WAGYUMAFIA",
    description: "웰컴 코스",
  },
  {
    number: "02",
    name: "WAGYU JERKY",
    description: "와규 육포",
  },
  {
    number: "03",
    name: "MANGALICA PORK SIU MAI",
    description: "망갈리차 돼지고기 슈마이",
  },
  {
    number: "04",
    name: "OCTOPUS, WHELK, WILD GARLIC",
    description: "문어, 소라, 야생 마늘",
  },
  {
    number: "05",
    name: "WAGYUMAFIA SAND",
    description: "와규마피아 카츠산도",
  },
  {
    number: "06",
    name: "JAPANESE YAKINIKU",
    description: "일본식 야키니쿠",
    subItems: [
      { en: "BEEF TONGUE", ko: "우설" },
      { en: "SKIRT STEAK", ko: "안창살" },
      { en: "HANGING TENDER", ko: "토시살" },
      { en: "RIB CAP", ko: "립캡/꽃등심" },
    ],
  },
  {
    number: "07",
    name: "TAKIKOMI RICE",
    description: "타키코미 밥 (솥밥)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#F5F0E6] flex flex-col items-center justify-center px-6 py-16 md:py-24">
      <motion.div
        className="max-w-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-[#C9A962] mb-4">
            WAGYUMAFIA
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-[#C9A962]/50"></span>
            <span className="text-[#C9A962] text-sm tracking-[0.2em]">×</span>
            <span className="h-[1px] w-12 bg-[#C9A962]/50"></span>
          </div>
          <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-[#F5F0E6]/80">
            WELLNESS
          </h2>
        </motion.div>

        {/* Date */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-lg md:text-xl font-light tracking-[0.15em] text-[#F5F0E6]/60">
            2026.04.26
          </p>
          <p className="text-sm tracking-[0.3em] text-[#C9A962]/70 mt-2">
            SUNDAY
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center mb-12"
        >
          <span className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C9A962]/40 to-transparent"></span>
        </motion.div>

        {/* Menu */}
        <motion.div className="space-y-8 mb-16">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="flex items-start gap-6">
                <span className="text-[#C9A962]/40 text-xs font-light tracking-widest mt-1">
                  {item.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-light tracking-[0.15em] text-[#F5F0E6] mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#F5F0E6]/40 tracking-wide">
                    {item.description}
                  </p>
                  {item.subItems && (
                    <div className="mt-4 ml-4 space-y-2">
                      {item.subItems.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex items-center gap-3"
                        >
                          <span className="w-1 h-1 bg-[#C9A962]/30 rounded-full"></span>
                          <span className="text-xs text-[#F5F0E6]/60 tracking-wider">
                            {sub.en}
                          </span>
                          <span className="text-xs text-[#F5F0E6]/30">
                            {sub.ko}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center mb-12"
        >
          <span className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C9A962]/40 to-transparent"></span>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-lg md:text-xl font-light tracking-[0.2em] text-[#C9A962]/80 italic">
            See you tonight
          </p>
        </motion.div>

        {/* Logo/Brand */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-20 opacity-30"
        >
          <p className="text-[10px] tracking-[0.4em] text-[#F5F0E6]/30">
            YAKINIKUMAFIA
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
