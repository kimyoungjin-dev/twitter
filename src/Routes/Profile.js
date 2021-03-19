import { authService } from "fbase";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== "") {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  const history = useHistory();

  const onHomeClick = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          value={newDisplayName}
          placeholder="새로운 닉네임을 입력해주세요"
        />
        <input type="submit" value="확인" />
      </form>

      <button onClick={onHomeClick}>로그아웃</button>
    </div>
  );
};

export default Profile;
