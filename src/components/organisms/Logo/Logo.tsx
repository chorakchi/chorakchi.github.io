import { LogoStyled } from "./Logo.styled";
import { LogoProps } from "./Logo.interface";
import { Typography } from "../..";
export const Logo: React.FC<LogoProps> = ({
  firstName="",
  lastName="",
  role="",
  socialNetwork=[],
  ...props
}) => {
  return (
    <LogoStyled {...props}>
      <Typography className="firstName" variant="headline_xl">
        {firstName.toUpperCase()}
      </Typography>
      <Typography className="lastName" variant="headline_xxl">
        {lastName.toUpperCase()}
      </Typography>
      <Typography className="role" variant="headline_xs">
        {role.toUpperCase()}
      </Typography>
      {socialNetwork.map((item, i) => (
        <Typography
        key={`sn-${i}`}
          className="socialNetwork"
          variant="caption"
          as="a"
          href={item.link}
        >
          {item.label}
        </Typography>
      ))}
    </LogoStyled>
  );
};
