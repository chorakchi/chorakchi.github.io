import { SkillsStyled } from "./Skills.styled";
import { SkillsProps } from "./Skills.interface";
import { Section } from "../../molecules";
import { Typography } from "../..";
import { NumberLabel } from "../../molecules/NumberLabel/NumberLabel";
export const Skills: React.FC<SkillsProps> = ({
  items=[],
  heading,
  label,
  ...props
}) => {
  return (
    <SkillsStyled {...props}>
      <NumberLabel className="numberLabel">{label}</NumberLabel>
      <Section heading={heading}>
        {items.map((item, i) => (
          <Typography key={`skill-${i}`} className="socialNetwork" variant="body">
            {item}
          </Typography>
        ))}
      </Section>
    </SkillsStyled>
  );
};
