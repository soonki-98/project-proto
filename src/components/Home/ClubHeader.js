import React from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const NavContainer = styled.ul`
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: ${(props) =>
    props.scrollPosition > 1 ? "#82D9C9" : "#C2F2DC"};
  display: flex;
  flex-direction: row;
  margin: 0 0 50px 0;
  list-style-type: none;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  box-shadow: 1px 1px 1px 1px lightgray;
`;

const NavList = styled.li`
  padding: 25px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 5px;
  &:hover {
    color: white;
  }
`;

const Serach = styled.li`
  margin: 30px 40px 0 40px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 500px;
  line-height: 50px;
  font-size: 20px;
  height: 20px;
  border: none;
  background: none;
  border-bottom: 1px solid gray;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;

function ClubHeader({ scrollPosition, onToggle, toggle }) {
  return (
    <nav>
      <NavContainer scrollPosition={scrollPosition}>
        <Serach>
          <BiSearchAlt onClick={onToggle} size="25" />
          {toggle ? (
            <Input type="text" placeholder="검색어를 입력하세요" autoFocus />
          ) : null}
        </Serach>
        {toggle ? null : <NavList>서비스 소개</NavList>}
        {toggle ? null : <NavList>동아리 목록</NavList>}
        {toggle ? null : <NavList>동아리 홍보</NavList>}
      </NavContainer>
    </nav>
  );
}

export default ClubHeader;
