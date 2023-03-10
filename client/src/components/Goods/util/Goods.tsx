import React from "react";
import styled from "styled-components";

import Button from "react-bootstrap/Button";

import SideBar from "./SideBar";
import Search from "./Search";
import ScrollBar from "./ScrollBar";
import Api from "./Api";

const Goods = () => {
  return (
    <GoodsContainer>
      <Search />

      <GoodsInnerContainer>
        <SideBar />
        <Api></Api>
      </GoodsInnerContainer>
      <MoreContentsDiv>
        <Button variant="dark" style={{ width: "10vw", height: "50%" }}>
          더보기..
        </Button>
      </MoreContentsDiv>
      <ScrollBarContainer>
        <ScrollBar />
      </ScrollBarContainer>
    </GoodsContainer>
  );
};

const GoodsContainer = styled.div`
  width: 100vw;

  margin-top: 100px;
  position: relative;
`;
const GoodsInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MoreContentsDiv = styled.div`
  height: 10vh;
  margin-top: 50px;
`;
const ScrollBarContainer = styled.div`
  position: fixed;
  top: 90vh;
  left: 88vw;
`;
export default Goods;
