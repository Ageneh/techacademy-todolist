import {addTodo, setAllTodos} from "../actions/todos";
import {setStateInit} from "../actions/app";
import {createTodo} from "../../utils/todos";

export const attemptAddTodo = (todo) => (dispatch) => {
    return dispatch(addTodo(todo))
};

export const attemptRemoveTodo = (title) => (dispatch) => {

};

export const attemptSetAllTodos = (todos) => (dispatch) => {
    dispatch(setAllTodos(todos));
    dispatch(setStateInit(true));
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