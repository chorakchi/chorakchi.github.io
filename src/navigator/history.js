// @flow

import React from "react";
import { withRouter } from "react-router";

let globalHistory = null;

type Props = {
  history: any,
};
type State = {};
class Spy extends React.Component<Props, State> {
  UNSAFE_componentWillMount() {
    const { history } = this.props;
    globalHistory = history;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    globalHistory = nextProps.history;
  }

  render() {
    return null;
  }
}

export const GlobalHistory = withRouter<any>(Spy);

export default function getHistory() {
  return globalHistory;
}
