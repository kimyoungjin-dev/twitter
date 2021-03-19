import React, { useState, useEffect } from "react";
import Router from "./Router";
import { authService } from "fbase";
import Loading from "Components/Loading";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    });
  }, []);

  return <>{init ? <Router isLogin={isLogin} /> : <Loading />}</>;
};

export default App;
