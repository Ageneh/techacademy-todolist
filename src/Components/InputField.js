import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Icons} from "./Icons";
import './InputField.css';

export const InputField = ({create, callback}) => {
    const [value, setValue] = useState("");
    const [active, setActive] = useState("");
    const ids = {
        inputFieldWrapper: "todo-input-field",
        inputField: "todo-title",
        confirmButton: "confirm-todo-title",
    };

    const addNewTodo = () => {
        if(value.trim().length < 1) return;
        create(value);
        setValue("");
        document.getElementById(ids.inputField).focus();
    };

    return (
        <div id={ids.inputFieldWrapper}>
            <div className={"input-wrapper"}>
                <input id={ids.inputField}
                       className={`${active?"active":""} ${value.trim().length > 0?"filled":""}`}
                       type={"text"}
                       autoFocus={true}
                       placeholder={"New Todo"}
                       value={value}
                       onBlur={() => setActive(false)}
                       onFocus={() => setActive(true)}
                       onKeyPress={(e) => pressedEnter(e)?addNewTodo():null}
                       onChange={(e) => {
                           setValue(e.target.value);
                       }}/>
                <button id={ids.confirmButton}
                        className={`${active?"active":""} ${value.trim().length > 0?"filled":""}`}
                        onClick={() => addNewTodo()}
                        value={"Create"}>
                    <Icons.Plus />
                </button>
            </div>
        </div>
    );
};

const pressedEnter = (event) => event.key === 'Enter';

InputField.propTypes = {
    create: PropTypes.func.isRequired,
};

export default InputField;
