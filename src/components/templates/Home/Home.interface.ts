import { HTMLAttributes } from "react";

export interface HomeProps extends HTMLAttributes<HTMLElement> {
  firstName: string;
  lastName: string;
  role: string;
  socialNetwork: Array<{
    label: string;
    icon: string;
    link: string;
  }>;
}
