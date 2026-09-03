"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import AboutImage from "@/public/images/below-hero-example.png";
import { SyntheticEvent, useState } from "react";

import {
  LineAnimation,
  TextAnimation,
  PlayAnimation,
  ContainerAnimation,
} from "@/constants/framer/video-about-animations";

import { VideoModal } from "./video-modal";

export function VideoAbout() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function OpenModal() {
    setIsModalOpen(true);
  }

  function CloseModal(e: SyntheticEvent) {
    setIsModalOpen(false);
  }

  return (
    <>
      <VideoModal isModalOpen={isModalOpen} CloseModal={CloseModal} />

      <section className="relative z-30 w-full h-[100vh] max-h-[920px] min-h-[420px] rounded-[30px] overflow-hidden flex items-center justify-center lg:rounded-[60px] after:content-[''] after:w-full after:h-full after:bg-gray-primary/40 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-40">
        {/* IMAGEM */}
        <Image
          src={AboutImage}
          alt="Sala Imersiva Hanazaki Studio"
          fill
          priority
          placeholder="blur"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover object-center"
        />

        {/* CONTEÚDO */}
        <motion.div
          role="button"
          onClick={OpenModal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          variants={ContainerAnimation}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 flex flex-col space-y-6 items-center justify-center group cursor-pointer overflow-hidden"
        >
          {/* LINHA SUPERIOR */}
          <motion.div
            variants={LineAnimation}
            className="w-full max-w-[220px] h-[2px] min-h-[2px] bg-gold-primary origin-center"
          />

          {/* TEXTO */}
          <motion.h2
            variants={TextAnimation}
            className="text-2xl text-center uppercase text-light-primary font-medium sm:text-5xl lg:text-6xl"
          >
            Por dentro da{" "}
            <strong className="font-medium text-gold-primary">
              sala imersiva
            </strong>
          </motion.h2>

          {/* PLAY COM GLOW CIRCULAR */}
          <motion.div variants={PlayAnimation}>
            <div className="relative group flex items-center justify-center">
              {/* GLOW */}
              <span className="absolute w-[90px] h-[90px] rounded-full bg-gold-primary opacity-0 blur-2xl group-hover:opacity-40 transition-all duration-500" />

              {/* ÍCONE */}
              <PlayCircle
                size="64px"
                strokeWidth={1.4}
                className="relative z-10 text-light-primary group-hover:text-gold-primary transition-all duration-300 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* LINHA INFERIOR */}
          <motion.div
            variants={LineAnimation}
            className="w-full max-w-[220px] h-[2px] min-h-[2px] bg-gold-primary origin-center"
          />
        </motion.div>
      </section>
    </>
  );
}
