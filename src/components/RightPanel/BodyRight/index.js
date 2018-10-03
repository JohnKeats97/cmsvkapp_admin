import React from 'react'

import WindowApp from './WindowApp'

import './style.css';


export default (props) => {
    return <div className="components-RightPanel-BodyRight-root">
        <div className="col-xs-1"/>
        <WindowApp pageConfig={props.pageConfig} className="col-xs-8" page={props.page}/>
    </div>
};
