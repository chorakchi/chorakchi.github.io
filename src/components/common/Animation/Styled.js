import styled, { css } from "styled-components"

const StyledAnimation = styled.div`


  position:absolute;
	left:0;
	right:0;
	top:0;
	bottom:0;

  ${props => (props.type == "blur" && props.active)   && css`
  @keyframes loadfilterAnimat {
    from {
      filter:  blur(0px);
    }
    to {
      filter: blur(5px);
    }
  }
  animation: loadfilterAnimat 2000ms ease ;
  animation-fill-mode: forwards;
  `
}

${props => (props.type == "blur" && !props.active)   && css`
  @keyframes loadfilterAnimat {
    from {
      filter:  blur(5px);
    }
    to {
      filter: blur(0px);
    }
  }
  animation: loadfilterAnimat 2000ms ease ;
  animation-fill-mode: forwards;
  `
}
`;

export { StyledAnimation }