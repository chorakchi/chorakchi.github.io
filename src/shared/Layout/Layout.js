import styled from "styled-components";
import { screens } from "./../../shared";

export const PageCountiner = styled.div`
  background: #fefeef;
  @media (min-width: ${screens.sm}) {
    padding: 0px;
  }
  @media (min-width: ${screens.md}) {
    padding: 0 20px;
  }
  @media (min-width: ${screens.lg}) {
    padding: 0 70px;
  }
  @media (min-width: ${screens.xxl}) {
    padding: 0 170px;
  }
`;
