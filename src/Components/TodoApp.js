import React from 'react'
import InputField from "../Components/InputField"
import '../Pages/TodoContainer.css'
import Logo from "../Components/Logo"
import TodoList from "../Components/TodoList"
import {connect} from "react-redux"
import Footer from "./Footer";

export const TodoApp = (props) => {
    return (
        <div id={"todo-container"}>
            <Logo/>
            <InputField/>
            <TodoList/>
            <Footer/>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
    todos: state.todos,
    init: state.init,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
