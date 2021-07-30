import styled, { css } from "styled-components";

import { ExperienceProps } from "./Experience.interface";


export const ExperienceStyled = styled.div<ExperienceProps>`
display: flex;
.numberLabel{
  margin-top: 40px;
  margin-right: 40px;
  margin-left: -10px;
}
  ${({ theme }) => theme.Skills && theme.Skills.root};
`;

export const PositionStyled = styled.div`
padding:10px 0;
max-width: 230px;
`
