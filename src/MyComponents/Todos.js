import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  let myStyle = {
    minHeight: '70vh',
    margin: '40px auto',
    border: '2px solid black',
  };
  return (
    <div className='container' style={myStyle}>
      <h3 className='text-center'>TO-DO LIST</h3>
      {props.todos.length === 0
        ? 'YOU ARE FREE FOR THE DAY!!! YAYYYYYYY!!'
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
