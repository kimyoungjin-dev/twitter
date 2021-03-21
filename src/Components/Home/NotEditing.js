import React from "react";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const Container = styled.div``;

const Contents = styled.div`
  background-color: gray;
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 5px;
  padding-left: 10px;

  ::placeholder {
    padding-left: 10px;
    opacity: 0.6;
  }
`;

const Text = styled.span`
  font-size: 18px;
  color: white;
`;

const Photo = styled.img`
  border-radius: 100%;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: -10px;
`;

const ButtonContainer = styled.div`
  text-align: end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.button`
  all: unset;
  padding: 5px;
  cursor: pointer;
`;

const NotEditing = ({ tweetObj, isOwer, onDeleteClick, toggleEditing }) => {
  return (
    <Container>
      <Contents style={{ marginBottom: 5 }}>
        <Text>{tweetObj.text}</Text>
        {tweetObj.attachmentUrl && (
          <Photo src={tweetObj.attachmentUrl} width="50px" height="50px" />
        )}
      </Contents>
      {isOwer && (
        <ButtonContainer>
          <AiFillEdit
            style={{ padding: 5, cursor: "pointer" }}
            size={35}
            onClick={() => toggleEditing()}
          />
          <BsTrash
            style={{ padding: 5, cursor: "pointer" }}
            size={30}
            onClick={() => onDeleteClick()}
          />
        </ButtonContainer>
      )}
    </Container>
  );
};

export default NotEditing;
