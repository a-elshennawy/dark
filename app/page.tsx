"use client";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Work from "@/components/Work/Work";
import ScrollBar from "@/components/ScrollBar/ScrollBar";

import { useEffect } from "react";
import CommBar from "@/components/CommBar/CommBar";

export default function Home() {
  useEffect(() => {
    // @ts-expect-error - no props needed here
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap loaded"))
      .catch(console.error);
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Work />
      <ScrollBar />
      <CommBar />
    </>
  );
}
