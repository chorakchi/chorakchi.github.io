import styled, { css } from 'styled-components';

interface ContainerProps {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  withShadow?: boolean;
  href?: string;
  target?: string;
}

export const ContainerStyled = styled.div<ContainerProps>`
  width: fit-content;
  border: none;
  border-radius: 100px;
  height: fit-content;
  display: flex;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, 'Segoe UI';
    transition: background-color 0.3s, color 0.3s;
    

  ${(props) => {
    return props.withShadow && css`
  filter: drop-shadow(5px 5px 34px rgba(94, 75, 135, 0.11));
  `}}
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
          padding: 2px;
          min-width: 150px;
        `;
      case 'large':
        return css`
          font-size: 22px;
          padding: 2px;
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

`;

export const ItemsStyled = styled.a<ContainerProps>`
padding: 0 12px ;
width: fit-content;
  border: none;
  border-radius: 100px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
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
          border: 1px transparent;
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
