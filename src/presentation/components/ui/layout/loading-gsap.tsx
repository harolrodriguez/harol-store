"use client";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./loading.sass";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { gsap, Power0 } from "gsap";

export function LoadingLayout({ loading, setShow }: any) {
  const [heroBackground, setHeroBackground] = useState(false);
  const background_image = "/assets/hero-home.jpg";

  const [percent, setPercent] = useState(1);
  const [loadPercent, setLoadPercent] = useState(0);
  const [fullStage, setFullStage] = useState(false);

  const duration = 2000; // Duration of the entire animation in miliseconds (3000ms)
  const timelineRef = useRef(gsap.timeline());

  useLayoutEffect(() => {
    const loadImage = new Image();

    loadImage.src = background_image;
    loadImage.onload = () => setHeroBackground(true);
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({
      onUpdate: () => {
        const progress = timeline.progress();
        const roundedProgress = Math.round(progress * 100);

        switch (roundedProgress) {
          case 3:
            setPercent(7);
            setLoadPercent(90);
            break;

          case 10:
            setPercent(22);
            break;

          case 22:
            setPercent(43);
            break;

          case 30:
            setPercent(57);
            break;

          case 50:
            setPercent(61);
            break;

          case 60:
            setPercent(73);
            break;

          case 73:
            setPercent(92);
            break;
        }
        if (roundedProgress >= 92 && roundedProgress <= 97)
          setPercent(roundedProgress);
      },

      onComplete: () => {
        if (!loading) {
          setPercent(97);
          setLoadPercent(97);
        }
      },
    });

    timeline.to({}, { duration: duration / 1000, ease: Power0.easeNone });
    timelineRef.current = timeline;

    return () => {
      timeline.kill();
    };
  }, [duration]);

  useEffect(() => {
    if (heroBackground && percent >= 97 && !loading) {
      setPercent(100);
      setLoadPercent(100);
      setFullStage(true);

      const overlay = setTimeout(() => {
        setShow(false);
      }, 500);

      return () => clearTimeout(overlay);
    }
  }, [loading, percent, fullStage]);

  return (
    <div className="loadingview">
      <div
        className={twMerge(
          clsx(
            { "loadingview__loaderbg--finish": fullStage },
            "loadingview__loaderbg",
          ),
        )}
        style={{
          transform: `scaleX(${loadPercent / 100})`,
        }}
      />
      <div className="relative h-full w-full">
        <div
          className={clsx("loadingview__percentage-text", {
            "loadingview__percentage-text--finish": fullStage,
          })}
        >
          {percent}%
        </div>
        <div
          className={clsx("loadingview__bottom-text", {
            "loadingview__bottom-text--finish": fullStage,
          })}
        >
          <div>© 2024 Portfolio by @harolbytes</div>
        </div>
      </div>
    </div>
  );
}
