import React from "react";
import Main from "./Main";
import { hotjar } from "react-hotjar";
hotjar.initialize(1718986, 6);

function App() {
  return <Main />;
}

export default App;
