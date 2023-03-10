import React from "react";
import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollBar = () => {
  return (
    <Container>
      <BsFillArrowUpCircleFill size="50px"></BsFillArrowUpCircleFill>
    </Container>
  );
};

const Container = styled.div`
  width: 10vw;
  height: 50px;
`;

export default ScrollBar;
