"use client";

import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import fonts from "@/public/theme/fonts/fonts";

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
    fontFamily: [
      fonts.theSeasons.style.fontFamily,
      fonts.bellMT.style.fontFamily,
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    body1: { fontFamily: fonts.bellMT.style.fontFamily },
    button: {
      textTransform: "none",
    },
    htmlFontSize: 13,
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
