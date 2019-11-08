import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../actions/todoactions"
import { useTodos } from "../redux/ducks/todo"

const TodoForm = props => {
  const [todo, setTodo] = useState("")

  const { add } = useTodos()

  function handleSubmit(e) {
    e.preventDefault()
    add(todo)
    setTodo("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
          placeholder="Add Todos ..."
        />
        <button className="addButton" type="submit">
          +
        </button>
      </div>
    </form>
  )
}

export default TodoForm
