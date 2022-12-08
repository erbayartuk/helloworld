import React from "react";
import Model from "../w3School/es6_class";
import ComponentClass from "../w3School/component_class";

export default function Home() {
  const mycar = new Model("Ford", "Mustang");
  const normalFunction = function () {
    return "Normal Function";
  };
  const arrowFunction = () => {
    return "Arrow Function";
  };

  return (
    <div>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <div>{mycar.show()}</div>
        <div>{normalFunction()}</div>
        <div>{arrowFunction()}</div>
        <div>
          <ComponentClass color="red" index="5" />
        </div>
      </div>
    </div>
  );
}
