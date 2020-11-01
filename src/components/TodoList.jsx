import React from 'react';
import styled from 'styled-components';
import Task from './Task';

const TodoListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: stretch;
  margin: 1rem 0;
`;

const TodoList = ({ taskList, changeState, deleteTask, filter }) => {
  return (
    <TodoListStyled>
      {taskList?.map((task) => {
        return (
          (filter === 'all' ||
            (filter === 'completed' && task.completed) ||
            (filter === 'active' && !task.completed)) && (
            <Task
              task={task}
              key={task.id}
              changeState={changeState}
              deleteTask={deleteTask}
            />
          )
        );
      })}
    </TodoListStyled>
  );
};

export default TodoList;
