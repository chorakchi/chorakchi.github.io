import React from 'react';
import { TypographyProps } from './Typography.interface';
import { ContainerStyled } from './styled';

export const Typography: React.FC<TypographyProps> = ({
    variant = 'body1',
    children,
    ...props }) => {
    return (<ContainerStyled variant={variant} {...props} >{children} </ContainerStyled>
    );
};