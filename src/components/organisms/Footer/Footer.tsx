import React from 'react';
import { FooterProps } from './Footer.interface';
import { ContainerStyled, ItemsStyled } from './styled';
import { Box, Divider } from 'components';

export const Footer: React.FC<FooterProps> = ({
    items = [],
    size = 'medium',
    variant = 'contained',
    ...props }) => {
    return (
        <>
            <Divider />
            <Box d="flex" p={8}>
                <Box flex={1} />
                <ContainerStyled
                
                size={size} variant={variant} {...props} >
                    {items.map(i => <ItemsStyled 
                    href={i.value} target="_blank"
                    size={size} variant={variant}>{i.label}
                    </ItemsStyled>)} </ContainerStyled>
            </Box>
        </>

    );
};