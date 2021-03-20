import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const ListContainer = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
`;

const List = styled.li``;

const Navigation = ({ userObj }) => {
  return (
    <Container>
      <ListContainer>
        <List>
          <Link to="/">Home</Link>
        </List>

        <List>
          <Link to="/profile">{userObj.displayName}</Link>
        </List>
      </ListContainer>
    </Container>
  );
};

export default Navigation;
