import React from "react";
import {
  CountinerStyled,
  PrimaryButtonStyled,
  ColoredBoxStyled,
  BorderedButtonStyle,
} from "./Styled";

export const Buttom = ({ children, ...props }) => {
  return props.primary ? (
    <CountinerStyled style={props.style}>
      <ColoredBoxStyled />
      <PrimaryButtonStyled>{children}</PrimaryButtonStyled>
    </CountinerStyled>
  ) : (
    <CountinerStyled>
      <BorderedButtonStyle>{children}</BorderedButtonStyle>
    </CountinerStyled>
  );
};
