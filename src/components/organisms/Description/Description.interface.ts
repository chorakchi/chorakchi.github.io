import { HTMLAttributes } from "react";

export interface DescriptionProps extends HTMLAttributes<HTMLElement> {
  description?: string;
  heading?: string;
  label?: string;
}
