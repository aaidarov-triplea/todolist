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
        ...state.form,
        [actions.payload.name]: actions.payload.value,
      }
    },
    reloadForm:(state) => {
        state.form = {
          text: '',
          deadline: ''
        }
    }
  }
  
})

export const todoFormActions = todoFormSlice.actions

export default todoFormSlice.reducer