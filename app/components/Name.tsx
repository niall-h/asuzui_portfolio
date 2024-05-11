import { Box, Typography } from "@mui/material";
import Image from "next/image";
import asuzui_logo from "@/public/images/asuzui_logo.svg";

export default function Name() {
  return (
    <Box
      height={400}
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
        variant="h2"
        style={{ zIndex: 2 }}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        Ami
        <Image
          src={asuzui_logo}
          alt="logo"
          height={120}
          width={120}
          style={{ textAlign: "center", margin: 13 }}
        />
        Suzui
      </Typography>
    </Box>
  );
}
