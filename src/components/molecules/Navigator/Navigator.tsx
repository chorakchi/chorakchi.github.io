import React from 'react';
import { NavigatorProps } from './Navigator.interface';
import { ContainerStyled, ItemsStyled } from './styled';
import { Link } from 'react-router-dom';

export const Navigator: React.FC<NavigatorProps> = ({
    items=[],
    size = 'medium',
    variant = 'contained',
    ...props }) => {
    return (<ContainerStyled size={size} variant={variant} {...props} >{items.map(i=>
         <ItemsStyled as={Link} to={i.value}  size={size} variant={variant}>{i.label}</ItemsStyled>)}
          </ContainerStyled>
    );
};