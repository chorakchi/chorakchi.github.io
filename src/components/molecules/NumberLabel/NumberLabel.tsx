import { NumberLabelStyled } from "./NumberLabel.styled";
import { NumberLabelProps } from "./NumberLabel.interface";
import { Typography } from "../..";
export const NumberLabel: React.FC<NumberLabelProps> = ({ children, ...props }) => {
  return (
    <NumberLabelStyled {...props}>
      <svg
        width="31"
        height="19"
        viewBox="0 0 31 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 9L31 0H0.5V18.5H31L24 9Z" fill="black" />
      </svg>

      <Typography className="number" color="white" bold variant="caption">
        {children}
      </Typography>
    </NumberLabelStyled>
  );
};
