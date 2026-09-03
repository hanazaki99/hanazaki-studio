"use client";

import { motion } from "framer-motion";

import {
  BannerAnimation,
  TextAnimation,
} from "@/constants/framer/about-banner-animations";

export function AboutBanner() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={BannerAnimation}
      className="w-full h-40 flex items-end justify-center bg-about-banner bg-no-repeat bg-cover bg-center sm:h-60 lg:h-[430px] lg:items-center"
    >
      <motion.h1
        initial="initial"
        animate="animate"
        variants={TextAnimation}
        className="w-full h-full flex justify-center items-end poppins-font text-4xl text-gold-primary font-medium text-center bg-gray-primary/50 pb-6 sm:pb-16 sm:text-5xl lg:items-center lg:pb-0 lg:text-6xl"
      >
        Quem Somos?
      </motion.h1>
    </motion.section>
  );
}
