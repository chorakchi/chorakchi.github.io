import { InterestsStyled, ContainerStyled } from "./Interests.styled";
import { InterestsProps } from "./Interests.interface";
import { Section } from "../../molecules";
import { Typography } from "../..";
import { NumberLabel } from "../../molecules/NumberLabel/NumberLabel";
import { Interest } from "../../molecules/Interest/Interest";
export const Interests: React.FC<InterestsProps> = ({
  items=[],
  heading,
  label,
  ...props
}) => {
  return (
    <InterestsStyled {...props}>
      {label && <NumberLabel className="numberLabel">{label}</NumberLabel>}
      <Section heading={heading}>
        <ContainerStyled>
          {items.map((item, i) => (
            <Interest  key={`interest-${i}`} {...item} />
          ))}
        </ContainerStyled>
      </Section>
    </InterestsStyled>
  );
};
