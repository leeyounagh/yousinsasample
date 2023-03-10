import React from "react";
import styled from "styled-components";
import MainCarousel from "./MainCarousel";
import MainProductCard from "./MainProductCard";
import VirtualProductCard from "./VirtualProductCard";

const Main = () => {
  return (
    <MainDiv>
      <MainCarousel />

      <MainProductCard />
      <VirtualProductCard />
    </MainDiv>
  );
};

const MainDiv = styled.section``;
export default Main;
