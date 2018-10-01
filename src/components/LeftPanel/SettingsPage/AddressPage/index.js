import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger'
import SizeChanger from '../common/SizeChanger'
import AddressPageConfig from './config/AddressPageConfig'

import './style.css';

export default (props) => {
    return <div className={props.className}>
        {AddressPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />

        <SizeChanger
            title="Button width:"
            pathConfig={AddressPageConfig.buttonOK.width}
            data={props.pageConfig.addressPage.buttonOK.width}
            onChange={props.onChange}
        />

        <SizeChanger
            title="Button height:"
            pathConfig={AddressPageConfig.buttonOK.height}
            data={props.pageConfig.addressPage.buttonOK.height}
            onChange={props.onChange}
        />

    </div>
};
