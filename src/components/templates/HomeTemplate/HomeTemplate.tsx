import React from 'react';
import { HomeTemplateProps } from './HomeTemplate.interface';

export const HomeTemplate: React.FC<HomeTemplateProps> = ({ name, age, ...props }) => {
    return (<div {...props} >fgdgdfg</div>);
};