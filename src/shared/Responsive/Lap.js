import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Responsive from "react-responsive";
import { screens } from "../../shared";

class Lap extends PureComponent {
  render() {
    return (
      <Responsive minWidth={screens.lg} maxWidth={screens.xl - 1}>
        {this.props.children}
      </Responsive>
    );
  }
}

Lap.propTypes = {
  children: PropTypes.node,
};

export default Lap;
