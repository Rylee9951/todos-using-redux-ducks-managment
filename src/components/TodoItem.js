import React from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, changeStatus } from "../actions/todoactions"
import { useTodos } from "../redux/ducks/todo"

const TodoItem = props => {
  const { remove, toggle } = useTodos()
  function removeTodo(e) {
    remove(props.todo.id)
  }
  function handleToggle(e) {
    toggle(props.todo.id, props.todo.active)
  }

  return (
    <div id="todoitem" onClick={handleToggle}>
      <div className={props.todo.active ? "complete" : ""}>
        {props.todo.todo}
      </div>
      <button onClick={removeTodo} className="delete">
        X
      </button>
    </div>
  )
}

export default TodoItem
