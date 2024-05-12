import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const NavButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button variant="text">
      <Typography color="secondary" variant="h6">
        {children}
      </Typography>
    </Button>
  );
};

export default function Navbar() {
  return (
    <AppBar
      position="absolute"
      sx={{ bgcolor: "transparent", boxShadow: "none", my: 3 }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <ButtonGroup fullWidth disableRipple>
            <NavButton>Contact</NavButton>
            <NavButton>Event Gallery</NavButton>
            <NavButton>Bilingual Buzz</NavButton>
            <NavButton>Digital Media</NavButton>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
