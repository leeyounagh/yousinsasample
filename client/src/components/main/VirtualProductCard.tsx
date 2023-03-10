import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import MainCard from "./MainCard";

const VirtualProductCard = () => {
  return (
    <VirtualMain>
      <VirtualTitle>가상으로 입어 보고 소통해요!</VirtualTitle>
      <VirtualOuterDiv>
        <VirtualInnerDiv>
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
        </VirtualInnerDiv>
      </VirtualOuterDiv>
    </VirtualMain>
  );
};

const VirtualMain = styled.article`
  margin-bottom: 10vh;
  width: 100vw;
  height: 100vh;
`;
const VirtualTitle = styled.h1`
  margin: 50px;
`;
const VirtualInnerDiv = styled.div`
  width: 80vw;
`;
const VirtualOuterDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export default VirtualProductCard;
