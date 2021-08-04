import React from "react";
import styled from "styled-components";
import {
  AiOutlineGithub,
  AiFillAliwangwang,
  AiFillApple,
  AiOutlineQq,
  AiOutlineTwitter,
} from "react-icons/ai";

const UlBlock = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
`;

const LiBlock = styled.li`
  text-align: center;
  margin: -90px -60px 20px -60px;
`;

const PBlock = styled.p`
  font-size: 20px;
  /* font-weight: bold; */
  color: gray;
`;

function Logo() {
  return (
    <UlBlock>
      <LiBlock>
        <AiOutlineGithub size="40%" />
        <PBlock>깃허브</PBlock>
      </LiBlock>
      <LiBlock>
        <AiFillAliwangwang size="40%" />
        <PBlock>왕왕</PBlock>
      </LiBlock>
      <LiBlock>
        <AiFillApple size="40%" />
        <PBlock>애플</PBlock>
      </LiBlock>
      <LiBlock>
        <AiOutlineQq size="40%" />
        <PBlock>큐큐</PBlock>
      </LiBlock>
      <LiBlock>
        <AiOutlineTwitter size="40%" />
        <PBlock>트위터</PBlock>
      </LiBlock>
    </UlBlock>
  );
}

export default Logo;
