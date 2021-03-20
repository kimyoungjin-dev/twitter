import React from "react";
import LoginForm from "Components/Login/LoginForm";
import Social from "Components/Login/Social";
import styled from "styled-components";

const Container = styled.div``;

const Login = () => {
  return (
    <Container>
      <LoginForm />
      <Social />
    </Container>
  );
};

export default Login;
