import React from 'react'

import AddresWindow from './AddressWindow'
import cn from '../../../../utils/cn'

import './style.css';


export default (props) => {
    return <div
        className={cn("components-RightPanel-BodyRight-WindowApp-root", props.className)}
    >
        <AddresWindow pageConfig={props.pageConfig}/>
    </div>
};
