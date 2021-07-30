import styled, { css } from "styled-components";

import { DescriptionProps } from "./Description.interface";

export const DescriptionStyled = styled.div<DescriptionProps>`
  display: flex;
    max-width: 300px;
  .numberLabel {
    margin-top: 40px;
    margin-right: 40px;
    margin-left: -10px;
  }
  .description{
    white-space: pre-line;
  }
  ${({ theme }) => theme.Skills && theme.Skills.root};
`;
