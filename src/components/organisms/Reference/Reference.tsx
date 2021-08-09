import { ReferenceStyled, PositionStyled } from "./Reference.styled";
import { ReferenceProps } from "./Reference.interface";
import { Section } from "../../molecules";
import { Typography } from "../..";
import { NumberLabel } from "../../molecules/NumberLabel/NumberLabel";
export const Reference: React.FC<ReferenceProps> = ({
  items=[],
  heading,
  label,
  ...props
}) => {
  return (
    <ReferenceStyled {...props}>
      {label && <NumberLabel className="numberLabel">{label}</NumberLabel>}
      <Section heading={heading}>
        {items.map((item, i) => (
          <PositionStyled  key={`refrence-${i}`}>
            <Typography className="socialNetwork" variant="body">
              {item.role}
            </Typography>
            <Typography className="socialNetwork" bold variant="body">
              {item.name}
            </Typography>
            <Typography className="socialNetwork" variant="body">
              <Typography variant="body" as="span" bold>
                Phone:
              </Typography>
              {item.phone}
            </Typography>
            <Typography className="socialNetwork" variant="body">
              <Typography variant="body" as="span" bold>
                Email:
              </Typography>
              {item.email}
            </Typography>
          </PositionStyled>
        ))}
      </Section>
    </ReferenceStyled>
  );
};
