import React from "react";
import { Buttom, Logo, Icons } from "../../shared";
import {
  CountinerStyled,
  PopupStyled,
  QRcodeStyled,
  ContactInfoStyled,
  VCARDTextStyled,
  ButtonsStyled,
} from "./styled";
const { Linkedin, Xing, Close } = Icons;

export const ContactPopUp = ({ ...props }) => {
  return (
    <CountinerStyled style={props.style} show={props.show}>
      {/* <Buttom primary onClick={() => {}}>Download CV</Buttom> */}
      <PopupStyled onClick={(event) => {}}>
        <Logo
          size="large"
          color="black"
          width="274.83"
          height="207.254"
          variety="withTypography"
          style={{
            position: "absolute",
            top: 50,
            left: 90,
            transform: "scale(1)",
          }}
        />
        <ContactInfoStyled>
          m.chorakchi@gmail.com <br />
          +49 176 8845 0038 <br />
          chorakchi.netlify.com <br />
          Live:m.chorakchi <br />
          Berlin, Germany
        </ContactInfoStyled>
        <ButtonsStyled>
          <Buttom
            onClick={(event) => {
              window.open("https://www.linkedin.com/in/chorakchi/");
            }}
          >
            <Linkedin />
          </Buttom>
          <Buttom
            onClick={(event) => {
              window.open("https://www.xing.com/profile/mohammad_chorakchi/cv");
            }}
          >
            <Xing />
          </Buttom>
        </ButtonsStyled>
        <VCARDTextStyled>VCARD</VCARDTextStyled>
        <QRcodeStyled width={205} src={props.qrcode} />
        <Buttom
          style={{
            position: "absolute",
            top: 50,
            right: 50,
          }}
          onClick={(event) => {
            props.onClose();
          }}
        >
          <Close />
        </Buttom>
      </PopupStyled>
    </CountinerStyled>
  );
};
