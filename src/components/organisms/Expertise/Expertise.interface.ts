import { HTMLAttributes } from "react";

export interface ExpertiseProps extends HTMLAttributes<HTMLElement> {
  items?: Array<string>;
  heading?: string;
  label?: string;
  icon?: string;
}
