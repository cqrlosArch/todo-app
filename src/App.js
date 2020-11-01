import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Button from './components/Button';
import Form from './components/Form';
import Menu from './components/Menu';
import TodoList from './components/TodoList';
import Wrapper from './components/Wrapper';
import localSt from './storage/config';

const GlobalStyled = createGlobalStyle`
  *{
    box-sizing:border-box;
  }
  body{
    width:800px;
    height:auto;
    font-family: 'Montserrat', sans-serif;
    display:flex;
    justify-content:center;
    margin:0 auto;
    @media screen and (max-width: 700px){
    width: 100%;
    margin:0;
  }
  }
`;

const initialTaskList = [
  { id: 1, title: 'Hacer la compra en Mercadona', completed: false },
  { id: 2, title: 'Configurar Alexa', completed: true },
];

function App() {
  const [taskList, setTaksList] = useState(null);
  const [filter, setFilter] = useState('all');

  const changeState = (id) => {
    const newList = taskList.map(
      (task) =>
        (task.id === id && { ...task, completed: !task.completed }) || task
    );

    setTaksList(newList);
  };

  const addTask = (task) => {
    const newTask = {
      id: taskList[taskList.length - 1]?.id + 1 || 1,
      title: task,
      completed: false,
    };

    console.log(newTask);
    setTaksList((task) => task.concat(newTask));
  };

  const changeFilter = (filter) => {
    setFilter(filter.value);
  };

  const deleteTask = (id) => {
    const newList = taskList.filter((task) => task.id !== id);

    setTaksList(newList);
  };
  const deleteAll = () => {
    setTaksList([]);
  };

  //Init app
  useEffect(() => {
    if (!localStorage.getItem('todoStorage')) {
      localSt.setLocalStore('todoStorage', initialTaskList);
      setTaksList(initialTaskList);
    } else {
      setTaksList(localSt.getLocalStore('todoStorage'));
    }
  }, []);

  //Add new tasks
  useEffect(() => {
    localSt.setLocalStore('todoStorage', taskList);
  }, [taskList]);

  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <Menu filter={filter} changeFilter={changeFilter} />
        <Form addTask={addTask} />
        <TodoList
          taskList={taskList}
          changeState={changeState}
          deleteTask={deleteTask}
          filter={filter}
        />
        {filter === 'completed' && (
          <Button deleteAll={deleteAll}>delete all</Button>
        )}
      </Wrapper>
    </>
  );
}

export default App;
