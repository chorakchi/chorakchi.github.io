import { cssProp } from "styled-components";
import { HTMLAttributes } from "react";

export interface ContactProps extends CSSProp, HTMLAttributes<HTMLElement> {
  firstName: string;
  lastName: string;
  role: string;
  socialNetwork: Array<{
    label: string;
    icon: string;
    link: string;
  }>;
}
