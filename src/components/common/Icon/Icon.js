import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';

import { StyledIcon } from './Styled';
import { SvgIcons } from './../../../const';

const Icon = ({iconId, fontSize, color, ...others}) => (
  <StyledIcon
    fontSize={fontSize}
    color={color}
    {...others}
  >
    <SVGInline
      svg={SvgIcons[iconId]}
    >
    </SVGInline>
  </StyledIcon>
);

Icon.propTypes = {
  iconId: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string
};

Icon.defaultProps = {
  iconId: ''
};

export  {
  Icon
};
  
