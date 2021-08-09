import { HTMLAttributes } from "react";

type Education = {
  endDate?: string;
  startDate: string;
  companyName: string;
  description: string;
};
export interface EducationProps extends HTMLAttributes<HTMLElement> {
  items?: Array<Education>;
  heading?: string;
  label?: string;
}
