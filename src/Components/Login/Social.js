import { firebaseInstance, authService } from "fbase";
import React from "react";

const Social = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  return (
    <>
      <div>
        <button onClick={onSocialClick} name="google">
          구글계정 로그인
        </button>
        <button onClick={onSocialClick} name="github">
          깃허브계정 로그인
        </button>
      </div>
    </>
  );
};

export default Social;
