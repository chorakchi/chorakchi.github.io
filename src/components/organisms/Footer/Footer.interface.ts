import { HTMLAttributes } from "react";

export interface FooterProps
    extends HTMLAttributes<HTMLElement> {
            /**
     * Is this the principal call to action on the page?
    */
    variant?:  'contained' | 'outlined' | 'text';
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    items?: Array<any>;
    /**
     * Optional click handler
     */
    onClick?: () => void;

    withShadow?: boolean;
}