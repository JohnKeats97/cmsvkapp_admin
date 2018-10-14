import React from "react";

import './style.css';


export default (props) => {
    return <div
        onClick={() => props.onClick(props.data[1])}
        className={props.className}
        style={props.styleItem}
    >
        {props.data[0]}
    </div>
};
