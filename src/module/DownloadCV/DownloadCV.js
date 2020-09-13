import React from "react";
import { Buttom, Logo } from "../../share";
import { CountinerStyled, SolidBox, LinedBox, SmallBox } from "./styled";

export const DownloadCV = ({ ...props }) => {
  return (
    <CountinerStyled style={props.style}>
      <SolidBox />
      <SmallBox />
      <LinedBox />
      <Buttom
        primary
        style={{
          position: "absolute",
          bottom: 170,
          right: 0,
        }}
        onClick={(event) => {
          window.open("https://chorakchi.netlify.app/CV-Chorakchi.pdf");
        }}
      >
        Download CV
      </Buttom>
      <Logo
        color="black"
        withTypography
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
        }}
      />
    </CountinerStyled>
  );
};
