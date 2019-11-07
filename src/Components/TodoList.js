import React from 'react'
import TodoItem from "./TodoItem"
import './TodoList.css'
import {connect} from "react-redux"

export const TodoList = (props) => {
    const {open, completed} = props;

    return (
        <div className={"lists"}>
            <div className={"list open"}>
                <Items todos={open} completed={true}/>
            </div>
            <div className={"list completed"}>
                <Items todos={completed} completed={false}/>
            </div>
        </div>
    );
};

const NoTodos = ({completed = true}) => (
    <div className={"no-items"}>
        <p>
            <i>
                Keine {completed === false ? "geschlossene" : "offene"} Todos.
            </i>
        </p>
    </div>
);

const Items = ({todos, completed = false}) => {
    if (!todos || todos === {} || Object.keys(todos).length < 1) {
        return <NoTodos completed={completed}/>
    }

    return Object.keys(todos).map((key) => {
        return (
            <TodoItem key={key}
                      {...todos[key]}/>
        )
    })
};

const mapStateToProps = (state) => {
    const openTodos = {};
    const completedTodos = {};
    Object.keys(state.todos.todos).forEach((key) => {
        const todo = state.todos.todos[key];
        if (todo.completed === true) completedTodos[key] = todo;
        else openTodos[key] = todo;
    });

    return {
        open: openTodos,
        completed: completedTodos,
    }
};

export default connect(mapStateToProps, (dispatch) => ({}))(TodoList);
