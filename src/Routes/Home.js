import React, { useState, useEffect } from "react";
import { storageService } from "fbase";
import { dbService } from "fbase";
import Tweet from "Components/Tweet";
import { v4 as uuid } from "uuid";

const Home = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]); //tweets는 문서의 아이디를 가지고있고 세부정보 값들을 가지고있음
  const [attachment, setAttachment] = useState("");

  const getData = async () => {
    dbService.collection("tweet").onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((e) => ({
        id: e.id, //id 는 creatorId 가아닌 tweet의 document 아이디를 의미
        ...e.data(), //나머지 데이터는 collection 안의 정보를 의미
      }));
      setTweets(tweetArray);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const reference = storageService.ref().child(`${userObj.uid}/${uuid()}`);
    const response = await reference.putString(attachment, "data_url");
    console.log(response);
    // await dbService.collection("tweet").add({
    //   text: tweet,
    //   createdAt: Date.now(),
    //   creatorId: userObj.uid,
    // });
    // setTweet("");
  };

  //file

  const onFileChage = (event) => {
    const {
      target: { files },
    } = event;

    const theFile = files[0]; //파일을 갖는다.
    const reader = new FileReader(); //reader을 불러온다.
    reader.onloadend = (event) => {
      const {
        currentTarget: { result },
      } = event;
      setAttachment(result); //setAttachment 에 저장
    }; //그림파일을 읽기를 기다린다.
    reader.readAsDataURL(theFile); //불러온 reader로 파일을 읽는다.
  };

  //fn

  const onClearPhotoClick = () => setAttachment(null);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="당신의 트윗을 적어보세요"
          maxLength={120}
          onChange={onChange}
          value={tweet}
        />
        <input type="submit" value="트윗보내기" style={{ marginBottom: 20 }} />
        <input type="file" accept="image/*" onChange={onFileChage} />
        <div>
          {attachment && <img src={attachment} width="50px" height="50px" />}
          <button onClick={onClearPhotoClick}>삭제하기</button>
        </div>
      </form>
      <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweetObj={tweet}
            isOwer={tweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
