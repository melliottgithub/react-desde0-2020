import React, { Fragment } from "react";
import "./App.css";
import PropsObjext from "./components/PropsObjext";
// import Header from "./components/Header";
// import Person from "./components/Person";

function App() {
  return (
    <Fragment>
      <PropsObjext />
    </Fragment>
  );
  {/* <Header />
  <Person name="Pepe"
    age={27} birthday={new Date(1993, 11, 4)} />
  <Person name="Carlos" age={30} birthday={new Date(1989, 11, 4)} />
  <Person name="Juan" age={56} birthday={new Date(1964, 11, 4)} /> */}
}

export default App;
