import React, {useState} from 'react'
import {Icons} from "./Icons"
import './InputField.css'
import {addTodo} from "../store/actions/todos"
import {connect} from "react-redux";
import {createTodo} from "../utils/todos";

const pressedEnter = (event) => event.key === 'Enter';

export const InputField = (props) => {
    const {addTodo} = props;
    const [value, setValue] = useState("");
    const [active, setActive] = useState("");
    const ids = {
        inputFieldWrapper: "todo-input-field",
        inputField: "todo-title",
        confirmButton: "confirm-todo-title",
    };

    const addNewTodo = () => {
        if (value.trim().length < 1) return;
        addTodo(createTodo(value));
        setValue("");
        document.getElementById(ids.inputField).focus();
    };

    return (
        <div id={ids.inputFieldWrapper}>
            <div className={"input-wrapper"}>
                <input id={ids.inputField}
                       className={`${active ? "active" : ""} ${value.trim().length > 0 ? "filled" : ""}`}
                       type={"text"}
                       autoFocus={true}
                       placeholder={"New Todo"}
                       value={value}
                       onBlur={() => setActive(false)}
                       onFocus={() => setActive(true)}
                       onKeyPress={(e) => pressedEnter(e) ? addNewTodo() : null}
                       onChange={(e) => {
                           setValue(e.target.value);
                       }}/>
                <button id={ids.confirmButton}
                        className={`${active ? "active" : ""} ${value.trim().length > 0 ? "filled" : ""}`}
                        onClick={() => addNewTodo()}
                        value={"Create"}>
                    <Icons.Plus/>
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
