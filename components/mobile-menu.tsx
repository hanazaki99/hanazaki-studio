"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scroller } from "react-scroll";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  MenuAnimation,
  MobileLinksAnimation,
  OverlayAnimaiton,
} from "@/constants/framer/header-animations";

export function MobileMenu() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen(true);
    disableMouse();
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
    disableMouse();
  }

  function handleContact() {
    handleCloseMenu();
    disableMouse();

    setTimeout(() => {
      scroller.scrollTo("contact", {
        smooth: "easeInOutCubic",
      });
    }, 1000);
  }

  function disableMouse() {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 2100);
  }

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        variants={MenuAnimation}
        className="block lg:hidden"
      >
        <Button
          disabled={isAnimating}
          size="icon"
          variant="link"
          onClick={handleOpenMenu}
          className="flex lg:hidden disabled:opacity-100"
        >
          <Menu color="#B9A568" size="35px" />
        </Button>
      </motion.div>

      <AnimatePresence mode="popLayout">
        {isMenuOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={OverlayAnimaiton}
            className="w-screen h-screen px-6 py-6 bg-gray-secondary fixed overflow-x-hidden top-0 left-0 right-0 bottom-0 z-50 sm:px-16 sm:py-14 lg:hidden"
          >
            <div className="w-full h-full flex flex-col">
              
              {/* BOTÃO FECHAR */}
              <div className="w-full flex justify-end items-center">
                <Button
                  disabled={isAnimating}
                  size="icon"
                  variant="link"
                  onClick={handleCloseMenu}
                  className="disabled:opacity-100"
                >
                  <X color="#B9A568" size="35px" />
                </Button>
              </div>

              {/* LINKS */}
              <div className="flex flex-1 w-full flex-col items-center justify-center space-y-9 sm:space-y-12">
                
                {/* INICIO */}
                <motion.div variants={MobileLinksAnimation}>
                  <Link
                    href="/"
                    onClick={handleCloseMenu}
                    className={cn(
                      "poppins-font text-white text-2xl font-medium text-center transition-colors relative sm:text-3xl",
                      {
                        "text-gold-primary before:content-[''] before:w-3 before:h-[1px] before:bg-gold-primary before:absolute before:top-1/2 before:-left-4 after:content-[''] after:w-3 after:h-[1px] after:bg-gold-primary after:absolute after:top-1/2 after:-right-4":
                          pathname === "/",
                        "pointer-events-none": isAnimating,
                      }
                    )}
                  >
                    Inicio
                  </Link>
                </motion.div>

                {/* SOBRE */}
                <motion.div variants={MobileLinksAnimation}>
                  <Link
                    href="/sobre"
                    onClick={handleCloseMenu}
                    className={cn(
                      "poppins-font text-white text-2xl font-medium text-center transition-colors relative sm:text-3xl",
                      {
                        "text-gold-primary before:content-[''] before:w-3 before:h-[1px] before:bg-gold-primary before:absolute before:top-1/2 before:-left-4 after:content-[''] after:w-3 after:h-[1px] after:bg-gold-primary after:absolute after:top-1/2 after:-right-4":
                          pathname === "/sobre",
                        "pointer-events-none": isAnimating,
                      }
                    )}
                  >
                    Sobre
                  </Link>
                </motion.div>

                {/* CONTATO */}
                <motion.div variants={MobileLinksAnimation}>
                  <Button
                    disabled={isAnimating}
                    onClick={handleContact}
                    variant="link"
                    className="no-underline poppins-font text-white text-2xl font-medium text-center transition-colors relative sm:text-3xl disabled:opacity-100"
                  >
                    Contato
                  </Button>
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
