import styled, { css } from "styled-components";
import { TypographyProps } from "./Typography.interface";

export const TypographyStyled = styled.div<TypographyProps>`
  font-weight: ${({ bold }) => (bold ? "bold" : "unset")};
  color: ${({ theme, color }) =>
    theme.color[color] ||
    (color ? color : (theme.color && theme.color.primary_dark) || "black")};
  ${({ variant, theme }) => {
    switch (variant) {
      case "headline_xxl":
        return css`
          /* h1 */
          ${theme.Typography.headline_xxl};
        `;
      case "headline_xl":
        /* h2 */
        return css`
          ${theme.Typography.headline_xl};
        `;
      case "headline_l":
        /* h3 */
        return css`
          ${theme.Typography.headline_l};
        `;
      /* h4 */
      case "headline_m":
        return css`
          ${theme.Typography.headline_m};
        `;
      case "headline_s":
        /* h5 */
        return css`
          ${theme.Typography.headline_s};
        `;
      case "headline_xs":
        /* h6 */
        return css`
          ${theme.Typography.headline_xs};
        `;
      case "body":
        return css`
          ${theme.Typography.body};
        `;
      case "body2":
        return css`
          ${theme.Typography.body2};
        `;
      case "caption":
        return css`
          ${theme.Typography.caption};
        `;
      case "inherit":
        return css`
          font-size: "inherit";
        `;
      default:
        return css`
          font-size: 16px;
        `;
    }
  }}
  ${({ theme }) => theme.Typography.root};
`;
