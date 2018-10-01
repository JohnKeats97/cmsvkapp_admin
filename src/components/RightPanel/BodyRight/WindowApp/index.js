import React from 'react'

import AddresWindow from './AddressWindow'

import './style.css';


export default (props) => {
    return <div
        className="components-RightPanel-BodyRight-WindowApp-root"
    >
        <AddresWindow pageConfig={props.pageConfig}/>
    </div>
};
