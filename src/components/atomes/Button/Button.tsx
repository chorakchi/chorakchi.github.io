import React from 'react';
import { ButtonProps } from './Button.interface';

export const Modal: React.FC<ButtonProps> = ({ name, age, ...props }) => {
    return (<div {...props} />);
};