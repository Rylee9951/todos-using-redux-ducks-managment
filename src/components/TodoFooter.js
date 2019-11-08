import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addFilter, clearComplete } from "../actions/todoactions"
import { useTodos } from "../redux/ducks/todo"
const TodoFooter = props => {
  // const count = useSelector(appState =>
  //   appState.todoReducer.todos.filter(item => !item.active)
  // ).length
  // const completedTodos = useSelector(appState =>
  //   appState.todoReducer.todos.filter(item => item.active)
  // )
  // const dispatch = useDispatch()

  const { clearAll, selectFilter, completedTodos, count } = useTodos()
  let ids = completedTodos.map(item => item.id)

  function handleAll(e) {
    selectFilter("all")
  }
  function handleComplete(e) {
    selectFilter("completed")
  }
  function handleActive(e) {
    selectFilter("active")
  }
  function handleCLearComplete(e) {
    clearAll(ids)
  }
  return (
    <div>
      <div>Items left: {count}</div>
      <button onClick={handleAll}>All</button>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleActive}>Active</button>
      <button onClick={handleCLearComplete}>Clear Complete</button>
    </div>
  )
}

export default TodoFooter
