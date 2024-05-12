"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  Typography,
  typographyClasses,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Contact() {
  return (
    <Box position="relative">
      <Divider
        orientation="horizontal"
        sx={{
          borderBottomWidth: 4,
          borderColor: "primary.main",
          position: "relative",
          display: { md: "flex", xs: "none" },
        }}
      />
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ height: "fit-content", display: { md: "flex", xs: "block" } }}
      >
        <Divider
          orientation="vertical"
          variant="inset"
          flexItem
          sx={{
            ml: 20,
            borderRightWidth: 4,
            borderColor: "primary.main",
            display: { md: "flex", xs: "none" },
          }}
        />
        <Grid container>
          <Grid item md={11} xs={9}>
            <Grid container sx={{ height: "100%" }}>
              <Grid item xs={12} md={7} display="flex">
                <Typography
                  variant="h2"
                  textAlign={{ md: "center", xs: "left" }}
                  alignContent="center"
                  width="100%"
                  color="primary"
                  px={{ md: 0, xs: 4 }}
                >
                  Contact
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderRightWidth: 4,
                    borderColor: "primary.main",
                    display: { md: "flex", xs: "none" },
                  }}
                />
              </Grid>
              <Grid
                item
                xs={9}
                md={4}
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
                px={{ md: 10, xs: 4 }}
                py={{ md: 10, xs: 0 }}
              >
                <Button
                  href="https://www.linkedin.com/in/amisuzui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={
                    <LinkedInIcon
                      sx={{
                        width: { md: 80, xs: 50 },
                        height: { md: 80, xs: 50 },
                        mr: 3,
                      }}
                    />
                  }
                  sx={{ justifyContent: "flex-start" }}
                >
                  <Typography variant="h6">LinkedIn</Typography>
                </Button>
                <Button
                  href="mailto: amiksuzui920@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={
                    <EmailOutlinedIcon
                      sx={{
                        width: { md: 80, xs: 50 },
                        height: { md: 80, xs: 50 },
                        mr: 3,
                      }}
                    />
                  }
                  sx={{ justifyContent: "flex-start" }}
                >
                  <Typography variant="h6">Email</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={3}
            md={1}
            display="flex"
            justifyContent="flex-end"
            overflow="hidden"
          >
            <Typography
              variant="h1"
              my={2}
              color="primary.light"
              sx={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
            >
              Ami Suzui
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
