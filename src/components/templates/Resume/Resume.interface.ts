import { HTMLAttributes } from "react";
import { LogoProps } from "./../../organisms/Logo/Logo.interface";
import { SkillsProps } from "./../../organisms/Skills/Skills.interface";
import { ExperienceProps } from "./../../organisms/Experience/Experience.interface";
import { EducationProps } from "./../../organisms/Education/Education.interface";
import { ExpertiseProps } from "./../../organisms/Expertise/Expertise.interface";
import { ReferenceProps } from "./../../organisms/Reference/Reference.interface";
import { DescriptionProps } from "./../../organisms/Description/Description.interface";
import { ContactProps } from "./../../organisms/Contact/Contact.interface";
import { InterestsProps } from "./../../organisms/Interests/Interests.interface";


export interface ResumeProps extends HTMLAttributes<HTMLElement> {
  logo?: LogoProps,
  skills?: SkillsProps,
  experience?: ExperienceProps,
  education?: EducationProps,
  expertise?: ExpertiseProps,
  reference?: ReferenceProps,
  description?: DescriptionProps,
  contact?: ContactProps,
  interests?:InterestsProps,
}
