import { HTMLAttributes } from "react";

type Interest = {
label?: string;
icon?: string;
};
export interface InterestsProps extends HTMLAttributes<HTMLElement> {
  items?: Array<Interest>;
  heading?: string;
  label?: string;
}
