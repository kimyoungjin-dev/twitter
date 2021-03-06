import React, { useState, useEffect } from "react";
import { storageService } from "fbase";
import { dbService } from "fbase";
import Tweet from "Components/Tweet";
import { v4 as uuid } from "uuid";
import HomeForm from "Components/Home/HomeForm";
import HomeImage from "images/HomeMainImg.jpeg";
import styled from "styled-components";

const Container = styled.div``;

const ImageContainer = styled.div`
  background-color: blue;
  margin-top: 10px;
  height: 300px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Home = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]); //tweets는 문서의 아이디를 가지고있고 세부정보 값들을 가지고있음
  const [attachment, setAttachment] = useState("");

  const getData = async () => {
    dbService.collection("tweet").onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((e) => ({
        id: e.id,
        ...e.data(),
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

    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuid()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }

    const tweetObj = {
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("tweet").add(tweetObj);
    setTweet("");
    setAttachment("");
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

  const onClearPhotoClick = () => setAttachment(null);

  return (
    <Container>
      <ImageContainer>
        <Image src={HomeImage} style={{ backgroundColor: "white" }} />
      </ImageContainer>
      <HomeForm
        onSubmit={onSubmit}
        onChange={onChange}
        tweet={tweet}
        onFileChage={onFileChage}
        attachment={attachment}
        onClearPhotoClick={onClearPhotoClick}
      />
      <>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweetObj={tweet}
            isOwer={tweet.creatorId === userObj.uid}
          />
        ))}
      </>
    </Container>
  );
};

export default Home;
