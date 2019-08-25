import React from 'react'
import {
    CountinerStyled,
} from './Styled'

export const Buttom = ({children,...props}) => {
    return (
        <CountinerStyled>
            {children}
        </CountinerStyled>
    )
}