import React from "react";
import styled from "styled-components";

const NavContainer = styled.ul`
  width: 100%;
  background-color: skyblue;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style-type: none;
  justify-content: center;
`;

const NavList = styled.li`
  padding: 25px 50px 25px 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

function ClubHeader() {
  return (
    <nav>
      <NavContainer>
        <NavList>서비스 소개</NavList>
        <NavList>동아리 목록</NavList>
        <NavList>동아리 홍보</NavList>
      </NavContainer>
    </nav>
  );
}

export default ClubHeader;
