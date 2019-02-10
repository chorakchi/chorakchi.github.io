import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';

import { StyledIcon } from './Styled';
import { SvgIcons } from './../../../const';

const Logo = ({iconId, fontSize, color, ...others}) => (
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

Logo.propTypes = {
  iconId: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string
};

Logo.defaultProps = {
  iconId: ''
};

export  {
  Logo
};
  
