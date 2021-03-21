import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

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

const Navigation = ({ userObj }) => {
  return (
    <Container>
      <ListContainer>
        <List>
          <Link to="/">
            <AiFillTwitterSquare size={60} color={"rgb(30,156,235)"} />
          </Link>
        </List>

        <List>
          <Link to="/profile">
            <FaUserCircle size={50} />
          </Link>
        </List>
      </ListContainer>
    </Container>
  );
};

export default Navigation;
