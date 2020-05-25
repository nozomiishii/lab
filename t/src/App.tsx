import React from "react";
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import t001 from "./t001/App";

\

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/t001" component={t001} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
