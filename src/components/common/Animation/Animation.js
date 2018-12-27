import React from "react"
import {StyledAnimation} from "./Styled" 
const Animation = ({children, ...props}) => (
    <StyledAnimation
    {...props}
    >
    {children}
    </StyledAnimation>
)

export {Animation}