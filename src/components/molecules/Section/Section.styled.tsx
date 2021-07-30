import styled, { css } from "styled-components";
import { SectionProps } from "./Section.interface";

export const SectionStyled = styled.div<SectionProps>`
.heading{
padding-top: 40px;
padding-bottom: 20px;
}
  ${({ theme }) => theme.Section && theme.Section.root};
`;
