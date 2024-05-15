"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { NavButton } from "../components/Navbar";
import Image from "next/image";
import { RefObject, useRef, useState } from "react";
import { InfoCard, images, infoCards } from "./components/data";

export default function DigitalMedia() {
  const personalRef = useRef(null);
  const medicellRef = useRef(null);
  const sentienceRef = useRef(null);
  const refs = [personalRef, medicellRef, sentienceRef];

  const [isVisibile, setVisible] = useState([false, false, false]);

  const handleClick = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container disableGutters maxWidth="xl">
      <Box width="100%" display="flex">
        <Box p={{ md: 10, xs: 2 }} width={{ md: "80%", xs: "100%" }}>
          <Box textAlign="center" width="fit-content">
            <Typography
              variant="h2"
              fontWeight={700}
              color="secondary"
              gutterBottom
            >
              Media Design Portfolio
            </Typography>
            <Typography
              variant="h3"
              fontWeight={200}
              color="secondary"
              gutterBottom
            >
              by Ami Suzui
            </Typography>
            <Button
              variant="outlined"
              onClick={() => handleClick(personalRef)}
              sx={{
                m: { md: 3, xs: 1 },
                mb: { md: 0 },
                p: { md: 2, xs: 1 },
                borderColor: "secondary.main",
                borderRadius: 10,
                color: "secondary.main",
                "&:hover": {
                  borderColor: "secondary.main",
                  bgcolor: "secondary.main",
                  color: "bg.main",
                },
              }}
            >
              <Typography variant="body1">Personal Branding</Typography>
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleClick(medicellRef)}
              sx={{
                m: { md: 3, xs: 1 },
                mb: { md: 0 },
                p: { md: 2, xs: 1 },
                borderColor: "secondary.main",
                borderRadius: 10,
                color: "secondary.main",
                "&:hover": {
                  borderColor: "secondary.main",
                  bgcolor: "secondary.main",
                  color: "bg.main",
                },
              }}
            >
              <Typography variant="body1">Medicell Catalog</Typography>
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleClick(sentienceRef)}
              sx={{
                m: { md: 3, xs: 1 },
                mb: { md: 0 },
                p: { md: 2, xs: 1 },
                borderColor: "secondary.main",
                borderRadius: 10,
                color: "secondary.main",
                "&:hover": {
                  borderColor: "secondary.main",
                  bgcolor: "secondary.main",
                  color: "bg.main",
                },
              }}
            >
              <Typography variant="body1">Sentience Brand Logo</Typography>
            </Button>
          </Box>
        </Box>
        <Box
          width="20%"
          display={{ md: "flex", xs: "none" }}
          justifyContent="end"
          height="fit-content"
        >
          <NavButton
            href="/"
            buttonProps={{ sx: { m: 7 } }}
            typographyProps={{ variant: "h4", color: "secondary" }}
          >
            Home
          </NavButton>
        </Box>
      </Box>
      <Grid container px={10}>
        {images.map((image: any) => (
          <Grid
            key={image.alt}
            item
            md={6}
            height={400}
            p={3}
            position="relative"
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                p: 0,
              },
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center",
                padding: "inherit",
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Box p={10}>
        {infoCards.map((infoCard: InfoCard, index: number) => {
          return (
            <Box ref={refs[index]} mt={20} key={infoCard.title}>
              <Typography variant="h3" color="secondary" gutterBottom>
                {infoCard.title}
              </Typography>
              <Box height={{ md: 900, xs: "fit-content" }} position="relative">
                <Image
                  src={infoCard.imgSrc}
                  alt={infoCard.imgAlt}
                  fill
                  objectFit="contain"
                  objectPosition="center"
                />
                <Box
                  width="100%"
                  height="100%"
                  position="absolute"
                  p={20}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexWrap="wrap"
                  sx={{
                    opacity: 0,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bgcolor="secondary.main"
                    zIndex={0}
                    sx={{ opacity: 0.8 }}
                  />
                  <Typography
                    width="inherit"
                    variant="h6"
                    textAlign="center"
                    color="bg.main"
                    mb={10}
                    zIndex={1}
                  >
                    {infoCard.description}
                  </Typography>
                  <Button
                    variant="contained"
                    href={infoCard.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      border: "2px solid",
                      borderColor: "bg.main",
                      bgcolor: "transparent",
                      textAlign: "center",
                      color: "bg.main",
                      borderRadius: 10,
                      "&:hover": {
                        borderColor: "secondary.main",
                        bgcolor: "bg.main",
                        color: "secondary.main",
                      },
                    }}
                  >
                    <Typography variant="h6">
                      Click here to view files
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
