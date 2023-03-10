import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { BsCardImage } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

const MyPage = () => {
  return (
    <MyPageContainer>
      <MyPageInnerContatiner>
        <MyPageTitle>My Page</MyPageTitle>
        <ItemContainer>
          <ItemInnerContainer>
            <BsFillPersonFill size="50"></BsFillPersonFill>
            <ItemText>Information</ItemText>
          </ItemInnerContainer>
          <ItemInnerContainer>
            <BsCardImage size="50"></BsCardImage>
            <ItemText>UpLoaded</ItemText>
          </ItemInnerContainer>
          <ItemInnerContainer>
            <MdOutlinePayment size="50"></MdOutlinePayment>
            <ItemText>Paid</ItemText>
          </ItemInnerContainer>
          <ItemInnerContainer>
            <BsHeartFill size="50"></BsHeartFill>
            <ItemText>MyStyle</ItemText>
          </ItemInnerContainer>
          <ItemInnerContainer>
            <TfiWrite size="50"></TfiWrite>
            <ItemText>MyWritten</ItemText>
          </ItemInnerContainer>
        </ItemContainer>
      </MyPageInnerContatiner>
    </MyPageContainer>
  );
};

const MyPageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MyPageTitle = styled.h1`
  text-align: center;
  padding-top: 50px;
  height: 30%;
`;
const MyPageInnerContatiner = styled.div`
  border: 1px solid #6c757d;
  width: 80%;
  height: 40%;
`;
const ItemContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ItemInnerContainer = styled.div``;
const ItemText = styled.div`
  font-size: 1.5rem;
`;
export default MyPage;
