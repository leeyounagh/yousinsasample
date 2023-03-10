import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <ItemDiv>상의</ItemDiv>
      <ItemDiv>하의</ItemDiv>
      <ItemDiv>패션잡화</ItemDiv>
      <ItemDiv>원피스</ItemDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 20vw;
  height: 70vh;
  display: grid;
  margin-right: 50px;
`;

const ItemDiv = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

// 파라미터가 남성일때/ 여성일때 /액세서리일때 렌더링을 다르게 하는구조로 할거임
export default SideBar;
