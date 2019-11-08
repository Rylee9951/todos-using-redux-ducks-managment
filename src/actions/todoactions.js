// import axios from "axios"

// export function addTodo(todo) {
//   return dispatch => {
//     axios.post("/todos", { todo: todo, active: false }).then(resp => {
//       // dispatch({
//       //   type: "ADD_TODO",
//       //   payload: resp.data
//       // })
//       dispatch(getTodos())
//     })
//   }
// }

// export function getTodos() {
//   return dispatch => {
//     axios.get("/todos").then(resp => {
//       dispatch({
//         type: "LIST_TODOS",
//         payload: resp.data
//       })
//     })
//   }
// }

// export function changeStatus(id, status) {
//   return dispatch => {
//     if (status === false) {
//       axios.patch("/todos/" + id, { active: true }).then(resp => {
//         // dispatch({
//         //   type: "TOGGLE_TODO",
//         //   id: id
//         // })
//         dispatch(getTodos())
//       })
//     } else {
//       axios.patch("/todos/" + id, { active: false }).then(resp => {
//         // dispatch({
//         //   type: "TOGGLE_TODO",
//         //   id: id
//         // })
//         dispatch(getTodos())
//       })
//     }
//   }
// }

// export function addFilter(filter) {
//   return dispatch => {
//     dispatch({
//       type: "GET_FILTERED_TODOS",
//       payload: filter
//     })
//   }
// }

// export function deleteTodo(id) {
//   return dispatch => {
//     axios.delete("/todos/" + id).then(resp => {
//       // dispatch({
//       //   type: "DELETE_TODO",
//       //   id: id
//       // })
//       dispatch(getTodos())
//     })
//   }
// }

// export function clearComplete(ids) {
//   const response = ids.map(id => axios.delete("/todos/" + id))
//   return dispatch => {
//     axios.all(response).then(resp => {
//       dispatch(getTodos())
//     })
//   }
// }
