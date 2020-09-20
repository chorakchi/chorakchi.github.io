import React from "react";
import { Logo } from "../../share";
import {
  CountinerStyled,
  LogoCountinerStyled,
  NavItemStyled,
  NavItemCountinerStyled,
} from "./Styled";
import {
  navigatePortfolio,
  navigateHome,
} from "./../../navigator/NavigationService";

export const NavBar = ({ ...props }) => {
  return (
    <CountinerStyled>
      <LogoCountinerStyled>
        <Logo />
      </LogoCountinerStyled>
      <NavItemCountinerStyled>
        <NavItemStyled
          onClick={() => {
            navigateHome();
          }}
        >
          Home
        </NavItemStyled>
        <NavItemStyled
          onClick={() => {
            navigatePortfolio();
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
