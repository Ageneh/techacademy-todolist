import {ADD, COMPLETE, REMOVE, SETALL} from "../actions/todos"

const initialState = {
    todos: {},
};

const addToList = (todo, todos) => {
    return Object.assign(todos, {[todo.id]: todo})
};

const removeFromList = (id, todos) => {
    let copy = {...todos};
    delete copy[id];
    return copy
};

const completeTodo = (id, todos) => {
    let todo = todos[id];
    todo.completed = true;
    return addToList(id, todos)
};

export const todosReducer = (state = initialState, action) => {
    const {todos} = state;
    const {id, todo} = action;
    const newState = (updates) => {
        return Object.assign({...state}, {...updates});
    };

    switch (action.type) {
        case ADD:
            console.log("ADD");
            return newState(addToList(todo, todos));
        case REMOVE:
            console.log(`REMOVE`);
            return newState(removeFromList(id, todos));
        case SETALL:
            console.log(`SETALL`);
            return newState({
                todos: {
                    ...action.todos
                }
            });
        case COMPLETE:
            console.log(`COMPLETE`);
            return newState(completeTodo(id, todos));
        default:
            return state
    }
};


export default todosReducer