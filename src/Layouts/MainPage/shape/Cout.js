import React from "react";
import styled from "styled-components";

const CoutStyled = styled.div`
  width: 0;
  position: relative;
`;

export const Cout = ({ ...props }) => {
  return (
    <CoutStyled {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="98.63"
        height="92.963"
        viewBox="0 0 98.63 92.963"
      >
        <path
          fill="#ffe60f"
          id="coutBig"
          d="M49.629-228.293L31.55-184.159H8.862v-92.877h40.767zm57.782 0l-18.079 44.134H66.645v-92.877h40.767z"
          transform="rotate(.05 -317454.05 -10201.082)"
        />
      </svg>
    </CoutStyled>
  );
};
