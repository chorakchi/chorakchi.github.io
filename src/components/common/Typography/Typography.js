import React from 'react'
import { TypographyStyled } from './Styled'

const Typography = ({ children, ...props }) => (
    <TypographyStyled
        {...props}
    >
        {children}
    </TypographyStyled>
)

export { Typography }