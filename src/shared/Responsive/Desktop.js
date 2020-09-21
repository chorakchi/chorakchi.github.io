import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Responsive from "react-responsive";
import { screens } from "../../shared";

class Desktop extends PureComponent {
  render() {
    return (
      <Responsive minWidth={screens.xl} maxWidth={screens.xxl - 1}>
        {this.props.children}
      </Responsive>
    );
  }
}

Desktop.propTypes = {
  children: PropTypes.node,
};

export default Desktop;
