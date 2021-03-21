import React from "react";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const Container = styled.div``;

const Contents = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding-left: 10px;

  ::placeholder {
    padding-left: 10px;
    opacity: 0.6;
  }
`;

const Text = styled.span`
  font-size: 20px;
`;

const Photo = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  top: -20px;
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
            size={40}
            onClick={() => toggleEditing()}
          />
          <BsTrash
            style={{ padding: 5, cursor: "pointer" }}
            size={35}
            onClick={() => onDeleteClick()}
          />
        </ButtonContainer>
      )}
    </Container>
  );
};

export default NotEditing;
