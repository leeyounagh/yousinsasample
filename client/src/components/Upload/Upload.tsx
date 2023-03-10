import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Dropzone from "react-dropzone";
import Button from "react-bootstrap/Button";
const Upload = () => {
  return (
    <UploadContainer>
      <UploadInnerContainer>
        <Form>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <UploadTitle>사진 업로드</UploadTitle>
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <article>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Form.Control type="file" />
                  </div>
                </article>
              )}
            </Dropzone>
          </Form.Group>
          <UploadImageContainer>
            <UploadImg
              alt="업로드이미지"
              src="https://i.pinimg.com/564x/16/c0/d3/16c0d3fb1e00d37e076947d6ea057aa1.jpg"
            />
          </UploadImageContainer>
          <Button
            variant="secondary"
            type="submit"
            style={{ width: "40%", marginTop: "20px" }}
          >
            사진 등록
          </Button>
        </Form>
      </UploadInnerContainer>
    </UploadContainer>
  );
};

const UploadContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UploadTitle = styled.h1`
  text-align: center;
`;
const UploadInnerContainer = styled.div`
  width: 40%;
  height: 60%;
  border: 1px solid lightgray;
  padding-top: 30px;
`;
const UploadImageContainer = styled.div`
  width: 100%;
  height: 45vh;
`;

const UploadImg = styled.img`
  width: 100%;
  height: 100%;
`;
export default Upload;
