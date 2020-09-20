import React from "react";
import { Logo } from "../../shared";
import {
  CountinerStyled,
  SolidBox,
  ContactStyled,
  QRcodeStyled,
  VCARDTextStyled,
} from "./styled";

export const ContactBlockFooter = ({ ...props }) => {
  return (
    <CountinerStyled style={props.style}>
      <SolidBox />

      <Logo
        color="black"
        variety="withTypography"
        style={{
          position: "absolute",
          top: 30,
          left: 30,
        }}
      />
      <VCARDTextStyled>VCARD</VCARDTextStyled>
      <QRcodeStyled width={205} src={props.qrcode} />
      <ContactStyled>
        m.chorakchi@gmail.com <br />
        +49 176 8845 0038 <br />
        chorakchi.netlify.com <br />
        Live:m.chorakchi
      </ContactStyled>
    </CountinerStyled>
  );
};
