import { InterestStyled, IconContainerStyled } from "./Interest.styled";
import { InterestProps } from "./Interest.interface";
import { Typography, SVG } from "../..";
export const Interest: React.FC<InterestProps> = ({ label,icon,heading, ...props }) => {
  return (
    <InterestStyled {...props}>
        <IconContainerStyled>
<SVG name={icon} size="small"/>
        </IconContainerStyled>
        <Typography className="label" bold variant="caption">
          {label}
        </Typography>
    </InterestStyled>
  );
};
