import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "Routes/Login";
import Home from "Routes/Home";
import Profile from "Routes/Profile";
import Navigation from "./Navigation";

export default ({ isLogin }) => {
  return (
    <Router>
      {isLogin && <Navigation />}
      <Switch>
        {isLogin ? (
          <>
            <Route exact component={Home} path="/" />
            <Route exact component={Profile} path="/profile" />
            <Redirect from="*" to="/" />
          </>
        ) : (
          <>
            <Route component={Login} path="/" />
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};
