import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [desc, setdesc] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Title or Description cannot be blank');
    } else {
      addTodo(title, desc);
      setTitle('');
      setdesc('');
    }
  };
  return (
    <div className='container my-3'>
      <h3>ADD A TASK</h3>
      <form onSubmit={submit}>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Task Title
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='desc' className='form-label'>
            Task Description
          </label>
          <input
            type='text'
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            className='form-control'
            id='desc'
          />
        </div>
        <button type='submit' className='btn btn-success btn-lg'>
          Add Task
        </button>
      </form>
    </div>
  );
};
