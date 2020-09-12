import React from "react";
import { Buttom, Logo } from "../../share";
import { CountinerStyled, SolidBox, LinedBox, SmallBox } from "./styled";

export const DownloadCV = () => {
  return (
    <CountinerStyled>
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
