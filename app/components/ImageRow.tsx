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
    <Box width="inherit" overflow="hidden">
      <ImageList
        cols={12}
        gap={30}
        rowHeight="auto"
        sx={{
          width: "fit-content",
          mt: 10,
          animation: `${scrollLeft} 40s linear infinite`,
        }}
      >
        {row2.map((image: any) => (
          <ImageBox image={image} />
        ))}
        {row2.map((image: any) => (
          <ImageBox image={image} />
        ))}
      </ImageList>
      <Box
        width="inherit"
        overflow="hidden"
        zIndex={2}
        top="60%"
        position="absolute"
      >
        <Typography
          minWidth="fit-content"
          noWrap
          variant="h2"
          color="white"
          sx={{
            animation: `${scrollRight} 60s linear infinite`,
          }}
        >
          Welcome to my website Welcome to my website Welcome to my website
          Welcome to my website
        </Typography>
      </Box>

      <ImageList
        cols={12}
        gap={30}
        rowHeight="auto"
        sx={{
          width: "fit-content",
          mb: 10,
          animation: `${scrollRight} 40s linear infinite`,
          overflow: "hidden",
        }}
      >
        {row1.map((image: any) => (
          <ImageBox image={image} />
        ))}
        {row1.map((image: any) => (
          <ImageBox image={image} />
        ))}
      </ImageList>
    </Box>
  );
}
