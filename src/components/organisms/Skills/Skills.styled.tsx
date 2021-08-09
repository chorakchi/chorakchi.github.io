import styled, { css } from "styled-components";

import { SkillsProps } from "./Skills.interface";


export const SkillsStyled = styled.div<SkillsProps>`
display: flex;
.numberLabel{
  margin-top: 40px;
  margin-right: 40px;
  margin-left: -10px;
}
  ${({ theme }) => theme.Skills && theme.Skills.root};
`;
