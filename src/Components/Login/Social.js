import { firebaseInstance, authService } from "fbase";
import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const Container = styled.div`
  width: 300px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: black;

  :not(:first-child) {
    margin-left: 10px;
  }
`;

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
    const data = await authService.signInWithPopup(provider);
  };
  return (
    <Container>
      <ButtonContainer>
        <Button onClick={onSocialClick} name="google">
          <FcGoogle size={30} /> Continue with Google
        </Button>
        <Button onClick={onSocialClick} name="github">
          <AiFillGithub size={30} /> Continue with Github
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Social;
