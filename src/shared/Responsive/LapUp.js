import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Responsive from "react-responsive";
import { screens } from "../../shared";

class LapUp extends PureComponent {
  render() {
    return <Responsive minWidth={screens.lg}>{this.props.children}</Responsive>;
  }
}

LapUp.propTypes = {
  children: PropTypes.node,
};

export default LapUp;
