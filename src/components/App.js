import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import TodoForm from "./TodoForm"
import TodoContainer from "./TodoContainer"
import TodoFooter from "./TodoFooter"
import "../styles/todo.css"

function App() {
  return (
    <Provider store={store}>
      <div id="container">
        <h1>Todos</h1>
        <TodoForm />
        <TodoContainer />
        <TodoFooter />
      </div>
    </Provider>
  )
}

export default App
