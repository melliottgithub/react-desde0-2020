import React, { Fragment } from "react";

export default function Person({ info }) {
  return (
    <Fragment>
      <p>
        Soy {info.name} y tengo {info.age} anios. Naci en{" "}
        {info.birthday.getFullYear()}.
      </p>
    </Fragment>
  );
}
