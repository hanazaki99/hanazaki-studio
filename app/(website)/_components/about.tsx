"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { CardAnimation } from "@/constants/framer/about-animations";

export function About() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
      variants={CardAnimation}
      className="w-full px-6 mt-12 sm:px-16 lg:container lg:mx-auto"
    >
      <div className="w-full bg-gray-secondary flex flex-col items-center space-y-4 px-6 py-9 rounded-lg sm:pl-12 sm:pr-60 sm:items-start sm:bg-about-logo sm:bg-no-repeat sm:bg-[100%_100%] lg:pr-96">
        <h2 className="poppins-font font-medium text-gold-primary text-xl text-center sm:text-3xl sm:text-left lg:text-4xl">
          Um estúdio, um fundador, um foco.
        </h2>

        <div className="flex flex-col gap-4">
          <p className="lg:hidden manrope-font text-base text-light-primary text-center sm:text-left sm:text-lg">
            A Hanazaki Studio nasceu em 2024 da decisão de Leonardo Hanazaki
            de sair da visualização arquitetônica fotorrealista e migrar para
            o interativo.
          </p>

          <p className="lg:hidden manrope-font text-base text-light-primary text-center sm:text-left sm:text-lg">
            A razão foi simples: imagem não vende mais sozinha — experiência
            sim.
          </p>

          <p className="lg:hidden manrope-font text-base text-light-primary text-center sm:text-left sm:text-lg">
            Hoje o estúdio trabalha exclusivamente com incorporadoras de alto
            padrão, desenvolvendo salas imersivas e totens interativos em
            Unreal Engine para stands de lançamento.
          </p>
        </div>

        <p className="hidden lg:block manrope-font text-base text-light-primary text-center sm:text-left sm:text-lg">
          A Hanazaki Studio nasceu em 2024 da decisão de Leonardo Hanazaki de
          sair da visualização arquitetônica fotorrealista e migrar para o
          interativo. A razão foi simples: imagem não vende mais sozinha —
          experiência sim. Hoje o estúdio trabalha exclusivamente com
          incorporadoras de alto padrão, desenvolvendo salas imersivas e
          totens interativos em Unreal Engine para stands de lançamento.
        </p>

        <Link
          href="/sobre"
          className="poppins-font text-lg font-semibold text-light-primary/60 flex items-center gap-2 sm:text-xl"
        >
          Ver mais
          <ArrowRight className="text-light-primary/60" />
        </Link>
      </div>
    </motion.section>
  );
}
