import styled from 'styled-components'
import { TodoItem } from '../todo-item'

const StyledUl = styled.ul`
padding-left: 0;
`
const StyledH2 = styled.h2`
font-size: 30px;
`

export const TodoList = ({ className, title, items }) => {
  return (
    <div className={className}>
      <StyledH2>{title}</StyledH2>
      <StyledUl>
        {
          items.map(todo => (
            <TodoItem 
              key={todo.id}
              {...todo}
            />
          ))
        }
      </StyledUl>
    </div>
  )
}
