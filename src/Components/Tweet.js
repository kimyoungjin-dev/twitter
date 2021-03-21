import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import styled from "styled-components";
import IsEditing from "./Home/IsEditing";
import NotEditing from "./Home/NotEditing";

const Container = styled.div`
  padding: 0px 10px;
  margin-top: 10px;
`;

// * tweets는 문서의 아이디를 가지고있고 세부정보 값들을 가지고있음

const Tweet = ({ tweetObj, isOwer }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetObj.text);

  //delete, editing //

  const onDeleteClick = async () => {
    const sure = window.confirm("Are you sure you want to delete the Tweet?");
    if (sure) {
      await dbService.doc(`tweet/${tweetObj.id}`).delete();
      await storageService.refFromURL(tweetObj.attachmentUrl).delete();
    }
  };

  //onchange, onsubmit //

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewTweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`tweet/${tweetObj.id}`).update({
      text: newTweet,
    });
    setNewTweet("");
    toggleEditing();
  };

  //fn
  const toggleEditing = () => setEditing((prev) => !prev);

  return (
    <Container>
      {editing ? (
        <IsEditing
          tweetObj={tweetObj}
          onSubmit={onSubmit}
          onChange={onChange}
          newTweet={newTweet}
          toggleEditing={toggleEditing}
        />
      ) : (
        <NotEditing
          tweetObj={tweetObj}
          isOwer={isOwer}
          toggleEditing={toggleEditing}
          onDeleteClick={onDeleteClick}
        />
      )}
    </Container>
  );
};

export default Tweet;
