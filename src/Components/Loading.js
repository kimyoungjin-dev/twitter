import React from "react";
import LoadingBG from "images/loading.gif";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <img src={LoadingBG} />
    </Container>
  );
};

export default Loading;
