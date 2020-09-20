import { HOME_PAGE, PORTFOLIO_PAGE } from "./../pages/types";
import getHistory from "./history";

const navigate = (routeName: string, params?: mixed) => {
  if (getHistory) {
    const history = getHistory();
    if (history) {
      history.push(`/${routeName}`, params);
    }
  }
};

export const navigateHome = (params?: mixed) => {
  navigate(HOME_PAGE, params);
};
export const navigatePortfolio = (params?: mixed) => {
  navigate(PORTFOLIO_PAGE, params);
};
