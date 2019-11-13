import {completeTodo, removeTodo, resetStats} from "../actions/todos";

export const attemptCompleteTodo = (id) => (dispatch) => {
    return dispatch(completeTodo(id))
};

export const attemptRemoveTodo = (id) => (dispatch) => {
    dispatch(removeTodo(id))
};

export const attemptResetStats = () => (dispatch) => {
    dispatch(resetStats())
};
