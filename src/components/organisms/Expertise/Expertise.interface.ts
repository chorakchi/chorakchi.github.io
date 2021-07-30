import { cssProp } from "styled-components";
import { HTMLAttributes } from "react";

export interface ExpertiseProps extends CSSProp, HTMLAttributes<HTMLElement> {
  firstName: string;
  lastName: string;
  role: string;
  socialNetwork: Array<{
    label: string;
    icon: string;
    link: string;
  }>;
}
