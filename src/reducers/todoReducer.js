// const initialState = {
//   todos: [],
//   filter: "all"
// }

// export default function(state = initialState, action) {
//   switch (action.type) {
//     // case "ADD_TODO":
//     //   return { ...state, todos: [action.payload, ...state.todos] }
//     case "LIST_TODOS":
//       return { ...state, todos: action.payload }
//     // case "DELETE_TODO":
//     //   return {
//     //     ...state,
//     //     todos: state.todos.filter(item => action.id !== item.id)
//     //   }
//     case "TOGGLE_TODO":
//       return {
//         ...state,
//         todos: state.todos.map(item => {
//           if (item.id === action.id) {
//             item.active = !item.active
//           }
//           return item
//         })
//       }
//     case "GET_FILTERED_TODOS":
//       return { ...state, filter: action.payload }
//     default:
//       return state
//   }
// }
