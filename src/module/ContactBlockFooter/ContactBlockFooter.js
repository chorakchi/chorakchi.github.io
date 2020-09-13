import React from "react";
import { Buttom, Logo } from "../../share";
import { CountinerStyled, SolidBox, ContactStyled } from "./styled";

export const ContactBlockFooter = ({ ...props }) => {
  return (
    <CountinerStyled style={props.style}>
      <SolidBox />

      <Logo
        color="black"
        withTypography
        style={{
          position: "absolute",
          top: 30,
          left: 30,
        }}
      />
      <ContactStyled>
        m.chorakchi@gmail.com <br />
        +98-903-123-77-30 <br />
        chorakchi.netlify.com <br />
        Live:m.chorakchi
      </ContactStyled>
    </CountinerStyled>
  );
};
