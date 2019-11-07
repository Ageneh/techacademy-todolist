import React from 'react'
import './FooterCounter.css'

const FooterCounter = ({id, description, number}) => (
    <div id={id} className={"stat"}>
        <p>
            <span className={"number"}>
                {number}
            </span>
            <span className={"description"}>
                {description}
            </span>
        </p>
    </div>
);

export default FooterCounter;
