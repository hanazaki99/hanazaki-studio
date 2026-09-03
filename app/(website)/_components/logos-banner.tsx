"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  ContainerAnimation,
  TradesAnimation,
} from "@/constants/framer/about-trades-animations";

export function LogosBanner() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={ContainerAnimation}
      className="w-full px-6 sm:px-16 py-12 sm:py-16 lg:py-20 flex items-center justify-around gap-6 sm:gap-10"
    >
      {/* DKC */}
      <motion.div
        variants={TradesAnimation}
        className="relative h-12 w-28 sm:h-16 sm:w-36 lg:h-20 lg:w-48"
      >
        <Image
          src="/images/dkc.png"
          alt="DKC"
          fill
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 192px"
          className="object-contain object-center opacity-70"
        />
      </motion.div>

      {/* CHICAGO (AGORA NO MEIO) */}
      <motion.div
        variants={TradesAnimation}
        className="relative h-12 w-28 sm:h-16 sm:w-36 lg:h-20 lg:w-48"
      >
        <Image
          src="/images/chicago-2025.png"
          alt="Chicago Build 2026 Expo"
          fill
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 192px"
          className="object-contain object-center opacity-70"
        />
      </motion.div>

      {/* GVC */}
      <motion.div
        variants={TradesAnimation}
        className="relative h-12 w-28 sm:h-16 sm:w-36 lg:h-20 lg:w-48"
      >
        <Image
          src="/images/gvc.svg"
          alt="GVC"
          fill
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 192px"
          className="object-contain object-center opacity-70"
        />
      </motion.div>
    </motion.section>
  );
}
