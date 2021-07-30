import styled, { css } from "styled-components";
import { SectionProps } from "./Logo.interface";

export const LogoStyled = styled.div<SectionProps>`
  .firstName {
    font-weight: lighter;
    margin-bottom: -8px;
  }
  .lastName {
  }
  .socialNetwork {
    margin: 10px;
  }
  .role {
    background-color: black;
    color: white;
    width: fit-content;
    padding: 3px 20px;
  }
  ${({ theme }) => theme.Logo && theme.Logo.root};
`;
