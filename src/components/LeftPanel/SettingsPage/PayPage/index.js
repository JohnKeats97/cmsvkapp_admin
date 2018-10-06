import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger'
import SizeChanger from '../common/NumberChanger'
import PayPageConfig from './config/PayPageConfig'
import cn from '../../../../utils/cn'

import './style.css';

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-PayPage-root', props.className)}>
        {PayPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.background.background}
            data={props.pageConfig.background.style.background}
            onChange={props.onChange}
        />

    </div>
};
