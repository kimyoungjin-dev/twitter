import React, { useState } from "react";
import { authService } from "fbase";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";

const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const LogoTitle = styled.span`
  font-size: 30px;
  display: block;
  margin: 20px 0px;
  font-family: "Lato", sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 300px;
  justify-content: space-between;
`;

const Input = styled.input`
  background-color: rgb(236, 239, 244);
  border: none;
  border-radius: 20px;
  height: 35px;
  outline: none;

  ::placeholder {
    margin-left: 10px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.3);
  }
  :not(:last-child) {
    padding-left: 20px;
  }
  :last-child {
    background-color: rgb(109, 195, 239);
    color: white;
    font-size: 16px;
  }
`;

const Error = styled.span`
  display: block;
  margin: 10px 0px;
  color: rgba(0, 0, 0, 0.5);
`;

const ToggleButton = styled.span`
  display: block;
  margin-bottom: 10px;
`;

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
    <Container>
      <FaTwitter size={50} color={"rgb(109, 195, 239)"} />
      <LogoTitle>Log in to Twitter</LogoTitle>
      <Form onSubmit={onSubmit}>
        <Input
          name="email"
          type="email"
          onChange={onChange}
          placeholder="Email"
          required
          maxLength="20"
        />
        <Input
          name="password"
          type="password"
          onChange={onChange}
          placeholder="Password"
          required
          maxLength="20"
        />
        <Input type="submit" value={newAccount ? "Sign up" : "Log in"} />
      </Form>

      <Error>{error}</Error>
      <ToggleButton onClick={() => setNewAccount((prev) => !prev)}>
        {newAccount ? "Log in" : "Sign up"}
      </ToggleButton>
    </Container>
  );
};

export default LoginForm;
