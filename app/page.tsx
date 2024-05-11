import { Container } from "@mui/material";
import Bio from "./components/Bio";
import ImageRow from "./components/ImageRow";
import Name from "./components/Name";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Name />
      <Container maxWidth="xl" disableGutters>
        <ImageRow />
        <Bio />
        <Projects />
      </Container>
    </>
  );
}
