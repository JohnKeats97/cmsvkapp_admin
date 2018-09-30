import React from "react";

import './style.css';


export default (props) => {
    return <div
        className={props.className}
        style={props.styleItem}
    >
        {props.data}
    </div>
};
