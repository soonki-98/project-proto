import React from "react";
import styled from "styled-components";

const NavContainer = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: ${(props) =>
    props.scrollPosition > 1 ? "white" : "skyblue"};
  display: flex;
  flex-direction: row;
  margin: 0 0 50px 0;
  padding: 0;
  list-style-type: none;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  box-shadow: 1px 1px 1px 1px lightgray;
`;

const NavList = styled.li`
  padding: 25px 50px 25px 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

function ClubHeader({ scrollPosition }) {
  return (
    <nav>
      <NavContainer scrollPosition={scrollPosition}>
        <NavList>서비스 소개</NavList>
        <NavList>동아리 목록</NavList>
        <NavList>동아리 홍보</NavList>
      </NavContainer>
    </nav>
  );
}

export default ClubHeader;
