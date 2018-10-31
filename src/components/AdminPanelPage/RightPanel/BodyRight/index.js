import React from 'react'

import WindowApp from './WindowApp/index'

import './style.css';


export default (props) => {
    return <div className="components-RightPanel-BodyRight-root">
        <WindowApp pageConfig={props.pageConfig} page={props.page}/>
    </div>
};
