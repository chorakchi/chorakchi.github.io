import React from "react";
import { hotjar } from "react-hotjar";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./../navigator/routes";
import { GlobalHistory } from "./../navigator/history";
hotjar.initialize(1988903, 6);

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <GlobalHistory />
        <Routes />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
