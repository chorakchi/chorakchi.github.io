import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Responsive from "react-responsive";
import { screens } from "../../shared";

class Cinema extends PureComponent {
  render() {
    return (
      <Responsive minWidth={screens.xxl}>{this.props.children}</Responsive>
    );
  }
}

Cinema.propTypes = {
  children: PropTypes.node,
};

export default Cinema;
