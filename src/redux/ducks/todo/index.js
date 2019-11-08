import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

//action names
const LIST_TODOS = "todo/LIST_TODOS"
const GET_FILTERED = "todo/GET_FILTER"

//reducer
const initialState = {
  todos: [],
  filter: "all"
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_TODOS:
      return { ...state, todos: action.payload }

    case GET_FILTERED:
      return { ...state, filter: action.payload }
    default:
      return state
  }
}

//custom hook
export function useTodos() {
  const dispatch = useDispatch()
  const filter = useSelector(appState => appState.todoReducer.filter)
  const todos = useSelector(appState => {
    switch (filter) {
      case "all":
        return appState.todoReducer.todos
      case "completed":
        return appState.todoReducer.todos.filter(item => item.active === true)
      case "active":
        return appState.todoReducer.todos.filter(item => item.active === false)
    }
  })
  const count = useSelector(appState =>
    appState.todoReducer.todos.filter(item => !item.active)
  ).length
  const completedTodos = useSelector(appState =>
    appState.todoReducer.todos.filter(item => item.active)
  )
  // let ids = completedTodos.map(item => item.id)
  const fetch = () => dispatch(getTodos())
  const add = todo => dispatch(addTodo(todo))
  const remove = id => dispatch(deleteTodo(id))
  const toggle = (id, status) => dispatch(changeStatus(id, status))
  const clearAll = ids => dispatch(clearComplete(ids))
  const selectFilter = filter => dispatch(addFilter(filter))

  useEffect(() => {
    fetch()
  }, [])

  return {
    filter,
    todos,
    count,
    completedTodos,
    selectFilter,
    fetch,
    add,
    remove,
    toggle,
    clearAll
  }
}
//actions
export function addTodo(todo) {
  return dispatch => {
    axios.post("/todos", { todo: todo, active: false }).then(resp => {
      dispatch(getTodos())
    })
  }
}

export function getTodos() {
  return dispatch => {
    axios.get("/todos").then(resp => {
      dispatch({
        type: LIST_TODOS,
        payload: resp.data
      })
    })
  }
}

export function changeStatus(id, status) {
  return dispatch => {
    if (status === false) {
      axios.patch("/todos/" + id, { active: true }).then(resp => {
        dispatch(getTodos())
      })
    } else {
      axios.patch("/todos/" + id, { active: false }).then(resp => {
        dispatch(getTodos())
      })
    }
  }
}

export function addFilter(filter) {
  return dispatch => {
    dispatch({
      type: GET_FILTERED,
      payload: filter
    })
  }
}

export function deleteTodo(id) {
  return dispatch => {
    axios.delete("/todos/" + id).then(resp => {
      dispatch(getTodos())
    })
  }
}

export function clearComplete(ids) {
  const response = ids.map(id => axios.delete("/todos/" + id))
  return dispatch => {
    axios.all(response).then(resp => {
      dispatch(getTodos())
    })
  }
}
