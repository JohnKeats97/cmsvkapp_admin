import React from 'react'

import ListPages from './ListPages/index'
import SettingsPage from './SettingsPage/index'

import './style.css';


export default (props) => {
    return <div className='components-LeftPanel-root'>
        <div className="components-LeftPanel-fixed">
            <ListPages pageConfig={props.pageConfig} onClick={props.onClick}/>
            <SettingsPage page={props.page} pageConfig={props.pageConfig} onChange={props.onChange}/>
        </div>
    </div>
};
