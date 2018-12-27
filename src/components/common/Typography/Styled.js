import styled, { css } from 'styled-components'

const TypographyStyled = styled.div`
  font-size: 1rem;
  width: ${props => props.fullWidth ? "100%" : "unset"};
  /* flex-basis: -moz-available; */
  position:relative;
  letter-spacing: normal;

  color: ${props => props.color ? props.color : '#000'}; 
  direction: ${props => props.rtl ? 'rtl' : 'ltr'}; 
  text-align: ${props => props.rtl ? 'right' : 'left'}; 

  ${props => props.variant === 'h1' && css`
    font-size: 6rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.01562em;
  `}
  ${props => props.variant === 'h2' && css`
    font-size: 3.75rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.00833em;
`}
  ${props => props.variant === 'h3' && css`
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.04;
    letter-spacing: 0em;
  `}
  ${props => props.variant === 'h4' && css`
    font-size: 2.125rem;
    font-weight: 400;
    line-height: 1.17;
    letter-spacing: 0.00735em;
`}
  ${props => props.variant === 'h5' && css`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: 0em;
`}
  ${props => props.variant === 'h6' && css`
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
`}
  ${props => props.variant === 'subtitle1' && css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: 0.00938em;
`}
  ${props => props.variant === 'subtitle2' && css`
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.57;
    letter-spacing: 0.00714em;
`}
  ${props => props.variant === 'body1' && css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  `}
  ${props => props.variant === 'body2' && css`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.01071em;
`}
  ${props => props.variant === 'caption' && css`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.66;
    letter-spacing: 0.03333em;
  `}
  ${props => props.variant === 'button' && css`
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.02857em;
    text-transform: uppercase;`}
  ${props => props.variant === 'overline' && css`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 2.66;
    letter-spacing: 0.08333em;
    text-transform: uppercase;
  `}
  ${props => props.variant === 'display1' && css``}
  ${props => props.variant === 'display2' && css``}
  ${props => props.variant === 'display3' && css``}
  ${props => props.variant === 'display4' && css``}
  ${props => props.variant === 'headline' && css``}
  ${props => props.variant === 'title' && css``}
  ${props => props.variant === 'subheading' && css``}

  
`;




export {
  TypographyStyled
}