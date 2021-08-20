import styled, { css } from "styled-components";
import { LogoProps } from "./Logo.interface";

export const LogoStyled = styled.div<LogoProps>`
  .firstName {
    font-weight: lighter;
    margin-bottom: -8px;
  }
  .lastName {
  }
  .socialNetwork {
    margin-right: 10px;
  }
  .socialNetworkIcon {
    margin-right: 2px;
  }
  .role {
    background-color: black;
    color: white;
    width: fit-content;
    padding: 3px 20px;
  }
  ${({ theme }) => theme.Logo && theme.Logo.root};
`;
