"use client";

import {
  Box,
  Container,
  Divider,
  Fade,
  Grid,
  IconButton,
  Typography,
  typographyClasses,
} from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useCallback, useEffect, useRef, useState } from "react";
import headshot from "@/public/images/asuzui_profile.jpg";
import Image from "next/image";
// @ts-ignore
import ReactCurvedText from "react-curved-text";
import fonts from "@/public/theme/fonts/fonts";

export default function Bio() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [width, setWidth] = useState(0);
  const [profileHeight, setProfileHeight] = useState(0);
  const profileRef = useRef<any>(null);

  const draw = (context: CanvasRenderingContext2D) => {
    const height = context.canvas.height;
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
    if (!profileRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setWidth(window.innerWidth);
      setProfileHeight(profileRef.current.clientHeight);
    });
    resizeObserver.observe(profileRef.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

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
    <Box height="fit-content" mb={{ md: -24, xs: 3 }} overflow="hidden">
      <Container maxWidth="xl" sx={{ height: "fit-content" }} disableGutters>
        <Grid container>
          {/* normal sizes */}
          <Grid
            ref={profileRef}
            item
            md={5}
            position="relative"
            display={{ xl: "none", md: "block", sm: "none" }}
          >
            <Image
              src={headshot}
              alt="headshot"
              fill
              style={{
                borderTopRightRadius: "100%",
                objectFit: "cover",
                objectPosition: "center",
                zIndex: 0,
              }}
            />
            <Box position="absolute" maxHeight="100%">
              <ReactCurvedText
                width={width * (5 / 12)}
                height={profileHeight}
                cx={0}
                cy={profileHeight}
                rx={width * (5 / 12)}
                ry={profileHeight}
                startOffset={1300}
                reversed={true}
                text="Hello! My name is Ami!"
                textProps={{
                  style: {
                    fontSize: 50,
                    fontFamily: fonts.theSeasons.style.fontFamily,
                  },
                }}
                textPathProps={{
                  fill: "#8d7d70",
                }}
                tspanProps={{ dy: -20 }}
                ellipseProps={null}
                svgProps={null}
              />
            </Box>
          </Grid>
          {/* huge sizes */}
          <Grid
            item
            md={5}
            position="relative"
            display={{ xl: "block", md: "none", sm: "flex" }}
          >
            <Image
              src={headshot}
              alt="headshot"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                zIndex: 0,
              }}
            />
          </Grid>
          <Grid
            item
            md={7}
            px={{ md: 10, xs: 3 }}
            zIndex={1}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography
              gutterBottom
              variant="h3"
              color="primary"
              display={{ xl: "block", md: "none" }}
            >
              Hello! My name is Ami!
            </Typography>
            <Typography gutterBottom variant="body1" color="primary" mb={3}>
              I&apos;m Ami Suzui, and I&apos;m a student at California State
              University Fullerton studying Communication-Entertainment and
              Tourism. I am also in the process of obtaining my Digital Media
              Certificate. As an event coordinator on campus, I manage various
              projects, including large scale concerts, night markets, themed
              nights, and numerous others! I aim to curate impactful events that
              resonate with the community, fostering a sense of belonging and
              excitement among participants while leaving a lasting impression
              on the world around us.
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
              Through the courses I&apos;ve pursued at CSUF, I&apos;ve engaged
              in various projects showcasing my proficiency in digital media
              design, encompassing tasks like brand conceptualization, logo
              crafting, and mock-up development. Leveraging the Adobe Cloud
              suite, I&apos;ve found immense gratification in expressing my
              creativity, collaborating with clients, and honing my design
              expertise.
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
      </Container>
      <Box
        position="relative"
        height={350}
        top={-180}
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
            sx={{ display: "flex", height: "50%", alignItems: "end" }}
          >
            <Divider
              orientation="vertical"
              variant="inset"
              flexItem
              sx={{
                ml: 20,
                borderRightWidth: 4,
                borderColor: "bg.main",
              }}
            />
            <Typography variant="h3" color="bg.main" ml={5}>
              Projects
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
