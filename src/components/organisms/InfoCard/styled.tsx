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
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, 'Segoe UI';
    max-width: 220px;
    background-color: white;
    padding: 18px;
    border-radius: 20px;
    margin-bottom: 8px;
    margin-right: 10px;
    margin-top: -100px;
    align-self: end;
    
`;
export const FooterStyled = styled.div<ContainerProps>`
padding-top: 10px;
display: flex;
flex-direction: row-reverse;
    
`;


