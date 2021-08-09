import { HTMLAttributes } from "react";

type Reference = {
  role?: string;
  name: string;
  phone: string;
  email: string;
};
export interface ReferenceProps extends HTMLAttributes<HTMLElement> {
  items?: Array<Reference>;
  heading?: string;
  label?: string;
}
