import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger/index'
import MenuPageConfig from './config/MenuPageConfig'
import TextChanger from "../common/TextChanger";
import NumberChanger from "../common/NumberChanger";

import cn from '../../../../../utils/cn'

import './style.css';


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

        Верхняя панель

        <BackgroundChanger
            title="Background:"
            pathConfig={MenuPageConfig.header.background}
            data={props.pageConfig.header.style.background}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Кнопка назад (верхняя панель)

        <BackgroundChanger
            title="Background:"
            pathConfig={MenuPageConfig.header.buttonback.background}
            data={props.pageConfig.header.buttonback.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Text:"
            pathConfig={MenuPageConfig.header.buttonback.text}
            data={props.pageConfig.header.buttonback.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={MenuPageConfig.header.buttonback.color}
            data={props.pageConfig.header.buttonback.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Border radius:"
            minValue={0}
            pathConfig={MenuPageConfig.header.buttonback.borderRadius}
            data={props.pageConfig.header.buttonback.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Border width:"
            minValue={0}
            pathConfig={MenuPageConfig.header.buttonback.borderWidth}
            data={props.pageConfig.header.buttonback.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={MenuPageConfig.header.buttonback.fontSize}
            data={props.pageConfig.header.buttonback.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Адресс (верхняя панель)

        <BackgroundChanger
        title="Text color:"
        pathConfig={MenuPageConfig.header.address.color}
        data={props.pageConfig.header.address.style.color}
        onChange={props.onChange}
    />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={MenuPageConfig.header.address.fontSize}
            data={props.pageConfig.header.address.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position top:"
            minValue={0}
            maxValue={30}
            pathConfig={MenuPageConfig.header.address.top}
            data={props.pageConfig.header.address.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Корзина (верхняя панель)

        <BackgroundChanger
            title="Background:"
            pathConfig={MenuPageConfig.header.basket.background}
            data={props.pageConfig.header.basket.style.background}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={MenuPageConfig.header.basket.color}
            data={props.pageConfig.header.basket.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={MenuPageConfig.header.basket.fontSize}
            data={props.pageConfig.header.basket.style.fontSize}
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
            title="Button border radius:"
            minValue={0}
            pathConfig={MenuPageConfig.buttonOk.borderRadius}
            data={props.pageConfig.buttonOk.style.borderRadius}
            onChange={props.onChange}
        />

    </div>
};
