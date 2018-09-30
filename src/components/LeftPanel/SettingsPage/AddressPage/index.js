import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger'
import AddressPageConfig from './config/AddressPageConfig'

import './style.css';

export default (props) => {
    return <div className={props.className}>
        {AddressPageConfig.pageName}
        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />

        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />

        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />

        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />

        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />


        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />

        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />


        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />


        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />

        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />

        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />
    </div>
};
