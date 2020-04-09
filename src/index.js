import React from "react";
import ReactDOM from "react-dom";

const R = 5;
const App = () => {
  const pages = [];
  let num;
  for (let i = 1; i <= R; i++) {
    if (i < 10) {
      num = `00${String(i)}`;
    } else if (i < 100) {
      num = `0${String(i)}`;
    }
    pages.push(
      <div key={`/r${num}`}>
        <a href={`/r${num}`}>{i}</a>
      </div>
    );
  }
  return (
    <div>
      <h1>lab lists will be rendered here</h1>
      {pages}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
