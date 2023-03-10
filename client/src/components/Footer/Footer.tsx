import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTextDiv>
        <FooterInnerTextDiv>
          <p>Copyright © 2023 fourtrees.co.,Ltd. All rights reserved.</p>
        </FooterInnerTextDiv>
      </FooterTextDiv>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  height: 10vh;
  width: 100vw;
  background-color: #212529;
  p {
    color: white;
  }
`;
const FooterTextDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterInnerTextDiv = styled.div``;

export default Footer;
