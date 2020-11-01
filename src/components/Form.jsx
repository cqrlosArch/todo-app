import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyled = styled.div`
  .form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__input {
      width: 476px;
      height: 40px;
      border: 1px solid #bdbdbd;
      box-sizing: border-box;
      border-radius: 12px;
      font-size: 14px;
      line-height: 17px;
      color: #828282;
      padding: 1rem;
      outline: none;
      @media screen and (max-width: 700px) {
        height: 20px;
        max-width: 476px;
        margin-right: 0.5rem;
      }
    }
    &__button {
      border: none;
      outline: none;
      width: 109px;
      height: 40px;
      background: #2f80ed;
      box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
      border-radius: 12px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      cursor: pointer;
      @media screen and (max-width: 700px) {
        height: 35px;
      }
    }
  }
`;

const Form = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
  };
  return (
    <FormStyled>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="add details"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form__input"
        />
        <button className="form__button">Add</button>
      </form>
    </FormStyled>
  );
};

export default Form;
