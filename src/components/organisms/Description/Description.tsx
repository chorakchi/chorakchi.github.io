import { DescriptionStyled } from "./Description.styled";
import { DescriptionProps } from "./Description.interface";
import { Section } from "../../molecules";
import { Typography } from "../..";
import { NumberLabel } from "../../molecules/NumberLabel/NumberLabel";
export const Description: React.FC<DescriptionProps> = ({
  description,
  heading = "",
  label,
  ...props
}) => {
  return (
    <DescriptionStyled {...props}>
      {label && <NumberLabel className="numberLabel">{label}</NumberLabel>}
      <Section heading={heading}>
        <Typography className="description" variant="body" as="Text">
          {description}
        </Typography>
      </Section>
    </DescriptionStyled>
  );
};
