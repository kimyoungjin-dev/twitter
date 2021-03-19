import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Login from "Routes/Login";

export default ({ isLogin }) => {
  return (
    <Router>
      <Switch>
        {isLogin ? (
          <Route exact component={Home} path="/" />
        ) : (
          <Route component={Login} path="/" />
        )}
      </Switch>
    </Router>
  );
};
