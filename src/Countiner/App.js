import React from "react";
import Main from "./Main";
import { hotjar } from "react-hotjar";
hotjar.initialize(1988903, 6);

function App() {
  return <Main />;
}

export default App;
