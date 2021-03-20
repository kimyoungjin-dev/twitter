import React, { useState } from "react";
import { authService } from "fbase";

const LoginForm = () => {
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
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          onChange={onChange}
          placeholder="Email"
          required
          maxLength="20"
        />
        <input
          name="password"
          type="password"
          onChange={onChange}
          placeholder="Password"
          required
          maxLength="20"
        />
        {error}
        <input type="submit" value={newAccount ? "계정만들기" : "로그인"} />
      </form>

      <span onClick={() => setNewAccount((prev) => !prev)}>
        {newAccount ? "로그인" : "회원가입"}
      </span>
    </>
  );
};

export default LoginForm;
