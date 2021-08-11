import styled, { css } from "styled-components";

import { ExpertiseProps } from "./Expertise.interface";


export const ExpertiseStyled = styled.div<ExpertiseProps>`
display: flex;

.numberLabel{
  margin-top: 40px;
  margin-right: 40px;
  margin-left: -10px;
}
  ${({ theme }) => theme.Skills && theme.Skills.root};
`;
