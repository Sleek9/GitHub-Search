import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";

const GitHubSearch = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:name" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default GitHubSearch;
