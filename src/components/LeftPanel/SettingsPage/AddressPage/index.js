import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger'
import SizeChanger from '../common/SizeChanger'
import AddressPageConfig from './config/AddressPageConfig'
import cn from '../../../../utils/cn'

import './style.css';

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-AddressPage-root', props.className)}>
        {AddressPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.background.background}
            onChange={props.onChange}
        />

        <SizeChanger
            title="Button width:"
            pathConfig={AddressPageConfig.buttonOK.width}
            data={props.pageConfig.buttonOK.width}
            onChange={props.onChange}
        />

        <SizeChanger
            title="Button height:"
            pathConfig={AddressPageConfig.buttonOK.height}
            data={props.pageConfig.buttonOK.height}
            onChange={props.onChange}
        />

    </div>
};
