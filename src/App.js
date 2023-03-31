import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { TodoList } from './components/todo-list'
import { useState } from 'react'
import { startTodolist } from './data'
import { useTodoList } from './hooks/useTodoList'

const Body = createGlobalStyle`
body {
  background-color: rgb(204, 204, 204);
  font-family: 'Poppins', sans-serif;
  margin: 0 15px;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
} 
`
const StyledH1 = styled.h1`
  font-size: 40px;
`

const StyledTodoList = styled(TodoList)`
  margin-top: 50px;
`

const StyledSelect = styled.select`
    appearance: none;
    font-size: 15px;
    font-family: 'Poppins';
    padding: 2px;
    text-align: center;
    border: 2px solid cadetblue;
`

const themes = {
  light: {
    backgroundColor: '#fff',
    textColor: '#000',
  },

  dark: {
    backgroundColor: '#000',
    textColor: '#fff',
  },

  colorful: {
    backgroundColor: '#19657f',
    textColor: '#adf9a1',
  }
}

const StyledComponent = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  `

function App() {
  const [theme, setTheme] = useState(themes.light)
  const { todos, toggleTodo } = useTodoList(startTodolist)

  const handleThemeChange = (e) => {
    const themeName = e.target.value;
    const selectedTheme = themes[themeName];
    setTheme(selectedTheme);
  }

  const getOverdueTodos = () => {
    const today = new Date()
    return todos.filter((todo) => !todo.isDone && new Date(todo.deadline) < today)
  }

  const getActualTodos = () => {
    const today = new Date()
    return todos.filter((todo) => !todo.isDone && new Date(todo.deadline) >= today)
  }

const getComplateTodos = () => {
  return todos.filter(todo => todo.isDone)
}

  return (
    <>
    <ThemeProvider theme={theme}>
    
    <StyledComponent>
    
    <StyledSelect 
      onClick={handleThemeChange}
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
    </StyledSelect>
    
    <Body />
    
    <div>
      <StyledH1>Todo List</StyledH1>
      <StyledTodoList
        title="Overdue"
        items={getOverdueTodos()}
        onToggleTodo={toggleTodo}
      />
      <StyledTodoList
        title="Actual"
        items={getActualTodos()}
        onToggleTodo={toggleTodo}
      />

      <StyledTodoList
        title="Complate"
        items={getComplateTodos()}
        onToggleTodo={toggleTodo}
      />
    </div>
    
    </StyledComponent>
    
    </ThemeProvider>
    </>
  )
}


export default App
