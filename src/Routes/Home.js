import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Tweet from "Components/Tweet";

const Home = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]); //tweets는 문서의 아이디를 가지고있고 세부정보 값들을 가지고있음
  const getData = async () => {
    dbService.collection("tweet").onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((e) => ({
        id: e.id, //id 는 creatorId 가아닌 tweet의 document 아이디를 의미
        ...e.data(), //나머지 데이터는 collection 안의 정보를 의미
      }));
      console.log(tweetArray);
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
    await dbService.collection("tweet").add({
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setTweet("");
  };

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
