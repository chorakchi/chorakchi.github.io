import styled, { css } from "styled-components";
import { NumberLabelProps } from "./NumberLabel.interface";

export const NumberLabelStyled = styled.div<NumberLabelProps>`
  position: relative;
  .number {
    position: absolute;
    left: 5px;
    top: 3px;
  }
  ${({ theme }) => theme.NumberLabel && theme.NumberLabel.root};
`;
