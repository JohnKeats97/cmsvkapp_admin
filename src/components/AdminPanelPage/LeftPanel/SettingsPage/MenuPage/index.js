import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger/index'
import SizeChanger from '../common/NumberChanger/index'
import MenuPageConfig from './config/MenuPageConfig'
import cn from '../../../../../utils/cn'

import './style.css';
import AddressPageConfig from "../AddressPage/config/AddressPageConfig";
import TextChanger from "../common/TextChanger";
import NumberChanger from "../common/NumberChanger";

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-MenuPage-root', props.className)}>
        {MenuPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={MenuPageConfig.background.background}
            data={props.pageConfig.background.style.background}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Заголовок

        <BackgroundChanger
            title="Text color:"
            pathConfig={MenuPageConfig.title.color}
            data={props.pageConfig.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Text size:"
            minValue={0}
            maxValue={190}
            pathConfig={MenuPageConfig.title.fontSize}
            data={props.pageConfig.title.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Кнопка заказать

        <BackgroundChanger
            title="Background:"
            pathConfig={MenuPageConfig.buttonOk.background}
            data={props.pageConfig.buttonOk.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Button text:"
            pathConfig={MenuPageConfig.buttonOk.text}
            data={props.pageConfig.buttonOk.text}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button width:"
            minValue={0}
            maxValue={190}
            pathConfig={MenuPageConfig.buttonOk.width}
            data={props.pageConfig.buttonOk.style.width}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={MenuPageConfig.buttonOk.color}
            data={props.pageConfig.buttonOk.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={MenuPageConfig.buttonOk.fontSize}
            data={props.pageConfig.buttonOk.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border width:"
            minValue={0}
            pathConfig={MenuPageConfig.buttonOk.borderWidth}
            data={props.pageConfig.buttonOk.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border radius:"
            minValue={0}
            pathConfig={MenuPageConfig.buttonOk.borderRadius}
            data={props.pageConfig.buttonOk.style.borderRadius}
            onChange={props.onChange}
        />

    </div>
};
