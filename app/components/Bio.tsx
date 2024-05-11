"use client";

import { Box, Fade, Grid, IconButton, Typography } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useEffect, useRef } from "react";
import headshot from "@/public/images/asuzui_profile.jpg";
import Image from "next/image";

export default function Bio() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const draw = (context: CanvasRenderingContext2D) => {
    const height = 700;
    const width = context.canvas.width;

    context.fillStyle = "#5a6f55";
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
    canvas.width = canvas.offsetWidth;

    const context = canvas.getContext("2d");
    if (!context) return;

    draw(context);
  }, []);

  return (
    <Box height={{ lg: 800, md: "inherit" }}>
      <Box height={{ lg: 700, md: "inherit" }}>
        <Grid container>
          <Grid item lg={5} position="relative">
            <Image
              src={headshot}
              alt="headshot"
              fill
              style={{
                borderTopRightRadius: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Grid>
          <Grid
            item
            lg={7}
            px={{ lg: 10, xs: 3 }}
            zIndex={1}
            textAlign={{ xs: "center", lg: "left" }}
          >
            <Typography gutterBottom variant="body1" color="primary" mb={3}>
              I’m Ami Suzui, and I’m a student at California State University
              Fullerton studying Communication-Entertainment and Tourism. I am
              also in the process of obtaining my Digital Media Certificate. As
              an event coordinator on campus, I manage various projects,
              including large scale concerts, night markets, themed nights, and
              numerous others! I aim to curate impactful events that resonate
              with the community, fostering a sense of belonging and excitement
              among participants while leaving a lasting impression on the world
              around us.
            </Typography>
            <Typography gutterBottom variant="body1" color="primary" mb={3}>
              I also co-produced an English-learning podcast called Bilingual
              Buzz. Coming from a background enriched by Japanese and American
              cultures, I initiated this podcast to raise awareness and explore
              cultural nuances and disparities. Through personal experiences,
              observations, and discussions with my best friends, who also
              co-produced the platform, we aim to convey these insights in easy
              conversational English phrases, making it accessible for our
              Japanese audience to learn and understand.
            </Typography>
            <Typography gutterBottom variant="body1" color="primary" mb={3}>
              Through the courses I've pursued at CSUF, I've engaged in various
              projects showcasing my proficiency in digital media design,
              encompassing tasks like brand conceptualization, logo crafting,
              and mock-up development. Leveraging the Adobe Cloud suite, I've
              found immense gratification in expressing my creativity,
              collaborating with clients, and honing my design expertise.
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              color="primary"
              textAlign="center"
              mb={3}
            >
              Feel free to check out my projects!
            </Typography>
            <Box width="100%" display="flex" justifyContent="center">
              <Fade in={true} timeout={3000}>
                <IconButton color="secondary" size="large">
                  <ExpandCircleDownIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        position="relative"
        height={450}
        top={-350}
        display={{ xs: "none", lg: "block" }}
      >
        <canvas ref={canvasRef} height={450} />
      </Box>
    </Box>
  );
}
