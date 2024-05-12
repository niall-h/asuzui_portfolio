import { Container } from "@mui/material";
import Bio from "./components/Bio";
import ImageRow from "./components/ImageRow";
import Name from "./components/Name";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Name />
      <ImageRow />
      <Bio />
      <Projects />
      <Contact />
    </>
  );
}
