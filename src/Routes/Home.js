import React, { useState, useEffect } from "react";
import { dbService } from "fbase";

const Home = () => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  console.log(tweets);
  const getData = async () => {
    const dbTweet = await dbService.collection("tweet").get();
    dbTweet.forEach((document) => {
      const tweetObj = {
        ...document.data(),
        id: document.id,
      };
      setTweets((prev) => [tweetObj, ...prev]);
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
      tweet,
      createBy: Date.now(),
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
        />
        <input type="submit" value="트윗보내기" />
      </form>
      <div>
        {tweets.map((e) => (
          <div key={e.id}>{e.tweet}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
