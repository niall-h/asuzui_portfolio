import localFont from "next/font/local";

const theSeasons = localFont({
  src: [
    {
      path: "./the-seasons/The Seasons Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./the-seasons/The Seasons Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./the-seasons/The Seasons Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./the-seasons/The Seasons Light.ttf",
      weight: "200",
      style: "light",
    },
  ],
});

export default { theSeasons };
