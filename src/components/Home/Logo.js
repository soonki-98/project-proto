import React from "react";
import styled from "styled-components";

const DivBlock = styled.div`
  text-align: center;
  margin: 300px 0;
`;

function Logo() {
  return (
    <DivBlock>
      <h1>우아한 동아리</h1>
    </DivBlock>
  );
}

export default Logo;
