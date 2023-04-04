import { createSlice } from '@reduxjs/toolkit'

export const todoFormSlice = createSlice({
  name: 'todoForm',
  initialState: {
    form: {
      text: '',
      deadline: '',
    }
  },
  reducers: {
    changeField: (state, actions) => {
      state.form = {
        ...state,
        [actions.payload.name]: actions.payload.value,
      }
    },
  }
})

export const todoFormActions = todoFormSlice.actions

export default todoFormSlice.reducer