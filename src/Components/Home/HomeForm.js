import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const HomeForm = ({
  onSubmit,
  onChange,
  tweet,
  onFileChage,
  attachment,
  onClearPhotoClick,
}) => {
  return (
    <Container>
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
          {attachment && (
            <div>
              <img src={attachment} width="50px" height="50px" />
              <button onClick={() => onClearPhotoClick()}>삭제하기</button>
            </div>
          )}
        </div>
      </form>
    </Container>
  );
};

export default HomeForm;
