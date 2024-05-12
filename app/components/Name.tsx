import { Box, Icon, Typography } from "@mui/material";
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
        sx={{ zIndex: 2 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <strong>Ami</strong>
        <Box mx={{ md: 2, xs: 0 }} position="relative" width={120} height={120}>
          <Image
            src={asuzui_logo}
            alt="logo"
            fill
            style={{ textAlign: "center" }}
          />
        </Box>
        <strong>Suzui</strong>
      </Typography>
    </Box>
  );
}
