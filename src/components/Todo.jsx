import { useState } from "react";
import React from 'react';
import styled from "styled-components";
import TodoForm from "./TodoForm";
import { TiTick, TiTimes } from "react-icons/ti";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const Wrapper = styled.div`
    
`;

const Box = styled.div`
    
`;

const TodoRowComplete = styled.div`
  opacity: 0.4;
`;

const TodoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    #03a403 0%,
    rgba(255, 84, 17, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 90%;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;

const DeleteIcon = styled.div`
  margin-right: 5px;
  color: #fff;
`;

const EditIcon = styled.div`
   color: #fff;
`;

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
const [edit, setEdit] = useState({
    id: null,
    value: ""
});

const submitUpdate = value => {
  updateTodo(edit.id, value);
  setEdit({
    id: null,
    value: ''
  });
};

if (edit.id) {
  return <TodoForm edit={edit} onSumbit={submitUpdate} />;
}
  return todos.map((todo, index) => (
      <Container>
        <TodoRow>
          <TodoRowComplete key={index}>
            <Wrapper key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </Wrapper>
          </TodoRowComplete>
        </TodoRow>
        <Box>
          <Icons>
            <EditIcon>
              <TiTick onClick={() => setEdit({ id: todo.id, value: todo.text })} />
            </EditIcon>
            <DeleteIcon>
              <TiTimes onClick={() => removeTodo(todo.id)} />
            </DeleteIcon>
          </Icons>
        </Box>
      </Container>
  ))
}

export default Todo;