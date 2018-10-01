import React from 'react'

import WindowApp from './WindowApp'

import './style.css';


export default (props) => {
    return <div className="components-RightPanel-BodyRight-root">
        <WindowApp pageConfig={props.pageConfig}/>
    </div>
};
