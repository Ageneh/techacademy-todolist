import React from 'react'
import TodoContainer from "./Pages/TodoContainer"
import { withCookies } from 'react-cookie'

export const App = () => {
    return (
        <>
            <TodoContainer/>
        </>
    );
};

export default withCookies(App);
