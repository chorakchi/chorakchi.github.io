import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Responsive from "react-responsive";
import { screens } from "./../../shared";

class DesktopUp extends PureComponent {
  render() {
    return <Responsive minWidth={screens.xl}>{this.props.children}</Responsive>;
  }
}

DesktopUp.propTypes = {
  children: PropTypes.node,
};

export default DesktopUp;
