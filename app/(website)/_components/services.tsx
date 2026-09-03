"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Store, Building2, Hand, Palette, Maximize2 } from "lucide-react";

import {
  ServicesTitleAnimation,
  ServicesContainerAnimation,
} from "@/constants/framer/services-animations";

// Animação para os pilares (entrada de baixo para cima com fade)
const pillarAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Animação para as imagens dos cards (fade-in suave)
const imageAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

// Container que orquestra os pilares com stagger
const pillarsContainerAnimation = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export function Services() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.15 }}
      variants={ServicesContainerAnimation}
      className="w-full px-6 mt-12 flex flex-col items-center space-y-12 sm:px-16 lg:mt-24 lg:container lg:mx-auto lg:space-y-14"
    >
      <motion.h2
        variants={ServicesTitleAnimation}
        className="poppins-font text-gold-primary font-medium text-3xl text-center sm:text-4xl"
      >
        Por dentro da experiência
      </motion.h2>

      {/* Card grande — Sala Imersiva (sem título de produto) */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={pillarsContainerAnimation}
        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center"
      >
        <motion.div
          variants={imageAnimation}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-3/5 relative aspect-video rounded-xl overflow-hidden"
        >
          <Image
            src="/images/sala-imersiva.webp"
            alt="Sala imersiva da Hanazaki Studio em stand de vendas"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </motion.div>

        <div className="w-full lg:w-2/5 flex flex-col gap-6 lg:gap-7">
          {/* Título do produto — destaque tipográfico aumentado */}
          <motion.h3
            variants={pillarAnimation}
            transition={{ duration: 0.5 }}
            className="poppins-font text-gold-primary font-semibold text-3xl sm:text-[2rem] leading-tight mb-2"
          >
            Sala Imersiva
          </motion.h3>

          {/* Integrada ao stand */}
          <motion.div
            variants={pillarAnimation}
            transition={{ duration: 0.5 }}
            className="flex gap-4 items-start"
          >
            <div className="flex-shrink-0 mt-0.5">
              <Store
                className="w-8 h-8 text-gold-primary"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="poppins-font text-gold-primary font-semibold text-lg leading-tight">
                Integrada ao stand
              </h4>
              <p className="text-offwhite-primary text-sm leading-relaxed">
                Adaptada ao espaço do seu stand de vendas, com hardware e
                conteúdo desenvolvidos sob medida para o seu lançamento.
              </p>
            </div>
          </motion.div>

          {/* Exterior + Interior */}
          <motion.div
            variants={pillarAnimation}
            transition={{ duration: 0.5 }}
            className="flex gap-4 items-start"
          >
            <div className="flex-shrink-0 mt-0.5">
              <Building2
                className="w-8 h-8 text-gold-primary"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="poppins-font text-gold-primary font-semibold text-lg leading-tight">
                Exterior + Interior
              </h4>
              <p className="text-offwhite-primary text-sm leading-relaxed">
                Do entorno do empreendimento ao interior dos apartamentos, num
                único passeio interativo.
              </p>
            </div>
          </motion.div>

          {/* Unreal Engine em tempo real */}
          <motion.div
            variants={pillarAnimation}
            transition={{ duration: 0.5 }}
            className="flex gap-4 items-start"
          >
            <div className="flex-shrink-0 mt-0.5 relative w-8 h-8">
              <Image
                src="/images/unreal-engine.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="poppins-font text-gold-primary font-semibold text-lg leading-tight">
                Unreal Engine em tempo real
              </h4>
              <p className="text-offwhite-primary text-sm leading-relaxed">
                Sem vídeo pré-renderizado. O cliente conduz a apresentação, na
                hora.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Card grande — Totem Interativo (mesma largura, imagem menor) */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={pillarsContainerAnimation}
        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center"
      >
        <motion.div
          variants={imageAnimation}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[45%] rounded-xl overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block scale-[1.04]"
          >
            <source src="/images/totem.webm" type="video/webm" />
          </video>
        </motion.div>

        <div className="w-full lg:w-[55%] flex flex-col gap-6 lg:gap-7">
          {/* Título do produto — destaque tipográfico aumentado */}
          <motion.h3
            variants={pillarAnimation}
            transition={{ duration: 0.5 }}
            className="poppins-font text-gold-primary font-semibold text-3xl sm:text-[2rem] leading-tight mb-2"
          >
            Totem Interativo
          </motion.h3>

          {/* Touch */}
          <motion.div
            variants={pillarAnimation}
            transition={{ duration: 0.5 }}
            className="flex gap-4 items-start"
          >
            <div className="flex-shrink-0 mt-0.5">
              <Hand
                className="w-8 h-8 text-gold-primary"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="poppins-font text-gold-primary font-semibold text-lg leading-tight">
                Touch
              </h4>
              <p className="text-offwhite-primary text-sm leading-relaxed">
                Interação direta na tela.
              </p>
            </div>
          </motion.div>

          {/* Interface customizada */}
          <motion.div
            variants={pillarAnimation}
            transition={{ duration: 0.5 }}
            className="flex gap-4 items-start"
          >
            <div className="flex-shrink-0 mt-0.5">
              <Palette
                className="w-8 h-8 text-gold-primary"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="poppins-font text-gold-primary font-semibold text-lg leading-tight">
                Interface customizada
              </h4>
              <p className="text-offwhite-primary text-sm leading-relaxed">
                Desenvolvida exclusivamente para cada empreendimento, seguindo
                a identidade visual do projeto.
              </p>
            </div>
          </motion.div>

          {/* Versátil */}
          <motion.div
            variants={pillarAnimation}
            transition={{ duration: 0.5 }}
            className="flex gap-4 items-start"
          >
            <div className="flex-shrink-0 mt-0.5">
              <Maximize2
                className="w-8 h-8 text-gold-primary"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="poppins-font text-gold-primary font-semibold text-lg leading-tight">
                Versátil
              </h4>
              <p className="text-offwhite-primary text-sm leading-relaxed">
                Adapta-se a qualquer espaço do stand, com flexibilidade de uso
                e instalação.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
