import styled, { css } from 'styled-components';

interface ContainerProps {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
}

export const ContainerStyled = styled.button<ContainerProps>`
  width: fit-content;
  border: none;
  border-radius: 100px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, 'Segoe UI';
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;

  ${(props) => {
    switch (props.variant) {
      case 'contained':
        return css`
          background-color: black;
          color: white;
          border: 1px solid transparent;
          `;
      case 'outlined':
        return css`
          background-color: transparent;
          color: black;
          border: 1px solid;
          `;
      case 'text':
        return css`
          background-color: transparent;
          border: 1px solid transparent;
          color: black;
        `;
      default:
        return css`
          background-color: black;
          color: white;
        `;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          font-size: 13px;
          padding: 4px;
          min-width: 80px;
        `;
      case 'medium':
        return css`
          font-size: 18px;
          padding: 8px;
          min-width: 150px;
        `;
      case 'large':
        return css`
          font-size: 22px;
          padding: 11px;
          min-width: 200px;
        `;
      default:
        return css`
          font-size: 22px;
          padding: 11px;
          min-width: 200px;
        `;
    }
  }}
    &:hover {
    ${(props) => {
      switch (props.variant) {
        case 'contained':
          return css`
            background-color: #444;
            color: white;
          `;
        case 'outlined':
          return css`
            background-color: #eee;
            color: #333;
            
          `;
        case 'text':
          return css`
            background-color: #eee;
            color: #333;
         
          `;
        default:
          return css`
            background-color: #333;
            color: #ccc;
          `;
      }
    }}
  }
`;
