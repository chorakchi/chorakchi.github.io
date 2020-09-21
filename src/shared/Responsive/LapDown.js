import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Responsive from "react-responsive";
import { screens } from "../../shared";

class LapDown extends PureComponent {
  render() {
    return (
      <Responsive maxWidth={screens.lg - 1}>{this.props.children}</Responsive>
    );
  }
}

LapDown.propTypes = {
  children: PropTypes.node,
};

export default LapDown;
