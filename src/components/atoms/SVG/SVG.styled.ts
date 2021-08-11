import styled from "styled-components";
import { ReactSVG } from 'react-svg';

export const SVGStyled = styled(ReactSVG)`
display: inline-flex;
vertical-align: middle;

svg,
span {
    display: flex;
    fill: currentColor;
    width: 100%;
    height: 100%;
}

path {
    fill: currentColor;
}




`