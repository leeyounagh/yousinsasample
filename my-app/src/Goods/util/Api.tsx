import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import styled from "styled-components";

const Api = () => {
  let [data, setData] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("/v1/search/shop.json", {
        params: {
          query: "여성",
          display: 100,
        },
        headers: {
          "X-Naver-Client-Id": "eLni7U4bHXMbke6NNVD1",
          "X-Naver-Client-Secret": "cP3kkbtLj5",
        },
      })
      .then((res) => {
        console.log(res);
        // setData((prev) => [...prev, ...res.data.items]);
      })
      .catch((e) => {});
  }, []);

  return (
    <Container>
      <Row xs={1} md={3} className="g-4 d-flex justify-content-center">
        {/* {data.map((item) => {
          return (
            <>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    style={{ width: "100%", height: "30vh" }}
                    variant="top"
                    src={item.image}
                  />
                  <Card.Body>
                    <Card.Title>
                      {item.title.replace(/<[^>]*>?/g, "")}
                    </Card.Title>
                    <Card.Text>{item.lprice}원</Card.Text>
                    <Button variant="dark">구매하기</Button>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })} */}
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
export default Api;
