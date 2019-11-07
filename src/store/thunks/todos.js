import {addTodo, completeTodo, removeTodo, resetStats, setAllTodos} from "../actions/todos";
import {setStateInit} from "../actions/app";
import {createTodo} from "../../utils/todos";

export const attemptAddTodo = (todo) => (dispatch) => {
    return dispatch(addTodo(todo))
};

export const attemptCompleteTodo = (id) => (dispatch) => {
    return dispatch(completeTodo(id))
};

export const attemptRemoveTodo = (id) => (dispatch) => {
    dispatch(removeTodo(id))
};

export const attemptResetStats = () => (dispatch) => {
    dispatch(resetStats())
};

export const attemptAddAllTodos = (cookieSetter) => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(res => {
            const todosArray = res.filter((item) => {
                return item["completed"];
            }).map((item) => {
                return createTodo(item["title"])
            });

            const todosObject = {};
            todosArray.forEach((item) => todosObject[item["id"]] = item);

            dispatch(setAllTodos(todosObject));
            dispatch(setStateInit(true));
            cookieSetter(todosObject);
            return todosObject;
        });
};
