import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"

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
    const [text, setText] = useState('')
    return(
        <>
        <Link to="/">Home</Link>
        <Form>
            <textarea></textarea>
            <input type="date" />
            <button>Save Data</button>
        </Form>
        </>
    )
}

export default FormPage