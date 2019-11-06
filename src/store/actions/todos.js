export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const COMPLETE = "COMPLETE";
export const SETALL = "SETALL";

export const TYPES = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    COMPLETE: "COMPLETE",
    SETALL: "SETALL",
};

export const addTodo = (todo) => ({
    type: ADD,
    todo: todo,
});

export const removeTodo = (id) => ({
    type: REMOVE,
    id,
});

export const completeTodo = (id) => ({
    type: COMPLETE,
    id,
});

export const setAllTodos = (todos) => ({
    type: SETALL,
    todos: todos,
});

export const ACTIONS = {
    addTodo,
    removeTodo,
    completeTodo,
    setAllTodos,
};

export default {
    types: TYPES,
    actions: ACTIONS,
}