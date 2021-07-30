import { ExpertiseStyled } from "./Expertise.styled";
import { ExpertiseProps } from "./Expertise.interface";
import { Section } from "../../molecules";
import { Typography } from "../..";
import { NumberLabel } from "../../molecules/NumberLabel/NumberLabel";
export const Expertise: React.FC<ExpertiseProps> = ({
  items,
  heading,
  label,
  ...props
}) => {
  return (
    <ExpertiseStyled {...props}>
      {label && <NumberLabel className="numberLabel">{label}</NumberLabel>}
      <Section heading={heading}>
        {items.map((item) => (
          <Typography as="li" className="socialNetwork" variant="body">
            {item}
          </Typography>
        ))}
      </Section>
    </ExpertiseStyled>
  );
};
