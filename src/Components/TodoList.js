import React from 'react';
import TodoItem from "./TodoItem";
import './TodoList.css';

export const TodoList = ({todos, complete, remove}) => {
    return (
        <div className={"list"}>
            {items(todos, complete, remove)}
        </div>
    );
};

const items = (todos, complete, remove) => {
    if(Object.keys(todos).length < 1){
        return (
            <div className={"no-items"}>
                <p>
                    <i>
                        Keine Todos.
                    </i>
                </p>
            </div>
        )
    }

    return Object.keys(todos).map((key, idx, arr) => {
        const {title} = todos[key];
        return (
            <TodoItem key={key}
                      done={false}
                      title={title}
                      remove={() => remove(key)}
                      complete={() => complete(key)}
                      id={key}/>
        )
    })
};

export default TodoList;
