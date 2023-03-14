import React, { Component } from "react";

export class text extends Component {
  render() {
    let langs = ["Ruby", "ES6", "Scala"];
    return (
      <div>
        {langs.map((it) => (
          <p>{it}</p>
        ))}
      </div>
    );
  }
}

export default text;
