import React, { useState } from "react";
import { authService } from "fbase";
import { firebaseInstance } from "fbase";
import Form from "Components/Login/Form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

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
      <Form onSubmit={onSubmit} onChange={onChange} error={error} />
      <span onClick={() => setNewAccount((prev) => !prev)}>
        {newAccount ? "로그인" : "회원가입"}
      </span>
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

export default Login;
