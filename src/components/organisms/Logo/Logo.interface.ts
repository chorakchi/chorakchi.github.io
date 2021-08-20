import { HTMLAttributes } from "react";
import { IconName } from "./.././../atoms/SVG/IconName.type";

export interface LogoProps extends HTMLAttributes<HTMLElement> {
  firstName?: string;
  lastName?: string;
  role?: string;
  socialNetwork?: Array<{
    label?: string;
    icon: IconName;
    link?: string;
  }>;
}
