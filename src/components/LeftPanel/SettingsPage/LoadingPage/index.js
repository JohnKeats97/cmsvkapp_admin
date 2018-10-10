import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger'
import LoadingPageConfig from './config/LoadingPageConfig'
import cn from '../../../../utils/cn'

import './style.css';
import NumberChanger from "../common/NumberChanger";
import AddressPageConfig from "../AddressPage/config/AddressPageConfig";
import TextChanger from "../common/TextChanger";

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-LoadingPage-root', props.className)}>
        {LoadingPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={LoadingPageConfig.background.background}
            data={props.pageConfig.background.style.background}
            onChange={props.onChange}
        />

        Заголовок

        <TextChanger
            title="Title text:"
            pathConfig={LoadingPageConfig.title.text}
            data={props.pageConfig.title.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={LoadingPageConfig.title.color}
            data={props.pageConfig.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={LoadingPageConfig.title.fontSize}
            data={props.pageConfig.title.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Title position left:"
            minValue={0}
            pathConfig={LoadingPageConfig.title.left}
            data={props.pageConfig.title.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Title position top:"
            minValue={0}
            pathConfig={LoadingPageConfig.title.top}
            data={props.pageConfig.title.style.top}
            onChange={props.onChange}
        />

        Лоадер

        <BackgroundChanger
            title="Background:"
            pathConfig={LoadingPageConfig.loader.circle.background}
            data={props.pageConfig.loader.circle.style.background}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Width:"
            minValue={0}
            maxValue={100}
            pathConfig={LoadingPageConfig.loader.circle.width}
            data={props.pageConfig.loader.circle.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Height:"
            minValue={0}
            maxValue={100}
            pathConfig={LoadingPageConfig.loader.circle.height}
            data={props.pageConfig.loader.circle.style.height}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Loader position left:"
            minValue={0}
            pathConfig={LoadingPageConfig.loader.left}
            data={props.pageConfig.loader.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Loader position top:"
            minValue={0}
            pathConfig={LoadingPageConfig.loader.top}
            data={props.pageConfig.loader.style.top}
            onChange={props.onChange}
        />

    </div>
};
