import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger'
import SizeChanger from '../common/NumberChanger'
import BasketPageConfig from './config/BasketPageConfig'
import cn from '../../../../utils/cn'

import './style.css';

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-BasketPage-root', props.className)}>
        {BasketPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={BasketPageConfig.background.background}
            data={props.pageConfig.background.style.background}
            onChange={props.onChange}
        />

    </div>
};
