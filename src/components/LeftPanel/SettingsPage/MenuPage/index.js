import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger'
import SizeChanger from '../common/SizeChanger'
import MenuPageConfig from './config/MenuPageConfig'
import cn from '../../../../utils/cn'

import './style.css';

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-MenuPage-root', props.className)}>
        {MenuPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={MenuPageConfig.background.background}
            data={props.pageConfig.background.background}
            onChange={props.onChange}
        />
    </div>
};
