import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Table, Button } from 'reactstrap'
import todoContext from '../../context/todoContext'


const NewTodos = () => {
  const navigate = useNavigate()
  const a = useContext(todoContext)
  const updateHandler =async(id)=>{
    const todo = await a.getTodoById(id)
    navigate("/UpdateTodo", { state: { todo:todo } })
  }
  useEffect(() => {
    a.fetchTodos()
  }, [])
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
          {a.todos.map((todo) => {
            return <tr>
              <td>{todo.id}</td>
              <td>{todo.task}</td>
              <td>{todo.prerequisites}</td>
              <td>{todo.isDone.toString()}</td>
              <td><Button color="success" onClick={()=>updateHandler}>Update</Button></td>
              <td><Button color="danger" onClick={() => a.deleteTodo(todo.id)}>Delete</Button></td>
            </tr>
          })}
        </tbody>
      </Table>

    </Container>
  )
}

export default NewTodos

