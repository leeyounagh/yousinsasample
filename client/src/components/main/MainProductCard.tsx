import React from "react";

import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MainCard from "./MainCard";

const MainProductCard = () => {
  return (
    <MainProductArticle>
      <MainProductTitle>오늘은 이상품 어때요?</MainProductTitle>
      <MainProductOuterDiv>
        <MainProductInnerDiv>
          <Row xs={1} md={4} className="g-4 d-flex justify-content-center">
            {Array.from({ length: 8 })
              .fill(0)
              .map(() => {
                return (
                  <>
                    <Col>
                      <MainCard />
                    </Col>
                  </>
                );
              })}
          </Row>
        </MainProductInnerDiv>
      </MainProductOuterDiv>
    </MainProductArticle>
  );
};

const MainProductArticle = styled.article`
  width: 100vw;
  height: 100vh;
`;
const MainProductTitle = styled.h1`
  margin: 50px;
`;
const MainProductInnerDiv = styled.div`
  width: 80vw;
`;
const MainProductOuterDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export default MainProductCard;
