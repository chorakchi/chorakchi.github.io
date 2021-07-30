import styled, { css } from "styled-components";

import { InterestsProps } from "./Interests.interface";

export const InterestsStyled = styled.div<InterestsProps>`
  display: flex;
  .numberLabel {
    margin-top: 40px;
    margin-right: 40px;
    margin-left: -10px;
  }
  ${({ theme }) => theme.Skills && theme.Skills.root};
`;

export const ContainerStyled = styled.div`
  display: flex;
  max-width: 280px;
  flex-wrap: wrap;
`;
