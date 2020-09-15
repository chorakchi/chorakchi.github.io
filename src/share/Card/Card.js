import React from "react";
import {
  CardStyled,
  TitleStyled,
  ContextStyled,
  FooterStyled,
  SideLabelStyled,
} from "./styled";

export const Card = ({ ...props }) => {
  return (
    <CardStyled>
      <TitleStyled>{props.title}</TitleStyled>
      <ContextStyled>{props.context}</ContextStyled>
      <FooterStyled>{props.footer}</FooterStyled>
      {props.sideLabel && <SideLabelStyled>{props.sideLabel}</SideLabelStyled>}
    </CardStyled>
  );
};
