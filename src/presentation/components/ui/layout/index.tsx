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
    <main className="h-screen flex flex-col">
      <Navbar />

      <div className="h-full">{children}</div>
      <footer className="w-full flex flex-col	items-center justify-center py-5">
        <p>@harolbytes</p>
      </footer>
    </main>
  );
}
