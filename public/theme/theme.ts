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

  interface Palette {
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }

  interface Palette {
    bb: Palette["primary"];
  }

  interface PaletteOptions {
    bb?: PaletteOptions["primary"];
  }
}

const theme: Theme = createTheme({
  typography: {
    fontFamily: [
      fonts.theSeasons.style.fontFamily,
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
    body1: {
      fontFamily: "Times New Roman, serif",
    },
    h6: {
      fontFamily: "Times New Roman, serif",
    },
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
    tertiary: {
      main: "#edd6c8",
    },
    bg: {
      main: "#f0edeb",
    },
    bb: {
      main: "#A4C0CA",
    },
  },
});

export default responsiveFontSizes(theme);
