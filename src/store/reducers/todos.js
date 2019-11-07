import {ADD, COMPLETE, REMOVE, RESET, SETALL} from "../actions/todos"
import {getFromLocalStorage, toLocalStorage} from "../../utils/todos";

const STORAGEKEYS = {
    todos: "todos",
    count: "count",
};

const initialState = {
    todos: (() => {
        const storageTodos = getFromLocalStorage(STORAGEKEYS.todos);
        if (storageTodos) return storageTodos;
        return {};
    })(),
    count: (() => {
        const storageTodosCount = getFromLocalStorage(STORAGEKEYS.count);
        if (storageTodosCount) return storageTodosCount;
        return {
            total: 0,
            open: 0,
            deleted: 0,
            completed: 0,
        }
    })()
};

const addToList = (todo, todos) => {
    return {
        ...todos,
        [todo.id]: todo
    }
};

const removeFromList = (id, todos) => {
    let copy = {...todos};
    delete copy[id];
    return copy
};

const completeTodo = (id, todos) => {
    let todo = todos[id];
    todo.completed = true;
    todo.dateFinished = new Date();
    return addToList(todo, todos)
};

export const todosReducer = (state = initialState, action) => {
    const {todos, count} = state;
    const {id, todo} = action;

    let _todos = state.todos;
    const _count = {...count};

    switch (action.type) {
        case ADD:
            _todos = addToList(todo, todos);
            _count.total += 1;
            _count.open += 1;
            break;
        case REMOVE:
            console.log(`REMOVE`);
            _todos = removeFromList(id, todos);
            _count.deleted += 1;
            _count.open -= 1;
            break;
        case SETALL:
            console.log(`SETALL ${JSON.stringify(action.todos)}`);
            _todos = action.todos;
            const _allCount = Object.keys(action.todos).length;
            _count.total += _allCount;
            _count.open += _allCount;
            break;
        case COMPLETE:
            console.log(`COMPLETE`);
            _todos = completeTodo(id, todos);
            _count.completed += 1;
            _count.open -= 1;
            break;
        case RESET:
            _todos = {};
            _count.total = 0;
            _count.open = 0;
            _count.completed = 0;
            _count.deleted = 0;
            localStorage.clear();
            break;
        default:
            return state
    }
    toLocalStorage(STORAGEKEYS.todos, _todos);
    toLocalStorage(STORAGEKEYS.count, _count);
    return Object.assign({}, state, {
        todos: _todos,
        count: _count,
    })
};


export default todosReducer
