import React from 'react'
import InputField from "../Components/InputField"
import './TodoContainer.css'
import Logo from "../Components/Logo"
import TodoList from "../Components/TodoList"
import { withCookies } from 'react-cookie'

export const TodoContainer = (props) => {
    return (
        <div id={"todo-container"}>
            <Logo/>
            <InputField/>
            <TodoList cookies={props.cookies}/>
        </div>
    )
};

export default withCookies(TodoContainer);
