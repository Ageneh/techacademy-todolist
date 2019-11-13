import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
import './TodoItem.css';
import {dateToDateTime} from "../utils/todos";

export const TodoItem = (props) => {
    const {done, title, id, completed, dateFinished} = props;
    const {remove, complete} = props;
    console.log(props);
    return (
        <div data-id={id} className={`item ${done ? 'done' : 'open'}`}>
            <div className={"information"}>
                <p className={"title"}>{title}</p>
                {
                    completed === true && (
                        <small className={"finished"}>
                            {
                                dateToDateTime(new Date(dateFinished))
                            }
                        </small>
                    )
                }
            </div>
            {
                completed === false && (
                    <div className={"buttons"}>
                        <Button id={id}
                                func={complete}
                                type={"done"}/>
                        <Button id={id}
                                func={remove}
                                type={"delete"}/>
                    </div>
                )
            }
        </div>
    );
};

TodoItem.propTypes = {
    done: PropTypes.bool,
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default TodoItem;
