import styled, { css } from "styled-components";

import { SectionProps } from "./Skills.interface";


export const SkillsStyled = styled.div<SectionProps>`
display: flex;
.numberLabel{
  margin-top: 40px;
  margin-right: 40px;
  margin-left: -10px;
}
  ${({ theme }) => theme.Skills && theme.Skills.root};
`;
