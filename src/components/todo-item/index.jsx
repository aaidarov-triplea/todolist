import styled from "styled-components"

const TodoContainer = styled.li`
  list-style: none;
  background-color: #ccc;
  
  &:hover {
    color: blue;
  }
  & input {
    margin-right: 20px;
  }
  `

  const TodoText = styled.span`
    text-decoration: ${(props) => props.isDone ? 'line-through' : 'none'};
    color: ${(props) => props.isDone ? 'green' : 'black'};
  `

  

export const TodoItem = ({ id, text, isDone, onToggleTodo }) => {
  const handleToggleTodo = () => {
    onToggleTodo?.(id)
  }

  return (
    <TodoContainer>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggleTodo}
      />
      <TodoText 
      isDone={isDone}
      >
        {text}
      </TodoText>
    </TodoContainer>
  )
}
