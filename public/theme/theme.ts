"use client";

import { Theme, createTheme, responsiveFontSizes } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    bg: Palette["primary"];
  }

  interface PaletteOptions {
    bg?: PaletteOptions["primary"];
  }
}

const theme: Theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#8d7d70",
    },
    secondary: {
      main: "#5a6f55",
    },
    bg: {
      main: "#edd6c8",
    },
  },
});

export default responsiveFontSizes(theme);
