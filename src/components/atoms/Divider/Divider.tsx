import React from 'react';
import { DividerProps } from './Divider.interface';
import { ContainerStyled } from './styled';

export const Divider: React.FC<DividerProps> = ({
    children,
    ...props }) => {
    return (<ContainerStyled {...props} >{children} </ContainerStyled>
    );
};