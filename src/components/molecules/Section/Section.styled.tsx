import styled, { css } from "styled-components";
import { SectionProps } from "./Section.interface";

export const SectionStyled = styled.div<SectionProps>`
    padding-top: 40px;
    .heading {
        padding-bottom: 20px;
    }
    ${({ theme }) => theme.Section && theme.Section.root};
`;
