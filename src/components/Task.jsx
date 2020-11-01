import React from 'react';
import styled from 'styled-components';

const TaskStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0;
  position: relative;
  .input {
    outline: none;
    width: 18px;
    height: 18px;
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 4px;
  }
  .task-title {
    font-weight: 500;
    font-size: 18px;
    margin-left: 0.5rem;
    color: ${({ checked }) => checked && '#333333'};
    text-decoration: ${({ checked }) => checked && 'line-through'};
    @media screen and (max-width: 700px) {
      font-size: 14px;
    }
  }
  .icon {
    position: absolute;
    right: 0;
    cursor: pointer;
    color: #bdbdbd;
  }
`;

const Task = ({ task, changeState, deleteTask }) => {
  return (
    <TaskStyled checked={task.completed}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => changeState(task.id)}
        className="input"
      />
      <label className="task-title">{task.title}</label>
      <span className="material-icons icon" onClick={() => deleteTask(task.id)}>
        delete_outline
      </span>
    </TaskStyled>
  );
};

export default Task;
