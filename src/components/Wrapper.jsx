import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media screen and (max-width: 700px) {
    width: 400px;
    margin: 0;
  }
  @media screen and (max-width: 400px) {
    width: 300px;
  }
  .title {
    font-family: 'Raleway', sans-serif;
    margin-top: 3rem;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    letter-spacing: -0.045em;
    color: #333333;
  }
`;

const Wrapper = ({ children }) => {
  return (
    <WrapperStyled>
      <h1 className="title">#todo</h1>
      {children}
    </WrapperStyled>
  );
};

export default Wrapper;
