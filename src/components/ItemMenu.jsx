import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const ItemMenuStyled = styled.button`
  font-family: Montserrat;
  font-style: normal;
  border: none;
  outline: none;
  background-color: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
  cursor: pointer;
  position: relative;
  width: 100px;
  @media screen and (max-width: 700px) {
    font-size: 12px;
  }

  ${({ visible }) =>
    visible &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(6%, 17px);
        width: 89px;
        height: 4px;
        background: #2f80ed;
        border-radius: 4px 4px 0px 0px;
        @media screen and (max-width: 700px) {
          transform: translate(30%, 17px);
          width: 60px;
        }
        @media screen and (max-width: 400px) {
          transform: translate(10%, 17px);
        }
      }
    `}
`;

const ItemMenu = ({ filter, changeFilter, children, value }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (filter === value) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [filter, value]);

  //TODO poner un estado general false que cambie al click
  return (
    <ItemMenuStyled
      visible={visible}
      filter={filter}
      value={value}
      onClick={(e) => changeFilter(e.target)}
    >
      {children}
    </ItemMenuStyled>
  );
};

export default ItemMenu;
