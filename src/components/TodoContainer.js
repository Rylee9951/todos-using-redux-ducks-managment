import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTodos } from "../actions/todoactions"
import TodoItem from "./TodoItem"
import { useTodos } from "../redux/ducks/todo"

const TodoContainer = props => {
  // const filter = useSelector(appState => appState.todoReducer.filter)
  // const todos = useSelector(appState => {
  //   switch (filter) {
  //     case "all":
  //       return appState.todoReducer.todos
  //     case "completed":
  //       return appState.todoReducer.todos.filter(item => item.active === true)
  //     case "active":
  //       return appState.todoReducer.todos.filter(item => item.active === false)
  //   }
  // })
  // const dispatch = useDispatch()

  const { todos } = useTodos()

  return (
    <div id="todosContainer">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoContainer
