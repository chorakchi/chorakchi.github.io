import { ExperienceStyled, PositionStyled } from "./Experience.styled";
import { ExperienceProps } from "./Experience.interface";
import { Section } from "../../molecules";
import { Typography } from "../..";
import { NumberLabel } from "../../molecules/NumberLabel/NumberLabel";
export const Experience: React.FC<ExperienceProps> = ({
  items,
  heading,
  label,
  ...props
}) => {
  return (
    <ExperienceStyled {...props}>
      <NumberLabel className="numberLabel">{label}</NumberLabel>
      <Section heading={heading}>
        {items.map((item) => (
          <PositionStyled>
          <Typography className="socialNetwork" bold variant="body">
            {item.startDate}-{item.endDate || 'Present'}
          </Typography>
          <Typography className="socialNetwork" bold variant="body">
            {item.companyName}
          </Typography>
          <Typography className="socialNetwork" variant="body">
            {item.role}
          </Typography>
          <Typography className="socialNetwork" variant="body">
            {item.description}
          </Typography>
          </PositionStyled>
        ))}
      </Section>
    </ExperienceStyled>
  );
};
