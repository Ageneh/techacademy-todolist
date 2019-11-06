import React from 'react'
import TodoItem from "./TodoItem"
import './TodoList.css'
import {connect} from "react-redux"
import {attemptAddAllTodos, attemptSetAllTodos} from "../store/thunks/todos"

export const TodoList = (props) => {
    const {todos, init, cookies} = props;
    const cookiesSetter = (todos) => {
        cookies.set("todos", todos);
    };

    if (!init) {
        const allCookies = cookies.getAll();
        if("todos" in allCookies) {
            props.setAllTodos(cookies.get("todos"))
        } else {
            props.initAllTodos((todos) => cookiesSetter(todos));
        }

        return (
            <div className={"list"}>
                {items(null)}
            </div>
        );
    }

    return (
        <div className={"list"}>
            <p>
                {
                    JSON.stringify(props.cookies)
                }
            </p>
            {items(todos)}
        </div>
    );
};

const items = (todos) => {
    if (!todos || Object.keys(todos).length < 1) {
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

    return Object.keys(todos).map((key) => {
        const {title} = todos[key];
        return (
            <TodoItem key={key}
                      done={false}
                      title={title}
                      id={key}/>
        )
    })
};

const mapStateToProps = (state, ownProps) => ({
    ...state.todos,
    ...state.app,
    cookies: ownProps.cookies,
});

const mapDispatchToProps = (dispatch) => ({
    initAllTodos: (cookieSetter) => {
        dispatch(attemptAddAllTodos(cookieSetter));
    },
    setAllTodos: (todos) => {
        dispatch(attemptSetAllTodos(todos))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
