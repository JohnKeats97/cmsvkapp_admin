import React from 'react'

import './style.css';


export default (props) => {

    // console.log(props.pageConfig.addressPage.buttonOK);

    return <div
        className="components-RightPanel-BodyRight-WindowApp-AddressWindow-root"
        style={props.pageConfig.addressPage.background} >
        <button style={props.pageConfig.addressPage.buttonOK}>Принять</button>
    </div>
};
