import React, { useState } from "react";
import Router from "./Router";
import { authService } from "fbase";

console.log(authService);
const App = () => {
  const [isLogin, setIsLogin] = useState(authService.currentUser);
  return (
    <>
      <Router isLogin={isLogin} />
    </>
  );
};

export default App;