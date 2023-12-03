import React from 'react';
import { ModalProps } from './Modal.interface';

export const Modal: React.FC<ModalProps> = ({ name, age, ...props }) => {
    return (<div {...props} />);
};