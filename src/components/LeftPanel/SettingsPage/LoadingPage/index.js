import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger'
import LoadingPageConfig from './config/LoadingPageConfig'
import cn from '../../../../utils/cn'

import './style.css';

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-LoadingPage-root', props.className)}>
        {LoadingPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={LoadingPageConfig.background.background}
            data={props.pageConfig.background.style.background}
            onChange={props.onChange}
        />
    </div>
};
