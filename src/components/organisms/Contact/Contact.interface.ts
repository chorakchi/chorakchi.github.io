import { HTMLAttributes } from "react";

export interface ContactProps extends HTMLAttributes<HTMLElement> {
  phone?: string;
  email?: string;
  heading?: string;
  label?: string;
}
