import React from 'react'

import ListPages from './ListPages'
import SettingsPage from './SettingsPage'
import cn from '../../utils/cn'

import './style.css';


export default (props) => {
    return <div className={cn('components-LeftPanel-root', 'col-lg-3')}>
        <ListPages pageConfig={props.pageConfig} onClick={props.onClick}/>
        <SettingsPage page={props.page} pageConfig={props.pageConfig} onChange={props.onChange}/>
    </div>
};
