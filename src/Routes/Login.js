import React, { useState } from "react";
import { authService } from "fbase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

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
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
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
        <input type="submit" value={newAccount ? "계정만들기" : "로그인"} />
      </form>
      <div>
        <button>구글계정 로그인</button>
        <button>깃허브계정 로그인</button>
      </div>
    </>
  );
};

export default Login;
