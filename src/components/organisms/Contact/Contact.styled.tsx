import styled, { css } from "styled-components";

import { ContactProps } from "./Contact.interface";

export const ContactStyled = styled.div<ContactProps>`
  display: flex;
  .numberLabel {
    margin-top: 40px;
    margin-right: 40px;
    margin-left: -10px;
  }
  .content{
  }
  ${({ theme }) => theme.Skills && theme.Skills.root};
`;
