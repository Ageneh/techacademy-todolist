import {combineReducers} from "redux";
import appReducer from "./app";
import todosReducer from "./todos";

const reducers = combineReducers({
    app: appReducer,
    todos: todosReducer,
});

export default reducers