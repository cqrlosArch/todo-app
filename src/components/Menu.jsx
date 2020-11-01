import React from 'react';
import styled from 'styled-components';
import ItemMenu from './ItemMenu';

const MenuStyled = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = ({ filter, changeFilter }) => {
  return (
    <MenuStyled>
      <ItemMenu changeFilter={changeFilter} filter={filter} value="all">
        All
      </ItemMenu>
      <ItemMenu changeFilter={changeFilter} filter={filter} value="active">
        Active
      </ItemMenu>
      <ItemMenu changeFilter={changeFilter} filter={filter} value="completed">
        Completed
      </ItemMenu>
    </MenuStyled>
  );
};

export default Menu;
