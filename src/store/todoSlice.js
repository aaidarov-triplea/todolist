import { createSlice } from '@reduxjs/toolkit'
import { startTodolist } from '../data'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: startTodolist
  },
  reducers: {
    toggleTodo: (state, action) => {
      state.items = state.items.map((todo) => {
        if (todo.id === action.payload) {
          return { 
            ...todo, 
            isDone: !todo.isDone 
          }
        } else {
          return todo
        }
      })
    },
    addTodo: (state, actions) => {
      state.items.push({
          ...actions.payload,
          isDone: false,
          id: state.items.length
      })
  },
  }
})

export const todoActions = todoSlice.actions

export default todoSlice.reducer