import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { todoFormActions } from '../../store/todoFormSlice'
import { todoActions } from "../../store/todoSlice"

const Form = styled.form`
    border: 1px solid #000;
    padding: 30px;
    border-radius: 20px;
    background-color: #eee;

    display: flex;
    flex-direction: column;

    & input {
        margin: 20px 0;
    }
    * {
        font-size: 20px;
    }
`

function FormPage() {
    const {text, deadline} = useSelector(state => state.todoForm.form)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        dispatch(todoFormActions.changeField({
            name: e.target.name,
            value: e.target.value
        }))
    }

    const handleSave = (e) => {
        e.preventDefault()
        dispatch(todoActions.addTodo({ text, deadline }))
        navigate('/')
    }

    return(
        <>
        <Link to="/">Go back to todoList</Link>
        <Form>
            <textarea
            name="text"
            value={text}
            onChange={handleChange}
            >

            </textarea>
            <input
            name="deadline" 
            type="date" 
            value={deadline}
            onChange={handleChange}
            />

            <button type="submit" onClick={handleSave}>Save todo</button>
        </Form>
        </>
    )
}

export default FormPage