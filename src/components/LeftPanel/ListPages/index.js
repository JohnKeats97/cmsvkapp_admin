import React from 'react'

import List from '../../common/List'
import listPageConfig from './config/listPageConfig'

import './style.css';


export default (props) => {
    return <div className="components-LeftPanel-ListPages-root">
        <List data={Object.keys(props.pageConfig).map(item => listPageConfig[item])} classList="" classItem="components-LeftPanel-ListPages-item" />
    </div>
};
