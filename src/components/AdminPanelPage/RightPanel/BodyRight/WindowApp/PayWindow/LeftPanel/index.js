import React from 'react'

import InputContainer from './InputContainer'

import './style.css';


export default (props) => {

    return <div
        className="components-RightPanel-BodyRight-WindowApp-PayWindow-LeftPanel-root"
    >
        <InputContainer
            config={props.config.telephone}
        />

    </div>
};
