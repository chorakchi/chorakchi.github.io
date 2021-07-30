import {cssProp} from 'styled-components'
import { HTMLAttributes } from 'react';

export interface SectionProps extends CSSProp,HTMLAttributes<HTMLElement> {
heading: string;
icon: any;

}