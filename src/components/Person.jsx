import React, { Fragment } from "react";

export default function Person({ info, children}) {
  return (
    <Fragment>
      <p>
        Soy {info.name} y tengo {info.age} anios. Naci en{" "}
        {info.birthday.getFullYear()}.
      </p>{children}
    </Fragment>
  );
}
