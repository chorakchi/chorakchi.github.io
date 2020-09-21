import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Responsive from "react-responsive";
import { screens } from "./../../shared";

class Palm extends PureComponent {
  render() {
    return (
      <Responsive maxWidth={screens.md - 1}>{this.props.children}</Responsive>
    );
  }
}

Palm.propTypes = {
  children: PropTypes.node,
};

export default Palm;
