import React from "react";
import { Logo } from "../../share";
import {
  CountinerStyled,
  LogoCountinerStyled,
  NavItemStyled,
  NavItemCountinerStyled,
} from "./Styled";

export const NavBar = () => {
  return (
    <CountinerStyled>
      <LogoCountinerStyled>
        <Logo />
      </LogoCountinerStyled>
      <NavItemCountinerStyled>
        <NavItemStyled>Home</NavItemStyled>
        <NavItemStyled>Portfolio</NavItemStyled>
        <NavItemStyled>Github</NavItemStyled>
        <NavItemStyled>Contact</NavItemStyled>
      </NavItemCountinerStyled>
    </CountinerStyled>
  );
};
