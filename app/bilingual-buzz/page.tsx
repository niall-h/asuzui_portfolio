"use client";

import { Box, Container } from "@mui/material";
import { NavButton } from "../components/Navbar";
import { useRef, useEffect } from "react";
import Info from "./components/Info";
import Episodes from "./components/Episodes";

export default function BilingualBuzz() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const draw = (context: CanvasRenderingContext2D) => {
    const height = 350;
    const width = context.canvas.width;

    context.fillStyle = "#f0edeb";
    context.beginPath();
    context.moveTo(0, height / 4);
    context.bezierCurveTo(width / 4, 0, width / 2, height, width, height / 2);
    context.lineTo(width, height);
    context.lineTo(0, height);
    context.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext("2d");
    if (!context) return;

    draw(context);
  }, []);

  return (
    <>
      <Box bgcolor="bb.main">
        <Container
          disableGutters
          maxWidth="xl"
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <NavButton
            href="/"
            buttonProps={{ sx: { zIndex: 2, m: 7, position: "absolute" } }}
            typographyProps={{ variant: "h4", color: "bg.main" }}
          >
            Home
          </NavButton>
          <video
            width="100%"
            src={"/assets/bb/Video1.mp4"}
            autoPlay
            loop
            preload="auto"
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </Container>
        <Box
          position="relative"
          height={350}
          display={{ xs: "none", md: "flex" }}
        >
          <canvas ref={canvasRef} height={350} />
        </Box>
      </Box>
      <Info />
      <Episodes />
    </>
  );
}
