import { HTMLAttributes, ElementType } from 'react';
import * as CSS from 'csstype';

export interface BoxProps
    extends HTMLAttributes<HTMLElement>,
    BoxCustomsProps,
    OnlyBoxProps { }


export interface OnlyBoxProps extends BoxCustomsProps {
    /**
     * Custom styling object for all breakpoints.
     */
    sx?: CSS.Properties;

    /**
     * Custom styling object for extra small screens.
     */
    xs?: CSS.Properties;

    /**
     * Custom styling object for small screens.
     */
    sm?: CSS.Properties;

    /**
     * Custom styling object for medium screens.
     */
    md?: CSS.Properties;

    /**
     * Custom styling object for large screens.
     */
    lg?: CSS.Properties;

    /**
     * Custom styling object for extra large screens.
     */
    xl?: CSS.Properties;

    /**
     * Custom HTML tag or React component to be used as the root element.
     */
    as?: any;
}

export interface BoxCustomsProps {
    /**
     * Margin: Sets the margin.
     */
    m?: string | number;

    /**
     * Margin Left: Sets the left margin.
     */
    ml?: string | number;

    /**
     * Margin Right: Sets the right margin.
     */
    mr?: string | number;

    /**
     * Max Width: Sets the maximum width.
     */
    mw?: string | number;

    /**
     * Margin Top: Sets the top margin.
     */
    mt?: string | number;

    /**
     * Margin Bottom: Sets the bottom margin.
     */
    mb?: string | number;

    /**
     * Spacing on X-axis.
     */
    spaceX?: string | number;

    /**
     * Spacing on Y-axis.
     */
    spaceY?: string | number;

    /**
     * Padding: Sets the padding.
     */
    p?: string | number;

    /**
     * Padding Right: Sets the right padding.
     */
    pr?: string | number;

    /**
     * Padding Left: Sets the left padding.
     */
    pl?: string | number;

    /**
     * Padding Top: Sets the top padding.
     */
    pt?: string | number;

    /**
     * Padding Bottom: Sets the bottom padding.
     */
    pb?: string | number;

    /**
     * Height.
     */
    h?: string | number;

    /**
     * Width.
     */
    w?: string | number;

    /**
     * Gap.
     */
    gap?: string | number;

    /**
     * Flex.
     */
    flex?: string | number;

    /**
     * Text Color.
     */
    color?: string;

    /**
     * Background Color.
     */
    bgColor?: string;

    /**
     * Z-index.
     */
    zIndex?: string | number;

    /**
     * Border Radius.
     */
    round?: string | number;

    /**
     * Text Overflow Show Dot.
     */
    textOverflowShowDot?: boolean;

    /**
     * No Print: Hide in print.
     */
    noPrint?: boolean;

    /**
     * Fade In Animation.
     */
    fadeIn?: boolean;

    /**
     * With Border.
     */
    withBorder?: boolean;

    /**
     * No Border.
     */
    noBorder?: boolean;

    /**
     * Display.
     */
    d?: string;
    /**
      * flex-direction
      */
    fd?: | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse';
}

