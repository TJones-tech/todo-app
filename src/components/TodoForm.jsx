import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 32px;
`;

const Input = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;

  ::placeholder {
       color: white;
   }
`;


const Button = styled.button`
   padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;
  &:hover {
    background-color: blue;
    transform: scale(1.1);
  }
`;

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <Input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <Button onClick={handleSubmit}>
            Update
          </Button>
        </>
      ) : (
        <>
          <Input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <Button onClick={handleSubmit}>
            Add todo
          </Button>
        </>
      )}
    </Form>
  );
}

export default TodoForm;