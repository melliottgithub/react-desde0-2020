import React, { Fragment } from "react";
import Person from "./Person";
import Header from "./Header";

const PropsObjext = () => {
  return (
    <Fragment>
      <Header />
      <Person
        info={{ age: 30, birthday: new Date(1989, 11, 4), name: "Carlos" }}>Hello I am here</Person>
          
    </Fragment>
  );
};

export default PropsObjext;
