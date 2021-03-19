import { dbService, storageService } from "fbase";
import React, { useState } from "react";

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
  };

  //fn
  const toggleEditing = () => setEditing((prev) => !prev);

  return (
    <div>
      {editing ? (
        <>
          <span>{tweetObj.text}</span>
          <form
            onSubmit={onSubmit}
            style={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            <input
              type="text"
              placeholder="수정할 트윗을 작성하세요"
              onChange={onChange}
              value={newTweet}
            />

            <div style={{ marginLeft: 5 }}>
              <input type="submit" value="트윗하기" />
              <button onClick={() => toggleEditing()}>취소하기</button>
            </div>
          </form>
        </>
      ) : (
        <>
          <div style={{ marginBottom: 5 }}>
            {tweetObj.attachmentUrl && (
              <img src={tweetObj.attachmentUrl} width="50px" height="50px" />
            )}
            <span>{tweetObj.text}</span>
          </div>

          {isOwer && (
            <div>
              <button onClick={() => toggleEditing()}>트윗 수정하기</button>
              <button onClick={() => onDeleteClick()}>트윗 삭제하기</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Tweet;
