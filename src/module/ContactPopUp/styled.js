import styled from "styled-components";

export const PopupStyled = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 80%;
  height: 80%;
  margin: auto;
  background-color: #ffffff;
`;
export const CountinerStyled = styled.div`
  position: absolute;
  backdrop-filter: blur(14.8px);
  padding-top: 10%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: solid 1px #707070;
  background-color: #00000055;
  display: ${(props) => (props.show ? "unset" : "none")};
`;

export const QRcodeStyled = styled.img`
  position: absolute;
  right: 100px;
  bottom: 70px;
`;

export const ContactInfoStyled = styled.div`
  position: absolute;
  font-size: 18px;
  font-weight: 300;
  right: 350px;
  bottom: 140px;
  text-align: right;
`;

export const VCARDTextStyled = styled.div`
  position: absolute;
  right: 250px;
  bottom: 280px;
`;
export const ButtonsStyled = styled.div`
  position: absolute;
  right: 330px;
  bottom: 60px;
  display: flex;
`;
