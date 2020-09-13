import styled from "styled-components";

const BorderedButtonStyle = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 1px #b2b2b200;
  background-color: #ffffff;
  color: red;
  margin: 0px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`;

const PrimaryButtonStyled = styled.div`
  position: relative;
  width: 240px;
  height: 45px;
  border: solid 3px #000000;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 45px;
  letter-spacing: normal;
  text-align: center;
  color: #2b2e34;
  transition: all 0.3s;
`;

const ColoredBoxStyled = styled.div`
  position: absolute;
  width: 241.1px;
  height: 45.8px;
  margin-top: -10px;
  margin-left: 10px;
  background-color: #ffe60f;
  border: solid 3px #ffe60f;
  transition: all 0.3s;
`;

const CountinerStyled = styled.div`
  position: relative;
  cursor: pointer;
  margin: 10px;
  &:hover ${ColoredBoxStyled} {
    margin-top: 0px;
    margin-left: 0px;
  }
  &:hover ${PrimaryButtonStyled} {
    background: #ffffff;
  }
  &:hover ${BorderedButtonStyle} {
    background: #ffe60f;
  }
`;

export {
  CountinerStyled,
  PrimaryButtonStyled,
  ColoredBoxStyled,
  BorderedButtonStyle,
};
