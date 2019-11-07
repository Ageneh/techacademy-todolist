import {SETSTATE_INIT} from "../actions/app";

const initialState = {
    init: false,
};

export const appReducer = (state = initialState, action) => {
    const {init} = action;

    switch (action.type) {
        case SETSTATE_INIT:
            console.log(`SETSTATE_INIT`);
            if (init === state.init) return state;
            return {...state, init: init};
        default:
            return state
    }
};


export default appReducer
