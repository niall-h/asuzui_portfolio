import { Metadata } from "next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/public/theme/theme";

export const metadata: Metadata = {
  title: "Ami Suzui",
  description: "Ami Suzui's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#f0edeb" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
