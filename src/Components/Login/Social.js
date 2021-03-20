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

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: black;
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
          <AiFillGoogleCircle color={"white"} size={30} />
          <span style={{ color: "white", marginLeft: 10 }}>
            구글계정 로그인
          </span>
        </Button>
        <Button onClick={onSocialClick} name="github">
          <AiFillGithub color={"white"} size={30} />
          <span style={{ color: "white", marginLeft: 10 }}> Github 로그인</span>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Social;
