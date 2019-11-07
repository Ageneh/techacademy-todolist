import React from 'react'
import {connect} from "react-redux"
import './Footer.css'
import FooterCounter from "./FooterCounter";
import {attemptResetStats} from "../store/thunks/todos";

export const Footer = (props) => {
    const {total, open, deleted, completed} = props.count;
    return (
        <footer>
            <div className={"wrapper"}>
                <FooterCounter id={"stat-total"}
                               description={"Total"}
                               number={total} />
                <FooterCounter id={"stat-open"}
                               description={"Open"}
                               number={open} />
                <FooterCounter id={"stat-completed"}
                               description={"Completed"}
                               number={completed} />
                <FooterCounter id={"stat-deleted"}
                               description={"Deleted"}
                               number={deleted} />
                <button onClick={() => {
                    props.resetStats();
                    window.location.reload();
                }}>
                    RESET STATS
                </button>
            </div>
        </footer>
    );
};

const mapStateToProps = (state) => ({
    count: state.todos.count
});

const mapDispatchToProps = (dispatch) => ({
    resetStats: () => dispatch(attemptResetStats())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
