import {
  ResumeStyled,
  RightBlockCVStyled,
  LeftBlockCVStyled,
  ContainerStyled,
  PrintButtonStyled,
} from "./Resume.styled";
import { ResumeProps } from "./Resume.interface";
import { Expertise } from "../../organisms/Expertise/Expertise";
import { Logo } from "../../organisms/Logo/Logo";
import { Skills } from "../../organisms/Skills/Skills";
import { Experience } from "../../organisms/Experience/Experience";
import { Education } from "../../organisms/Education/Education";
import { Reference } from "../../organisms/Reference/Reference";
import { Description } from "../../organisms/Description/Description";
import { Contact } from "../../organisms/Contact/Contact";
import { Interests } from "../../organisms/Interests/Interests";
export const Resume: React.FC<ResumeProps> = ({
  logo,
  skills,
  experience,
  education,
  expertise,
  reference,
  description,
  contact,
  interests,
  ...props
}) => {
  return (
    <ResumeStyled {...props}>
      <ContainerStyled>
        <Contact className="contact" {...contact} />
        <LeftBlockCVStyled>
          <Description className="description" {...description} />
          <Expertise className="expertise" {...expertise} />
          <Reference className="reference" {...reference} />
          <Interests className="interests" {...interests} />
        </LeftBlockCVStyled>
        <RightBlockCVStyled>
          <Logo className="logo" {...logo} />
          <Skills className="skills" {...skills} />
          <Experience className="experience" {...experience} />
          <Education className="education" {...education} />
        </RightBlockCVStyled>
        <PrintButtonStyled
          onClick={() => {
            window.print();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" />
          </svg>
        </PrintButtonStyled>
      </ContainerStyled>
    </ResumeStyled>
  );
};
