import { Box, Typography } from "@mui/material";
import Image from "next/image";
import asuzui_logo from "@/public/images/asuzui_logo.svg";

export default function Name() {
  return (
    <Box
      height={500}
      zIndex={-1}
      alignContent="center"
      textAlign="center"
      sx={{
        backgroundImage: "url('/images/ocean_bg.png')",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundBlendMode: "lighten",
        backgroundPosition: "50% 47%",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <Typography
        variant="h1"
        style={{ zIndex: 2 }}
        display="flex"
        justifyContent="center"
      >
        Ami
        <Image
          src={asuzui_logo}
          alt="logo"
          height={100}
          width={100}
          style={{ textAlign: "center", margin: 10 }}
        />
        Suzui
      </Typography>
    </Box>
  );
}
