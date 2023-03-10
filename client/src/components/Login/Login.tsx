import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styled from "styled-components";

const Login = () => {
  return (
    <LoginOutContainer>
      <LoginFormOutContainer>
        <LoginTitle>Login</LoginTitle>
        <Form
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm>
              <Form.Control type="id" placeholder="UserID" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <br />

          <div className="d-grid gap-1">
            <Button
              variant="secondary"
              type="submit"
              style={{ height: "100%" }}
            >
              Sign In
            </Button>
            <a href="/register">
              <Button
                variant="secondary"
                style={{ height: "100%", width: "100%" }}
              >
                Register
              </Button>
            </a>
            <a href="/findid">
              <Button
                variant="secondary"
                style={{ height: "100%", width: "100%" }}
              >
                id찾기
              </Button>
            </a>

            <a href="/findpassword">
              <Button
                variant="secondary"
                style={{ height: "100%", width: "100%" }}
              >
                비밀번호찾기
              </Button>
            </a>
          </div>

          <SocialDiv className="d-grid ">
            <SocialImg src="카카오버튼.png" alt="카카오버튼"></SocialImg>
          </SocialDiv>
        </Form>
      </LoginFormOutContainer>
    </LoginOutContainer>
  );
};

const LoginOutContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    width: 100%;
  }
`;
const LoginTitle = styled.h1`
  margin-bottom: 50px;
`;
const LoginFormOutContainer = styled.div`
  background-color: white;
  box-shadow: 5px 5px 26px 5px lightgray;
  width: 30%;
  height: 70%;
  display: grid;
  align-content: center;
`;
const SocialImg = styled.img`
  height: 60%;
  cursor: pointer;
`;
const SocialDiv = styled.div`
  height: 60%;
  justify-content: center;
`;

export default Login;
