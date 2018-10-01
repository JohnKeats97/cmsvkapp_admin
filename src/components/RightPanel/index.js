import React from 'react'

import HeaderRigth from './HeaderRight'
import BodyRigth from './BodyRight'

import './style.css';


export default (props) => {
    return <div className='components-RightPanel-root'>
        <HeaderRigth />
        <BodyRigth pageConfig={props.pageConfig}/>
    </div>
};
