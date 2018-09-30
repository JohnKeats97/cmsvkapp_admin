import React from 'react'

import List from '../../common/List'

import './style.css';


export default (props) => {
    return <div className="components-LeftPanel-ListPages-root">
        <List data={Object.keys(props.pageConfig)} classList="" classItem="" />
    </div>
};
