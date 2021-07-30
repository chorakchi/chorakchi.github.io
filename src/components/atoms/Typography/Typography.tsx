import { TypographyStyled } from "./Typography.styled";
import { TypographyProps } from "./Typography.interface";
export const Typography: React.FC<TypographyProps> =({ ...props }: TypographyProps) => {
  return <TypographyStyled {...props} />;
};
