import { HTMLAttributes } from "react";

export interface SkillsProps extends HTMLAttributes<HTMLElement> {
  items?: Array<string>;
  heading?: string;
  label?: string;
}
