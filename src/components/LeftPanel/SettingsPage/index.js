import React from 'react'

import AddressPage from './AddressPage'

import './style.css';


export default (props) => {

    // TODO сделать динамический maxHeigth

    return <div className="components-LeftPanel-SettingPage-root">
        <AddressPage
            className="components-LeftPanel-SettingPage-page"
            pageConfig={props.pageConfig}
            onChange={props.onChange}
        />
    </div>
};
