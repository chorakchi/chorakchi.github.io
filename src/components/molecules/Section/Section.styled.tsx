import styled, { css } from "styled-components";
import { SectionProps } from "./Section.interface";

export const SectionStyled = styled.div<SectionProps>`
    padding-top: 20px;
    .heading {
        padding-bottom: 16px;
    }
    ${({ theme }) => theme.Section && theme.Section.root};
`;
