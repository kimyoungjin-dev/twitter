import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { BiHomeHeart } from "react-icons/bi";

const Container = styled.div`
  padding: 0px 5px;
  margin-top: 10px;
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const List = styled.li`
  cursor: pointer;
  font-size: 17px;
`;

const Name = styled.span`
  font-family: "PT Serif", serif;
`;

const Navigation = () => {
  return (
    <Container>
      <ListContainer>
        <List>
          <Link
            to="/"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BiHomeHeart
              size={40}
              color={"rgb(30,156,235)"}
              style={{ marginBottom: 10 }}
            />
            <Name>Home</Name>
          </Link>
        </List>

        <List>
          <Link
            to="/profile"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FaUserCircle
              size={40}
              style={{ marginBottom: 10 }}
              color="skyblue"
            />
            <Name>Profile</Name>
          </Link>
        </List>
      </ListContainer>
    </Container>
  );
};

export default Navigation;
