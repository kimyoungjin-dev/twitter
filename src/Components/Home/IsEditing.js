import React from "react";
import styled from "styled-components";

const Form = styled.form`
  height: 100%;
  height: 50px;
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  all: unset;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 100%;
  padding-left: 10px;

  ::placeholder {
    padding-left: 10px;
    opacity: 0.6;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: -40px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Button = styled.button`
  all: unset;
  margin-left: 20px;
  font-size: 20px;
`;

const IsEditing = ({ onSubmit, onChange, newTweet, toggleEditing }) => {
  return (
    <Form
      onSubmit={onSubmit}
      style={{
        flexDirection: "row",
        display: "flex",
      }}
    >
      <Input
        type="text"
        placeholder="수정할 트윗을 작성하세요"
        onChange={onChange}
        value={newTweet}
      />

      <ButtonContainer>
        <Button type="submit">확인</Button>
        <Button onClick={() => toggleEditing()}>취소</Button>
      </ButtonContainer>
    </Form>
  );
};

export default IsEditing;
