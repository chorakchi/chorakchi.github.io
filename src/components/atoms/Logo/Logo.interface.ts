import { HTMLAttributes } from "react";

export type variant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption";
export type weight =
    'thin'
    | 'extraLight'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semiBold'
    | 'bold'
    | 'extraBold'
    | 'black';


export interface LogoProps
    extends HTMLAttributes<HTMLElement> {
    /**
     * Is this the principal call to action on the page?
    */
    variant?: variant;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    bold?: boolean;
    weight?: weight;
}