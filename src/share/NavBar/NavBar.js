import React from "react";
import { Logo } from "../../share";
import {
  CountinerStyled,
  LogoCountinerStyled,
  NavItemStyled,
  NavItemCountinerStyled,
} from "./Styled";

export const NavBar = ({ ...props }) => {
  return (
    <CountinerStyled>
      <LogoCountinerStyled>
        <Logo />
      </LogoCountinerStyled>
      <NavItemCountinerStyled>
        <NavItemStyled>Home</NavItemStyled>
        <NavItemStyled
          onClick={() => {
            window.open("https://www.linkedin.com/in/chorakchi/");
          }}
        >
          Portfolio
        </NavItemStyled>
        <NavItemStyled
          onClick={() => {
            window.open("https://github.com/chorakchi");
          }}
        >
          Github
        </NavItemStyled>
        <NavItemStyled onClick={props.showContact}>Contact</NavItemStyled>
      </NavItemCountinerStyled>
    </CountinerStyled>
  );
};
