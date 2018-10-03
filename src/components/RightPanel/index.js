import React from 'react'

import HeaderRigth from './HeaderRight'
import BodyRigth from './BodyRight'
import cn from '../../utils/cn'

import './style.css';


export default (props) => {
    return <div
        className={cn('components-RightPanel-root', 'col-xs-9')}
    >
        <HeaderRigth />
        <BodyRigth page={props.page} pageConfig={props.pageConfig}/>
    </div>
};
