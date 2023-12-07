import styled, { css } from 'styled-components';
import { variant, weight } from './Logo.interface';

interface ContainerProps {
  variant?: variant;
  bold?: boolean;
  weight?: weight;
}

export const ContainerStyled = styled.div<ContainerProps>`
  width: 100%;
  border: none;
  color: black;
  font-family: 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, 'Segoe UI';

  ${(props) => {
    switch (props.variant) {
      case 'body1':
        return css`
        font-size: 18px;
        `;
      case 'body2':
        return css`
        font-size: 16px;
        `;
      case 'caption':
        return css`
        font-size: 12px;
        `;
      case 'h1':
        return css`
        font-size: 40px;
        `;
      case 'h2':
        return css`
        font-size: 36px;
        `;
      case 'h3':
        return css`
        font-size: 28px;
        `;
      case 'h4':
        return css`
        font-size: 24px;
        `;
      case 'h5':
        return css`
        font-size: 22px;
        `;
      case 'h6':
        return css`
        font-size: 18px;
        `;
      default:
        return css`
        font-size: 18px;
        `;
    }
  }}

font-weight: ${(props) => {
    if (props.bold) {
      return 'bold';
    } else if (props.weight === 'thin') {
      return 100;
    } else if (props.weight === 'extraLight') {
      return 200;
    } else if (props.weight === 'light') {
      return 300;
    } else if (props.weight === 'regular') {
      return 400;
    } else if (props.weight === 'medium') {
      return 500;
    } else if (props.weight === 'semiBold') {
      return 600;
    } else if (props.weight === 'bold') {
      return 'bold';
    } else if (props.weight === 'extraBold') {
      return 800;
    } else if (props.weight === 'black') {
      return 900;
    } else {
      return 400; // Default to regular font weight
    }
  }};

`;
