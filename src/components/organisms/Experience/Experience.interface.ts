import { HTMLAttributes } from "react";

type Experience = {
  endDate?: string;
  startDate: string;
  companyName: string;
  role: string;
  description: string;
};
export interface ExperienceProps extends HTMLAttributes<HTMLElement> {
  items?: Array<Experience>;
  heading?: string;
  label?: string;
}
