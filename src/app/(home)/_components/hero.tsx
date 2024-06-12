"use client";
import Reveal, { Fade, Slide } from "react-awesome-reveal";

import { revealToBottom } from "@/shared/util/animation";

export default function HeroHome() {
  const hideAnimation = revealToBottom();

  return (
    <section className="home-hero-section snap-start snap-always">
      <Fade triggerOnce className="h-full w-full" duration={2500}>
        <Slide
          triggerOnce
          className="h-full w-full"
          direction="down"
          duration={500}
        >
          <div className="home-hero-section__bg" />
        </Slide>
      </Fade>

      <Reveal
        triggerOnce
        className="home-hero-section__reveal"
        duration={1500}
        keyframes={hideAnimation}
      >
        <div className="w-full h-full" />
      </Reveal>

      <div className="home-hero-section__content">
        <Fade
          triggerOnce
          className="text-stroke-fill-dark/5 text-stroke-[1px] sm:text-stroke-[2px] text-stroke-light w-fit"
          delay={500}
          direction="up"
          duration={1000}
        >
          Grunge
        </Fade>
        <Fade
          triggerOnce
          className="text-light"
          delay={500}
          direction="up"
          duration={1500}
        >
          Collection
        </Fade>
      </div>
    </section>
  );
}
