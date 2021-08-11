import { ExpertiseStyled } from "./Expertise.styled";
import { ExpertiseProps } from "./Expertise.interface";
import { Section } from "../../molecules";
import { Typography } from "../..";
import { NumberLabel } from "../../molecules/NumberLabel/NumberLabel";
import { SVG } from "components/atoms/SVG/SVG";
export const Expertise: React.FC<ExpertiseProps> = ({
  items=[],
  heading,
  label,
  icon,
  ...props
}) => {
  return (
    <ExpertiseStyled {...props}>

      {label && <NumberLabel className="numberLabel">{label}</NumberLabel>}
      <Section heading={heading} icon={icon}>
        {items.map((item : string, i) => (
          <Typography  key={`expertise-${i}`} as="li" className="socialNetwork" variant="body">
            {item}
          </Typography>
        ))}
      </Section>
    </ExpertiseStyled>
  );
};
