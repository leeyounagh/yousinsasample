import React from "react";
import styled from "styled-components";
import { FcSearch } from "react-icons/fc";

const Search = () => {
  return (
    <Container>
      <Input />
      <FcSearch style={{ cursor: "pointer" }} size="30px"></FcSearch>
    </Container>
  );
};

const Container = styled.div`
  height: 10vh;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 40%;

  display: block;
  border: none;
  border-bottom: 1px solid #757575;
  font-size: 1.3rem;
  background-color: #efefef;
  &:focus {
    outline: none;
  }
`;
export default Search;
