import React from 'react';
import { ButtonProps } from './Button.interface';
import { ContainerStyled } from './styled';

export const Button: React.FC<ButtonProps> = ({ 
    size = 'medium',
    variant = 'contained',
 children,
  label,
   ...props }) => {
    return (<ContainerStyled size={size} variant={variant} {...props} >{children || label}</ContainerStyled>
    );
};