import React from 'react'
import { MyLogo } from '../../Common';
import {
    CountinerStyled,
    LogoCountinerStyled,
    NavItemStyled,
    NavItemCountinerStyled
} from './Styled'

export const NavBar = () => {
    return (
        <CountinerStyled>
            <LogoCountinerStyled>
                <MyLogo />
            </LogoCountinerStyled>
            <NavItemCountinerStyled>
            <NavItemStyled>Home</NavItemStyled>
            <NavItemStyled>Portfolio</NavItemStyled>
            <NavItemStyled>Github</NavItemStyled>
            <NavItemStyled>Contact</NavItemStyled>
            </NavItemCountinerStyled>
        </CountinerStyled>
    )
}