import styled from "styled-components"

const TodoContainer = styled.li`
  list-style: none;
  margin-bottom: 6px;
  
  &:hover {
    color: blue;
  }
  & input {
    margin-right: 15px;
    cursor: pointer;
  }
  `

  const TodoText = styled.span`
    text-decoration: ${(props) => props.isDone ? 'line-through' : 'none'};
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
