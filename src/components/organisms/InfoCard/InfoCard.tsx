import React from 'react';
import { FooterProps } from './InfoCard.interface';
import { ContainerStyled,FooterStyled } from './styled';
import { Typography } from 'components';

export const InfoCard: React.FC<FooterProps> = ({
    items = [],
    size = 'medium',
    variant = 'contained',
    children,
    footer = '',
    ...props }) => {
    return (
        <ContainerStyled {...props}>
            <Typography variant='caption'>
                {children}
            </Typography>
            <FooterStyled>
                <Typography color="secondaryInfoBlue" variant="caption" bold>{footer}</Typography>
            </FooterStyled>
        </ContainerStyled>
    );
};