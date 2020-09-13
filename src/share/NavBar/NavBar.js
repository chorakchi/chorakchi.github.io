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
        <NavItemStyled
          onClick={(event) => {
            window.open("https://www.linkedin.com/in/chorakchi/");
          }}
        >
          Portfolio
        </NavItemStyled>
        <NavItemStyled
          onClick={(event) => {
            window.open("https://github.com/chorakchi");
          }}
        >
          Github
        </NavItemStyled>
        <NavItemStyled>Contact</NavItemStyled>
      </NavItemCountinerStyled>
    </CountinerStyled>
  );
};
