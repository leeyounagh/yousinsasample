import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Register = () => {
  return (
    <RegisterOutContainer>
      <RegisterFormOutContainer>
        <RegisterTitle>Register</RegisterTitle>
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
              <Form.Control type="password" placeholder="Username" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3 d-flex flex-column"
            controlId="formPlaintextPassword"
          >
            <Col sm>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>
          <Button
            style={{ marginBottom: "5px", height: "80%" }}
            variant="secondary"
            type="submit"
          >
            인증
          </Button>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Col>
          </Form.Group>

          <br />

          <div className="d-grid gap-1">
            <Button variant="secondary" type="submit">
              Sign Up
            </Button>
          </div>
          <SocialDiv className="d-grid ">
            <SocialImg src="카카오버튼.png" alt="카카오버튼"></SocialImg>
          </SocialDiv>
        </Form>
      </RegisterFormOutContainer>
    </RegisterOutContainer>
  );
};
const RegisterOutContainer = styled.section`
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
const RegisterTitle = styled.h1`
  margin-bottom: 50px;
`;
const RegisterFormOutContainer = styled.div`
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
export default Register;
