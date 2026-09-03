"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import {
  ContainerAnimation,
  SubTitleAnimation,
  TagAnimation,
  TitleAnimation,
  SubTitleLineAnimation,
  SubTitleItemAnimation,
} from "@/constants/framer/hero-animations";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <section className="w-full h-screen relative bg-hero-mobile bg-cover bg-center bg-no-repeat after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-10 after:bg-[#0e0e0e]/75">
      
      {/* VIDEO DESKTOP */}
      <div className="hidden sm:block w-full h-full absolute top-0 left-0 right-0 bottom-0">
        <video
          ref={videoRef}
          loop
          muted
          autoPlay
          playsInline
          disablePictureInPicture
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero-video.webm" type="video/webm" />
        </video>
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-20 w-full h-full px-6 flex flex-col justify-center sm:px-16 bg-hero-glows bg-no-repeat bg-contain bg-center lg:container lg:mx-auto">
        
        <motion.div
          initial="initial"
          animate="animate"
          variants={ContainerAnimation}
          className="relative w-full flex flex-col items-center justify-center space-y-6 sm:items-center"
        >
          
          {/* TAG */}
          <motion.div
            variants={TagAnimation}
            className="flex items-center justify-center space-x-1 bg-gold-primary/25 px-4 py-1 rounded-md cursor-default"
          >
            <span className="uppercase poppins-font font-semibold !leading-none text-gold-primary text-sm text-center sm:mt-[2px] sm:text-base">
              Para Incorporadoras de Alto Padrão
            </span>
            <ArrowUpRight color="#B9A568" />
          </motion.div>

          {/* TITULO */}
          <motion.h1
            variants={TitleAnimation}
            className="poppins-font text-2xl max-w-[275px] text-light-primary font-semibold text-center sm:text-5xl sm:max-w-none lg:text-7xl lg:leading-[1.1]"
          >
            Salas imersivas que transformam visita em{" "}
            <strong className="font-semibold text-[#D1BC7D]">
              decisão de compra
            </strong>
            .
          </motion.h1>

          {/* SUBTITULO */}
          <motion.div
            variants={SubTitleAnimation}
            className="w-full overflow-hidden flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 sm:before:content-[''] sm:before:h-[1px] sm:before:basis-full sm:before:bg-gold-primary sm:before:mr-4 after:content-[''] sm:after:h-[1px] sm:after:basis-full sm:after:bg-gold-primary sm:after:ml-4"
          >
            <motion.p
              variants={SubTitleItemAnimation}
              className="manrope-font text-light-primary text-nowrap text-base lg:text-xl"
            >
              Interatividade
            </motion.p>

            <motion.div
              variants={SubTitleLineAnimation}
              className="h-6 w-[1px] min-w-[1px] bg-gold-primary lg:h-8"
            />

            <motion.p
              variants={SubTitleItemAnimation}
              className="manrope-font text-light-primary text-nowrap text-base lg:text-xl"
            >
              Alto Padrão
            </motion.p>

            <motion.div
              variants={SubTitleLineAnimation}
              className="h-6 w-[1px] min-w-[1px] bg-gold-primary lg:h-8"
            />

            <motion.p
              variants={SubTitleItemAnimation}
              className="manrope-font text-light-primary text-nowrap text-base lg:text-xl"
            >
              Sob Medida
            </motion.p>
          </motion.div>

          {/* BOTÃO PREMIUM */}
          <motion.div
            variants={TagAnimation}
            className="flex items-center justify-center pt-4"
          >
            <motion.a
              href="https://wa.me/5516997054012"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative overflow-hidden poppins-font font-semibold text-sm sm:text-base bg-gold-primary text-[#0e0e0e] px-6 py-3 rounded-md group"
            >
              {/* TEXTO */}
              <span className="relative z-10">
                Falar no WhatsApp
              </span>

              {/* SHEEN EFFECT */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700" />
              </span>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
