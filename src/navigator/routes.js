import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../Layouts/MainPage";
import PortfolioPage from "../Layouts/PortfolioPage";

import { HOME_PAGE, PORTFOLIO_PAGE } from "../pages/types";
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path={`/${HOME_PAGE}`} component={MainPage} />
    <Route exact path={`/${PORTFOLIO_PAGE}`} component={PortfolioPage} />
  </Switch>
);
