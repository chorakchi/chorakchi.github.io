import styled, { css } from "styled-components";
import { InterestProps } from "./Interest.interface";

export const InterestStyled = styled.div<InterestProps>`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
  margin-bottom: 24px;
  .label {
    text-align: center;
  }
  ${({ theme }) => theme.NumberLabel && theme.NumberLabel.root};
`;

export const IconContainerStyled = styled.div`
  display: flex;
  background-color: #f8f8f8;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

`;
