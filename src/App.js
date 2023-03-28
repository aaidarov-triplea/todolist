import styled from 'styled-components'
import { TodoList } from './components/todo-list'
import { startTodolist } from './data'
import { useTodoList } from './hooks/useTodoList'



const StyledTodoList = styled(TodoList)`
  background-color: coral;
  margin-top: 50px;

`

function App() {

  const { todos, toggleTodo } = useTodoList(startTodolist)

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
    <div>
      <h1>Todo List</h1>
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
  )
}


export default App
