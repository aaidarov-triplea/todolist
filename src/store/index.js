import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import todoFormReducer from './todoFormSlice'

export default configureStore({
  reducer: {
    todo: todoReducer,
    todoForm: todoFormReducer,
  }
})