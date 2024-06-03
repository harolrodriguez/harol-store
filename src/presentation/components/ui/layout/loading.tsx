"use client";
import { useState, useLayoutEffect, useEffect } from "react";
import "./loading.sass";
import clsx from "clsx";

export function LoadingLayout({ loading, setShow }: any) {
  const [heroBackground, setHeroBackground] = useState(false);
  const background_image = "/assets/hero-home.jpg";

  const [percent, setPercent] = useState(0);
  const [fullStage, setFullStage] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);
  const [showText, setShowText] = useState(true);

  useLayoutEffect(() => {
    const loadImage = new Image();

    loadImage.src = background_image;
    loadImage.onload = () => setHeroBackground(true);

    const stage1 = setTimeout(() => {
      setPercent(9);
      setLoadPercent(90);
    }, 50);

    const stage2 = setTimeout(() => {
      setPercent(27);
    }, 200);

    const stage3 = setTimeout(() => {
      setPercent(41);
    }, 600);

    const stage4 = setTimeout(() => {
      setPercent(54);
    }, 700);

    const stage5 = setTimeout(() => {
      setPercent(69);
    }, 1000);

    const stage6 = setTimeout(() => {
      setPercent(78);
    }, 1250);

    const stage7 = setTimeout(() => {
      setPercent(83);
    }, 1500);

    const stage8 = setTimeout(() => {
      setPercent(92);
      setFullStage(true);
    }, 2000);

    return () => {
      clearTimeout(stage1);
      clearTimeout(stage2);
      clearTimeout(stage3);
      clearTimeout(stage4);
      clearTimeout(stage5);
      clearTimeout(stage6);
      clearTimeout(stage7);
      clearTimeout(stage8);
    };
  }, []);

  useEffect(() => {
    const lastStage = setTimeout(() => {
      if (percent >= 90 && fullStage && heroBackground) {
        setPercent(100);
        setLoadPercent(100);
      }
    }, 250);

    return () => {
      clearTimeout(lastStage);
    };
  }, [percent, fullStage, heroBackground]);

  useEffect(() => {
    if (!loading && percent >= 100) {
      setShowText(false);
    }
  }, [loading, percent, showText]);

  useEffect(() => {
    const overlay = setTimeout(() => {
      if (!showText) {
        setShow(false);
      }
    }, 500);

    return () => clearTimeout(overlay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showText]);

  return (
    <div className="loadingview">
      <div
        className={clsx(
          { "loadingview__loaderbg--finish": fullStage },
          "loadingview__loaderbg",
        )}
        style={{ transform: `scaleX(${loadPercent}%)` }}
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
