import styled, { css } from 'styled-components';
import { ReactSVG } from 'react-svg';

export const SVGStyled = styled(ReactSVG)`
    display: inline-flex;
    vertical-align: middle;

    svg,
    span {
        display: flex;
        fill: currentColor;
        ${({ size }) => {
            switch (size) {
                case 'xSmall':
                    return css`
                        width: 12px;
                        height: 12px;
                    `;
                case 'small':
                    return css`
                        width: 16px;
                        height: 16px;
                    `;
                default:
                    return css`
                        width: 100%;
                        height: 100%;
                    `;
            }
        }}
    }

    path {
        fill: currentColor;
    }
`;
