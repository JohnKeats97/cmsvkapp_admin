import React from 'react'

import HeaderRigth from './HeaderRight/index'
import BodyRigth from './BodyRight/index'
import cn from '../../../utils/cn'

import './style.css';


export default (props) => {
    return <div
        className='components-RightPanel-root'
    >
        <HeaderRigth appName={props.appName} onChangePage={props.onChangePage}/>
        <BodyRigth page={props.page} pageConfig={props.pageConfig}/>
    </div>
};
