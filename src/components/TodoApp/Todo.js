import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti'
import { Box, Icon, Text } from '@chakra-ui/react';
import {FaLongArrowAltRight} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { currentTodo } from '../../Redux/actions';
import { useNavigate } from 'react-router-dom'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const dispatch = useDispatch()
  const nav = useNavigate()

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Box maxW={'800px'}
      className={todo.status ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <Text  fontSize={'18px'}  key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </Text>
      <div style={{}} className='icons'>
        
        <TiEdit
          color='darkgreen'
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <RiCloseCircleLine
          color='red'
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <Icon  fontSize={'20px'} onClick={()=>{
          dispatch(currentTodo(todo))
          localStorage.setItem("currentObj",JSON.stringify(todo))
          nav('/timer')

        }
      } as={FaLongArrowAltRight} />
      </div>
    </Box>
  ));
};

export default Todo;
