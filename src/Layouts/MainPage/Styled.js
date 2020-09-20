import styled from "styled-components";
import { screens } from "./../../shared";

export const WrapperTopBlock = styled.div`
  @media (min-width: ${screens.sm}) {
    padding-top: 20px;
    padding-left: 0px;
  }
  @media (min-width: ${screens.lg}) {
    padding-top: 20px;
    padding-left: 0px;
  }
  @media (min-width: ${screens.xl}) {
    padding-left: 200px;
  }
  flex: 1;
`;
export const BlockquoteStyled = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 17px;
  line-height: 1.35;
  text-align: left;
  color: #4e4e4e;
  position: relative;
  white-space: pre;
`;

export const WrapperMidBlock = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  padding: 80px;
  align-items: center;
  justify-content: center;
  height: 950px;
`;

export const WrapperRowOfButtomStyled = styled.div`
  display: flex;
  margin: 30px 0;
`;

export const FooterBlockStyeld = styled.div`
  width: 241.6px;
  height: 503.6px;
  opacity: 0.85;
  background-color: #ffe60f;
`;

export const BlockStyled = styled.div`
  display: flex;
  @media (min-width: ${screens.lg}) {
    flex-direction: column;
  }
  @media (min-width: ${screens.lg}) {
    flex-direction: row;
  }
`;
export const EndBlockStyled = styled.div`
  padding-top: 200px;
  display: flex;
`;
export const WrapperFooterShapeStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 110px;
  flex: 1;
`;
