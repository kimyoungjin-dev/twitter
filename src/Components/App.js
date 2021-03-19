import React, { useState, useEffect } from "react";
import Router from "./Router";
import { authService } from "fbase";
import Loading from "Components/Loading";

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          id: user.uid,
          updateProfile: (cta) => user.updateProfile(cta),
        });
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      id: user.uid,
      updateProfile: (props) => user.updateProfile(props),
    });
  };

  return (
    <>
      {init ? (
        <Router
          isLogin={Boolean(userObj)}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;
