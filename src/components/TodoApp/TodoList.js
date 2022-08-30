import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ErrorOutlineSharp } from "@material-ui/icons";

function TodoList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todos);
  const arr = state.todoArr;
  // console.log({arr})

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //  ******   ADD TODO ******** //

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    axios
      .post("http://localhost:8080/todos", todo)
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        console.log(ErrorOutlineSharp);
      });

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  //  ******   UPDATE TODO ******** //

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    axios
      .patch(`http://localhost:8080/todos/${todoId}`, newValue)
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        console.log(ErrorOutlineSharp);
      });

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //  ******   REMOVE TODO ******** //

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);

    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;

        axios
          .patch(`http://localhost:8080/todos/${id}`, { status: todo.status })
          .then((res) => {
            // console.log(res)
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <Box my="40px">
      <Text my="20px" fontSize={"1.25rem"} textAlign={"center"}>
        What's the Plan for Today?
      </Text>
      <TodoForm onSubmit={addTodo} />
      {loading && (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </Box>
  );
}

export default TodoList;
