import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  position: absolute;
  right: 0;
  border: none;
  outline: none;
  width: 124px;
  height: 40px;
  background: #eb5757;
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Button = ({ deleteAll, children }) => {
  return (
    <ButtonStyled onClick={deleteAll}>
      <span className="material-icons icon">delete_outline</span>
      {children}
    </ButtonStyled>
  );
};

export default Button;
