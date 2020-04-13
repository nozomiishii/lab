import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import R000 from "./r000/main";
import R001 from "./r001/main";
import R002 from "./r002/main";
import R003 from "./r003/main";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={R000} />
      <Route exact path="/r001" component={R001} />
      <Route exact path="/r002" component={R002} />
      <Route exact path="/r003" component={R003} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
