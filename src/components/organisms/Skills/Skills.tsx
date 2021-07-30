import { SkillsStyled } from "./Skills.styled";
import { LogoProps } from "./Skills.interface";
import { Section } from "../../molecules";
import { Typography } from "../..";
import { NumberLabel } from "../../molecules/NumberLabel/NumberLabel";
export const Skills: React.FC<LogoProps> = ({
  items,
  heading,
  label,
  ...props
}) => {
  return (
    <SkillsStyled {...props}>
      <NumberLabel className="numberLabel">{label}</NumberLabel>
      <Section heading={heading}>
        {items.map((item) => (
          <Typography className="socialNetwork" variant="body">
            {item}
          </Typography>
        ))}
      </Section>
    </SkillsStyled>
  );
};
