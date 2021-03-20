import { firebaseInstance, authService } from "fbase";
import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";

const Container = styled.div`
  width: 300px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  border: 1px solid black;
  padding: 10px;
  border-radius: 20px;
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
    await authService.signInWithPopup(provider);
  };

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={onSocialClick} name="google">
          <AiFillGoogleCircle />
          <span> 구글계정 로그인</span>
        </Button>
        <Button onClick={onSocialClick} name="github">
          <AiFillGithub />
          <span> Github 로그인</span>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Social;
