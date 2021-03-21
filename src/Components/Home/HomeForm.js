import React from "react";
import styled from "styled-components";
import { GiTwirlyFlower } from "react-icons/gi";
import { MdAddAPhoto } from "react-icons/md";

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
  border-radius: 10px;
  padding-left: 20px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.7);
  ::placeholder {
    padding-left: 10px;
  }
`;

const File = styled.input`
  position: absolute;
  width: 40px;
  height: 50px;
  right: 100px;
  border-radius: 20px;
`;

const Label = styled.label`
  position: absolute;
  width: 40px;
  height: 50px;
  right: 65px;
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
          <GiTwirlyFlower
            type="submit"
            style={{
              width: "10%",
              height: "100%",
              marginLeft: 10,
            }}
          />
          <Label for="attach-file">
            <MdAddAPhoto style={{ width: "100%", height: "100%" }} />
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
