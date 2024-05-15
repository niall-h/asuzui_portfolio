"use client";

import Bio from "./components/Bio";
import ImageRow from "./components/ImageRow";
import Name from "./components/Name";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLElement>(null);

  return (
    <>
      <Navbar contactRef={contactRef} />
      <Name />
      <ImageRow />
      <Bio />
      <Projects />
      <Contact contactRef={contactRef} />
    </>
  );
}
