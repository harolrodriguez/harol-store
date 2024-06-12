"use client";

import { useState, useEffect } from "react";

// import { LoadingLayout } from "./loading";
import { LoadingLayout } from "./loading-gsap";

import { Navbar } from "@/presentation/components/ui/navbar";

// import { LoadingLayout } from "@/components/Loading";

export default function MainLayout({ children }: any) {
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const loaded = typeof window;

  useEffect(() => {
    if (loaded !== "undefined") {
      setLoading(false);
    }
  }, [loaded]);

  return showLoading ? (
    <LoadingLayout loading={loading} setShow={setShowLoading} />
  ) : (
    <>
      <Navbar />
      {children}
    </>
  );
}
