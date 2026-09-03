"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SyntheticEvent, useState } from "react";

import {
  modalAnimation,
  overlayAnimation,
} from "@/constants/framer/video-modal-animation";

interface VideoModalProps {
  isModalOpen: boolean;
  CloseModal: (e: SyntheticEvent) => void;
}

export function VideoModal({ isModalOpen, CloseModal }: VideoModalProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          onClick={CloseModal}
          key="video-modal-key"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={overlayAnimation}
          className="w-screen h-screen bg-[#0E0E0E]/80 fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center p-6"
        >
          <motion.div
            onClick={(e: SyntheticEvent) => e.stopPropagation()}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={modalAnimation}
            className="relative w-[min(90vw,calc(85vh*9/16))] aspect-[9/16] bg-gray-primary rounded-2xl overflow-hidden"
          >
            {/* LOADER */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-primary z-10">
                <div className="w-10 h-10 border-2 border-gold-primary border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {/* IFRAME */}
            <iframe
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              src="https://player.vimeo.com/video/1186260977?h=bb4ba16741&autoplay=1&title=0&byline=0&portrait=0"
              title="Sala Imersiva Hanazaki Studio"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
