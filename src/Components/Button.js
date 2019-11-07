import React from 'react';
import PropTypes from 'prop-types';
import {Icons} from "./Icons";
import './Button.css';
import {connect} from "react-redux";
import {attemptAddTodo, attemptCompleteTodo, attemptRemoveTodo} from "../store/thunks/todos";

export const Button = (props) => {
    const {id, type} = props;
    const {removeTodo, completeTodo} = props;
    switch (type) {
        case "delete":
            return deleteButton(id, type, () => removeTodo(id));
        case "done":
        default:
            return completeButton(id, type, () => completeTodo(id));
    }
};

const deleteButton = (id, type, func) => (
    <button onClick={() => {
        let element = document.body.querySelector(`.item[data-id="${id}"]`);
        element.classList.add("remove");
        setTimeout(() => func(id), 500);
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
            setTimeout(() => func(id), 200)
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (id) => dispatch(attemptRemoveTodo(id)),
    completeTodo: (id) => dispatch(attemptCompleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
