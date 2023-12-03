import React from 'react';
import { HomePageProps } from './HomePage.interface';

export const HomePage: React.FC<HomePageProps> = ({ name, age, ...props }) => {
    return (<div {...props} />);
};