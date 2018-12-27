import styled from 'styled-components';

import { StyleConst } from '../../../const';

const { COLORS, ICON_SIZES } = StyleConst;

const IconColor = (props) => props.color && props.color || COLORS.ICONS;

const IconSize = (props) => props.size && ICON_SIZES[props.size] || props.width || ICON_SIZES['S'];

const StyledIcon = styled.div`
  /* width: ${props => props.width || '13px'}; */
  height: ${props => props.height || 'auto'};
  color: ${IconColor};
  font-size: ${IconSize};
  display: inline-block;
  
  .SVGInline-svg {
    display: inline-block;
    width: 1.8em;
    height: 1.8em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
`;
export {
  StyledIcon
};
