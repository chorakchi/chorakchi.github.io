import styled, { css } from 'styled-components';
import { variant, weight } from './Divider.interface';

interface ContainerProps {
  variant?: variant;
  bold?: boolean;
  weight?: weight;
}

export const ContainerStyled = styled.div<ContainerProps>`
  width: 100%;
  border-top: 1px solid;
  color: black;

`;
