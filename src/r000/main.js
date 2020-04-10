import React from "react";
import { Link } from "react-router-dom";
import Dinosaur from "../components/Dinosaur";

const R = 5;
const R000 = () => {
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
        <Link href={`/r${num}`}>{i}</Link>
      </div>
    );
  }
  return (
    <div>
      <div class="title">
        <h1>
          <Dinosaur />
          React Lab
          <Dinosaur />
        </h1>
      </div>
      <h1>lab lists will be rendered here</h1>
      {pages}
    </div>
  );
};

export default R000;
