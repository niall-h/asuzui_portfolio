"use client";

import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  keyframes,
} from "@mui/material";
import Image from "next/image";

interface ImageBoxProps {
  image: any;
}

const images_row1 = require.context("../../public/images/carousel/row1", true);
const images_row2 = require.context("../../public/images/carousel/row2", true);
const row1 = images_row1
  .keys()
  .map((image: any) => ({ img: images_row1(image), title: image }));
const row2 = images_row2
  .keys()
  .map((image: any) => ({ img: images_row2(image), title: image }));

const ImageBox = ({ image }: ImageBoxProps) => (
  <ImageListItem
    key={image.title}
    sx={{
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.5,
      transition: "all 0.6s ease",
      "&:hover": {
        opacity: 1,
      },
    }}
  >
    <Image src={image.img} alt={image.title} height={300} />
  </ImageListItem>
);

export default function ImageRow() {
  const scrollLeft = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(-50%)}
  `;

  const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
	100% { transform: translateX(0%)}
  `;

  return (
    <Box width="inherit" overflow="hidden" my={10}>
      <Box maxWidth="100vw" height={0} zIndex={2} position="relative">
        <Typography
          minWidth="fit-content"
          noWrap
          variant="h2"
          color="white"
          paddingTop={3}
          sx={{
            animation: `${scrollRight} 120s linear infinite`,
            zIndex: 4,
          }}
        >
          Welcome to my website Welcome to my website Welcome to my website
          Welcome to my website Welcome to my website Welcome to my website
          Welcome to my website Welcome to my website Welcome to my website
          Welcome to my website Welcome to my website Welcome to my website
        </Typography>
      </Box>
      <ImageList
        cols={24}
        gap={30}
        rowHeight="auto"
        sx={{
          width: "fit-content",
          animation: `${scrollLeft} 80s linear infinite`,
          overflow: "hidden",
        }}
      >
        {row1.map((image: any) => (
          <ImageBox image={image} key={image.title} />
        ))}
        {row1.map((image: any) => (
          <ImageBox image={image} key={image.title} />
        ))}
        {row1.map((image: any) => (
          <ImageBox image={image} key={image.title} />
        ))}
        {row1.map((image: any) => (
          <ImageBox image={image} key={image.title} />
        ))}
      </ImageList>
      <ImageList
        cols={24}
        gap={30}
        rowHeight="auto"
        sx={{
          width: "fit-content",
          animation: `${scrollRight} 80s linear infinite`,
        }}
      >
        {row2.map((image: any) => (
          <ImageBox image={image} key={image.title} />
        ))}
        {row2.map((image: any) => (
          <ImageBox image={image} key={image.title} />
        ))}
        {row2.map((image: any) => (
          <ImageBox image={image} key={image.title} />
        ))}
        {row2.map((image: any) => (
          <ImageBox image={image} key={image.title} />
        ))}
      </ImageList>
    </Box>
  );
}
