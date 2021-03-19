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

export default ({ isLogin, userObj, refreshUser }) => {
  return (
    <Router>
      {isLogin && <Navigation userObj={userObj} />}
      <Switch>
        {isLogin ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>

            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Login />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};
