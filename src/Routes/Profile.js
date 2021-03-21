import { authService } from "fbase";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { GrLogout } from "react-icons/gr";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding-bottom: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100px;
  margin: 20px 0px;
`;

const Input = styled.input`
  width: 100%;
  height: 70%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-family: "PT Serif", serif;
  ::placeholder {
    padding-left: 10px;
  }
`;

const Button = styled.button`
  all: unset;
  text-align: center;
  margin: 20px 0px;
  font-family: "PT Serif", serif;
`;

const Name = styled.span`
  font-family: "PT Serif", serif;
`;

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== "") {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  const onHomeClick = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <Container>
      <div>
        <Name> Name : {userObj.displayName}</Name>
      </div>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          type="text"
          value={newDisplayName}
          placeholder="Write down the account name you want to change"
        />
        <Button type="submit">Modify Nickname</Button>
      </Form>

      <GrLogout onClick={onHomeClick} />
    </Container>
  );
};

export default Profile;
