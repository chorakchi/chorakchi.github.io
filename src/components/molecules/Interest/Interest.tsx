import { InterestStyled, IconContainerStyled } from "./Interest.styled";
import { InterestProps } from "./Interest.interface";
import { Typography } from "../..";
export const Interest: React.FC<InterestProps> = ({ label,icon,heading, ...props }) => {
  return (
    <InterestStyled {...props}>
        <IconContainerStyled>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49999 0L9.18384 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.49999 10.3647L3.0916 13.5676L4.77545 8.38525L0.367065 5.18237H5.81613L7.49999 0Z"
              fill="#5A5A5A"
            />
          </svg>
        </IconContainerStyled>
        <Typography className="label" bold variant="caption">
          {label}
        </Typography>
    </InterestStyled>
  );
};
