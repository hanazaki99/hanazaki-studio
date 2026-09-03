"use client";

import { Hero } from "@/app/(website)/_components/hero";
import { LogosBanner } from "@/app/(website)/_components/logos-banner";
import { VideoAbout } from "@/app/(website)/_components/video-about";
import { About } from "@/app/(website)/_components/about";
import { Services } from "@/app/(website)/_components/services";
import { Chicago } from "@/app/(website)/_components/chicago";

export default function Home() {
  return (
    <>
      <Hero />
      <LogosBanner />
      <VideoAbout />
      <About />
      <Services />
      <Chicago />
    </>
  );
}
