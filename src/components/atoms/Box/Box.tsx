import React from 'react';
import { BoxStyled } from './Box.styled';
import { BoxProps } from './Box.interface';

export const Box: React.FC<BoxProps> = ({ ...props }) => {
  return <BoxStyled {...props} />;
};

export const withBox = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & BoxProps> => {
  const WithBox: React.FC<P & BoxProps> = ({ ...props }) => {
    return <BoxStyled as={Component} {...props} />;
  };
  return WithBox;
};
