import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>LAB T</h1>
      <Link to="/">Home</Link>
      <Link to="/t001">T001</Link>
    </div>
  );
};

export default Home;
