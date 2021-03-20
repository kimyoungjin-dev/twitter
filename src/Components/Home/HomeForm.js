import React from "react";
import styled from "styled-components";
import { AiFillTwitterCircle } from "react-icons/ai";

const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 30px;
`;

const Form = styled.form`
  position: relative;
  height: 50px;
  display: flex;
  width: 100%;
  padding: 0px 5px;
`;

const Input = styled.input`
  all: unset;
  width: 80%;
  border-radius: 20px;
  padding-left: 20px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.7);
  ::placeholder {
    padding-left: 10px;
  }
`;

const InputButton = styled.button`
  all: unset;
  text-align: center;
  width: 20%;
`;

const File = styled.input`
  position: absolute;
  width: 40px;
  height: 50px;
  right: 80px;
  border-radius: 20px;
`;

const Label = styled.label`
  position: absolute;
  width: 40px;
  height: 50px;
  right: 80px;
`;

const Attachent = styled.div`
  position: absolute;
  bottom: 100px;
  right: 15px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const HomeForm = ({
  onSubmit,
  onChange,
  tweet,
  onFileChage,
  attachment,
  onClearPhotoClick,
}) => {
  return (
    <>
      <Container>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="당신의 트윗을 적어보세요"
            maxLength={120}
            onChange={onChange}
            value={tweet}
          />
          <InputButton type="submit">트윗하기</InputButton>
          <Label for="attach-file">
            <AiFillTwitterCircle style={{ width: "100%", height: "100%" }} />
          </Label>
          <File
            style={{ opacity: 0 }}
            type="file"
            accept="image/*"
            onChange={onFileChage}
            id="attach-file"
          />
        </Form>
      </Container>

      <Attachent>
        {attachment && (
          <Contents>
            <Image src={attachment} width="50px" height="50px" />
            <span
              style={{ marginLeft: 10 }}
              onClick={() => onClearPhotoClick()}
            >
              취소
            </span>
          </Contents>
        )}
      </Attachent>
    </>
  );
};

export default HomeForm;
