import React from "react";
import styled from "styled-components";

const FontBlock = styled.div`
  text-align: center;
`;

const DivBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  padding: 20px;
`;

const Contents1 = styled.div`
  width: 60%;
  height: 70%;
  background-color: skyblue;
  margin-bottom: 20px;
`;
const Contents2 = styled.div`
  width: 60%;
  height: 70%;
  background-color: lightgray;
`;

function News() {
  return (
    <FontBlock>
      <h2>우아한 애자일 소식</h2>
      <DivBlock>
        <Contents1 />
        <Contents2 />
      </DivBlock>
    </FontBlock>
  );
}

export default News;
