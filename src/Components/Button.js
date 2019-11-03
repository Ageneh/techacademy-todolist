import React from 'react';
import PropTypes from 'prop-types';
import {Icons} from "./Icons";
import './Button.css';

export const Button = ({id, type, func}) => {
    let _button;
    switch (type) {
        case "delete":
            _button = deleteButton;
            break;
        case "done":
        default:
            _button = completeButton;
    }

    return _button(id, type, func);
};

const deleteButton = (id, type, func) => (
    <button onClick={() => {
        let element = document.body.querySelector(`.item[data-id="${id}"]`);
        element.classList.add("remove");
        setTimeout(() => func(id), 2000);
    }}
            className={`${type}`}>
        <Icons.Trash/>
    </button>
);

const completeButton = (id, type, func) => (
    <button onClick={() => {
        let element = document.body.querySelector(`.item[data-id="${id}"]`);
        element.classList.add("completed");
        setTimeout(() => {
            element.classList.add("remove");
            setTimeout(() => func(id), 1000)
        }, 3000);
    }}
            className={`${type}`}>
        <Icons.Check/>
    </button>
);

Button.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        "delete",
        "done",
        "flag",
    ])
};

export default Button;
