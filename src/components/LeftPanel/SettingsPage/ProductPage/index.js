import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger'
import SizeChanger from '../common/SizeChanger'
import ProductPageConfig from './config/ProductPageConfig'
import cn from '../../../../utils/cn'

import './style.css';

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-ProductPage-root', props.className)}>
        {ProductPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={ProductPageConfig.background.background}
            data={props.pageConfig.background.background}
            onChange={props.onChange}
        />

    </div>
};
