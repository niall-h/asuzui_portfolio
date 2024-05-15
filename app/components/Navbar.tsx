import {
  AppBar,
  Button,
  ButtonGroup,
  ButtonProps,
  Container,
  Toolbar,
  Typography,
  TypographyProps,
} from "@mui/material";
import React, { RefObject } from "react";

interface NavButtonProps {
  href?: string;
  handleClick?: () => void;
  buttonProps?: ButtonProps;
  typographyProps?: TypographyProps;
  children: React.ReactNode;
}

interface NavbarProps {
  contactRef: RefObject<HTMLElement>;
}

export const NavButton = ({
  href,
  buttonProps,
  typographyProps,
  children,
}: NavButtonProps) => {
  if (href) {
    return (
      <Button variant="text" href={href} {...buttonProps}>
        <Typography color="secondary" variant="h6" {...typographyProps}>
          {children}
        </Typography>
      </Button>
    );
  }
  return (
    <Button variant="text" href={href} {...buttonProps}>
      <Typography color="secondary" variant="h6" {...typographyProps}>
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
              buttonProps={{
                onClick: () => {
                  contactRef.current?.scrollIntoView({ behavior: "smooth" });
                },
              }}
            >
              Contact
            </NavButton>
            <NavButton>Event Gallery</NavButton>
            <NavButton href="/bilingual-buzz">Bilingual Buzz</NavButton>
            <NavButton href="/digital-media">Digital Media</NavButton>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
