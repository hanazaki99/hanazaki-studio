import Image from "next/image";
import Link from "next/link";
import { FooterForm } from "./footer-form";
import { SocialMediaLink } from "./social-media-link";

export function Footer() {
  return (
    <footer className="w-full mt-12 sm:mt-24">
      <div
        className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center gap-8
          sm:flex-row sm:items-stretch sm:gap-10 sm:px-16"
      >
        {/* LOGO */}
        <Link
          href="/"
          className="relative shrink-0 w-28 h-28 sm:w-36 sm:h-32 lg:w-48 lg:h-48
            self-center"
        >
          <Image
            src="/images/logo-white.svg"
            alt="Hanazaki Studio"
            fill
            className="object-contain"
          />
        </Link>

        {/* DIVIDER */}
        <div className="hidden sm:block w-px bg-gold-primary self-stretch" />

        {/* FORM — flex-1 sem max-width interno, centralizado por dentro */}
        <div className="flex-1 w-full flex justify-center">
          <div className="w-full max-w-md">
            <FooterForm />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="hidden sm:block w-px bg-gold-primary self-stretch" />

        {/* SOCIAL */}
        <div
          className="flex flex-row justify-between w-full max-w-xs
            sm:flex-col sm:justify-center sm:gap-10 sm:w-auto sm:shrink-0
            self-center"
        >
          <SocialMediaLink
            href="https://wa.me/5516997054012?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+seu+servi%C3%A7o."
            alt="Whatsapp"
            imageSrc="/images/whatsapp.svg"
            text="(16) 99705 - 4012"
          />
          <SocialMediaLink
            href="https://www.instagram.com/hanazaki_studio/"
            alt="Instagram"
            imageSrc="/images/instagram.svg"
            text="@hanazaki_studio"
          />
          <SocialMediaLink
            href="https://www.linkedin.com/in/leonardo-hanazaki-50468a240/"
            alt="Linkedin"
            imageSrc="/images/linkedin.svg"
            text="Hanazaki Studio"
          />
        </div>
      </div>

      {/* BOTTOM — mesmo max-w-6xl para alinhar com o topo */}
      <div
        className="w-full max-w-6xl mx-auto mt-12 py-6 border-t border-light-primary px-6
          flex items-center justify-center sm:px-16"
      >
        <span className="poppins-font text-sm text-light-primary font-medium sm:text-base">
          Hanazaki Studio ©2026
        </span>
      </div>
    </footer>
  );
}
