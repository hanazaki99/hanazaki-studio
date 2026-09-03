"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

import {
  ChicagoContainerAnimation,
  ChicagoItemAnimation,
} from "@/constants/framer/chicago-animations";

export function Chicago() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }

  function handleEnded() {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <section className="w-full px-6 py-20 sm:px-16 sm:py-28 lg:py-32">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={ChicagoContainerAnimation}
        className="w-full max-w-6xl mx-auto flex flex-col items-center gap-y-12 lg:flex-row lg:gap-x-16 lg:items-center lg:justify-center"
      >
        {/* VÍDEO COM BORDA DOURADA */}
        <motion.div
          variants={ChicagoItemAnimation}
          className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shrink-0 bg-black ring-1 ring-gold-primary/40 shadow-[0_0_50px_-10px_rgba(185,165,104,0.35)]"
        >
          <video
            ref={videoRef}
            src="/chicago.webm"
            poster="/images/chicago-poster.webp"
            controls={isPlaying}
            playsInline
            preload="metadata"
            onEnded={handleEnded}
            className="w-full h-full object-cover"
          />

          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Reproduzir vídeo de Chicago"
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group cursor-pointer"
            >
              <span className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gold-primary/90 group-hover:bg-gold-primary transition-colors">
                <Play
                  size={28}
                  className="text-white fill-white ml-1"
                />
              </span>
            </button>
          )}
        </motion.div>

        {/* TEXTO */}
        <motion.div
          variants={ChicagoItemAnimation}
          className="flex flex-col justify-center gap-y-6 lg:max-w-xl"
        >
          <h2 className="poppins-font text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            <span className="text-gold-primary">Hanazaki na</span>
            <br />
            <span className="text-light-primary">Expo Build Chicago 2025</span>
          </h2>

          <div className="w-12 h-px bg-gold-primary/60" />

          <p className="poppins-font text-base font-normal text-light-primary leading-relaxed sm:text-lg">
            Em 2025 estivemos na Expo Build Chicago, apresentando experiências
            interativas em Unreal Engine ao mercado norte-americano. Passo
            concreto no caminho de mostrar a tecnologia brasileira pra fora
            do país.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
