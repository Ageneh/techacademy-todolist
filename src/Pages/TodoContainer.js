import React, {useState} from 'react';
import InputField from "../Components/InputField";
import './TodoContainer.css';
import Logo from "../Components/Logo";
import TodoList from "../Components/TodoList";

const uuidv4 = require('uuid/v4');

export const TodoContainer = () => {
    const [todos, setTodos] = useState({});
    const create = (title) => {
        setTodos(Object.assign(
            {},
            todos,
            {
                [uuidv4()]: {title}
            }
        ));
    };

    const deleteTodo = (id) => {
        let removed = {...todos};
        delete removed[id];
        setTodos(removed);
    };

    const completeTodo = (id) => {
        deleteTodo(id);
    };

    return (
        <div id={"todo-container"}>
            <Logo/>
            <InputField create={create}/>
            <TodoList todos={todos}
                      remove={(id) => deleteTodo(id)}
                      complete={(id) => completeTodo(id)}
            />
        </div>
    )
};

export default TodoContainer;
