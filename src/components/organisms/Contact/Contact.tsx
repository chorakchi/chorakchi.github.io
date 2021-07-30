import { ContactStyled } from "./Contact.styled";
import { ContactProps } from "./Contact.interface";
import { Section } from "../../molecules";
import { Typography } from "../..";
import { NumberLabel } from "../../molecules/NumberLabel/NumberLabel";
export const Contact: React.FC<ContactProps> = ({
  phone,
  email,
  heading,
  label,
  ...props
}) => {
  return (
    <ContactStyled {...props}>
      {label && <NumberLabel className="numberLabel">{label}</NumberLabel>}
      <Section heading={heading || ""}>
        <Typography className="content" variant="body">
          <Typography variant="body" as="span" bold>
            Call &nbsp;&nbsp;
          </Typography>
          {phone} &nbsp;&nbsp; or &nbsp;&nbsp;
          <Typography variant="body" as="span" bold>
            Email &nbsp;&nbsp;
          </Typography>
          {email}
        </Typography>
      </Section>
    </ContactStyled>
  );
};
