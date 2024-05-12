"use client";

import {
  Box,
  ButtonBase,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import eventGallery from "@/public/images/EventGallery(Photo).jpg";
import mediaDesign from "@/public/images/Digital Media(Photo).jpeg";
import podcast from "@/public/images/PODCAST(photo).jpg";
import { useEffect, useRef, useState } from "react";

interface EllipseButtonProps {
  text: string;
  image: any;
}

const EllipseButton = ({ text, image }: EllipseButtonProps) => {
  return (
    <ButtonBase
      sx={{
        height: { md: 500, xs: 250 },
        width: "100%",
        borderRadius: { md: "100%", xs: "5%" },
        bgcolor: "bg.main",
        transition: "all 0.3s ease",
        overflow: "hidden",
        "&:hover": {
          boxShadow: "5px 5px 30px white",
          transition: "all 0.3s ease",
        },
      }}
    >
      <Image
        src={image}
        alt="Event Gallery"
        fill
        style={{
          borderRadius: "inherit",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.3,
        }}
      />
      <Typography variant="h3" color="secondary" zIndex={1}>
        {text}
      </Typography>
    </ButtonBase>
  );
};

export default function Projects() {
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
    <Box
      bgcolor="secondary.main"
      mt={2}
      height={{ md: 1650, xs: "fit-content" }}
    >
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ display: { md: "flex", xs: "block" } }}
      >
        <Typography
          variant="h3"
          color="bg.main"
          width="100%"
          textAlign="center"
          pt={4}
          display={{ md: "none", xs: "block" }}
        >
          Projects
        </Typography>
        <Divider
          orientation="vertical"
          variant="inset"
          flexItem
          sx={{
            ml: 20,
            borderRightWidth: 4,
            borderColor: "bg.main",
            display: { md: "block", xs: "none" },
          }}
        />
        <Grid container p={{ md: 10, xs: 4 }} rowSpacing={{ md: 0, xs: 5 }}>
          <Grid item md={5}></Grid>
          <Grid item md={7} xs={12}>
            <EllipseButton text="Event Gallery" image={eventGallery} />
          </Grid>
          <Grid item md={7} xs={12}>
            <EllipseButton text="Podcast" image={podcast} />
          </Grid>
          <Grid item md={5}></Grid>
          <Grid item md={5}></Grid>
          <Grid item md={7} xs={12}>
            <EllipseButton text="Media Design" image={mediaDesign} />
          </Grid>
        </Grid>
      </Container>
      <Box
        position="relative"
        height={350}
        top={-250}
        display={{ xs: "none", md: "flex" }}
      >
        <canvas ref={canvasRef} height={350} />
        <Box
          width="100%"
          height={350}
          position="absolute"
          display={{ md: "flex", xs: "none" }}
          alignItems="end"
        >
          <Container
            disableGutters
            maxWidth="xl"
            sx={{ display: "flex", height: "79%", alignItems: "end" }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                ml: 20,
                borderRightWidth: 4,
                borderColor: "primary.main",
              }}
            />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
