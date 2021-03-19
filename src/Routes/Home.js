import React, { useState, useEffect } from "react";

const Home = () => {
  const [tweet, setTweet] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
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
    </div>
  );
};

export default Home;
