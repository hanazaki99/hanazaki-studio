"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  BelowTitleAnimation,
  BelowTextAnimation,
  BelowContainerAnimation,
} from "@/constants/framer/about-content-animations";
import { AboutBio } from "./about-bio";

export function AboutContent() {
  return (
    <section className="w-full px-6 mt-12 sm:px-16 lg:container lg:mx-auto">
      <AboutBio />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={BelowContainerAnimation}
        className="w-full mt-16 mb-12 sm:mt-24"
      >
        <div className="relative w-full flex flex-col items-center min-h-[450px] sm:min-h-[520px] lg:min-h-[580px]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/images/about-international.svg"
              alt=""
              aria-hidden="true"
              width={520}
              height={480}
              priority
              className="object-contain w-auto h-[400px] sm:h-[450px] lg:h-[490px] -translate-y-12 sm:-translate-y-14 lg:-translate-y-16"
            />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center text-center px-4 pt-8 sm:pt-12 lg:pt-16">
            <motion.h2
              variants={BelowTitleAnimation}
              className="poppins-font text-gold-primary text-3xl font-semibold mb-6 sm:text-4xl lg:text-5xl"
            >
              Onde estamos
            </motion.h2>

            <motion.div
              variants={BelowTextAnimation}
              className="space-y-4 lg:max-w-2xl"
            >
              <p className="manrope-font text-base text-light-primary sm:text-lg">
                Atendemos incorporadoras em todo o Brasil. Em 2025 estivemos na
                Expo Build Chicago, apresentando experiências interativas em
                Unreal Engine ao mercado norte-americano.
              </p>

              <p className="manrope-font text-base text-light-primary sm:text-lg">
                Em projetos pontuais, colaboramos com estúdios europeus em
                entregas para marcas internacionais — incluindo a apresentação
                da BMW em Milão.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
