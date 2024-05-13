import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { RefObject, useRef } from "react";

interface NavButtonProps {
  href?: string;
  handleClick?: () => void;
  children: React.ReactNode;
}

interface NavbarProps {
  contactRef: RefObject<HTMLElement>;
}

const NavButton = ({ href, handleClick, children }: NavButtonProps) => {
  if (href) {
    return (
      <Button variant="text" href={href}>
        <Typography color="secondary" variant="h6">
          {children}
        </Typography>
      </Button>
    );
  }
  return (
    <Button variant="text" onClick={handleClick}>
      <Typography color="secondary" variant="h6">
        {children}
      </Typography>
    </Button>
  );
};

export default function Navbar({ contactRef }: NavbarProps) {
  return (
    <AppBar
      position="absolute"
      sx={{ bgcolor: "transparent", boxShadow: "none", my: 3 }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <ButtonGroup fullWidth disableRipple>
            <NavButton
              handleClick={() => {
                contactRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </NavButton>
            <NavButton>Event Gallery</NavButton>
            <NavButton>Bilingual Buzz</NavButton>
            <NavButton>Digital Media</NavButton>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
