import React from 'react'

import ListPages from './ListPages'
import SettingsPage from './SettingsPage'

import './style.css';


export default (props) => {
    return <div className='components-LeftPanel-root'>
        <ListPages pageConfig={props.pageConfig}/>
        <SettingsPage pageConfig={props.pageConfig} onChange={props.onChange}/>
    </div>
};
