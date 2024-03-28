import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  
  const fetchTodos = async () => {
    const data = await fetch("http://localhost:5000/todos");
    const parsedData = await data.json();
    setTodos(parsedData);
  };

  const deleteTodo = async (id) => {
    const data = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "delete",
    });
    const response = data.json();
    
    fetchTodos();
  };
  const getTodoById = async (id) => {
    const data = await fetch(`http://localhost:5000/todos/${id}`);
    const response = await data.json();
    console.log("Updated...", response);
    navigate("/UpdateTodo", { state: { todo: response } });
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <Container>
      <Table hover>
        <thead>
          <th>ID</th>
          <th>TASK</th>
          <th>PREREQUISITES</th>
          <th>ISDONE</th>
          <th>UPDATE</th>
          <th>DELETE</th>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.task}</td>
                <td>{todo.prerequisites}</td>
                <td>{todo.isDone}</td>
                <td>
                  <Button
                    color="success"
                    onClick={() => {
                      getTodoById(todo.id);
                    }}
                  >
                    Update
                  </Button>
                </td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export default Todos;
