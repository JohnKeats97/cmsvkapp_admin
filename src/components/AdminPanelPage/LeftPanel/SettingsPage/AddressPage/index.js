import React from 'react'

import AddressPageConfig from './config/AddressPageConfig'

import BackgroundChanger from '../common/BackgroundChanger/index'
import NumberChanger from '../common/NumberChanger/index'
import TextChanger from '../common/TextChanger/index'

import cn from '../../../../../utils/cn'

import './style.css';

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-AddressPage-root', props.className)}>
        {AddressPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.background.style.background}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Заголовок

        <TextChanger
            title="Title text:"
            pathConfig={AddressPageConfig.title.text}
            data={props.pageConfig.title.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={AddressPageConfig.title.color}
            data={props.pageConfig.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={AddressPageConfig.title.fontSize}
            data={props.pageConfig.title.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Title position left:"
            minValue={0}
            pathConfig={AddressPageConfig.title.left}
            data={props.pageConfig.title.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Title position top:"
            minValue={0}
            pathConfig={AddressPageConfig.title.top}
            data={props.pageConfig.title.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Кнопка принять

        <BackgroundChanger
            title="Background:"
            pathConfig={AddressPageConfig.buttonOK.background}
            data={props.pageConfig.buttonOK.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Button text:"
            pathConfig={AddressPageConfig.buttonOK.text}
            data={props.pageConfig.buttonOK.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={AddressPageConfig.buttonOK.color}
            data={props.pageConfig.buttonOK.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={AddressPageConfig.buttonOK.fontSize}
            data={props.pageConfig.buttonOK.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border width:"
            minValue={0}
            pathConfig={AddressPageConfig.buttonOK.borderWidth}
            data={props.pageConfig.buttonOK.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border radius:"
            minValue={0}
            pathConfig={AddressPageConfig.buttonOK.borderRadius}
            data={props.pageConfig.buttonOK.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button width:"
            minValue={0}
            pathConfig={AddressPageConfig.buttonOK.width}
            data={props.pageConfig.buttonOK.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button height:"
            minValue={0}
            pathConfig={AddressPageConfig.buttonOK.height}
            data={props.pageConfig.buttonOK.style.height}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position left:"
            minValue={0}
            pathConfig={AddressPageConfig.buttonOK.left}
            data={props.pageConfig.buttonOK.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position top:"
            minValue={0}
            pathConfig={AddressPageConfig.buttonOK.top}
            data={props.pageConfig.buttonOK.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Поле ввода адреса

        <BackgroundChanger
            title="Background:"
            pathConfig={AddressPageConfig.inputAddress.background}
            data={props.pageConfig.inputAddress.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Placeholder:"
            pathConfig={AddressPageConfig.inputAddress.placeholder}
            data={props.pageConfig.inputAddress.placeholder}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={AddressPageConfig.inputAddress.color}
            data={props.pageConfig.inputAddress.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={AddressPageConfig.inputAddress.fontSize}
            data={props.pageConfig.inputAddress.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border radius:"
            minValue={0}
            pathConfig={AddressPageConfig.inputAddress.borderRadius}
            data={props.pageConfig.inputAddress.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border width:"
            minValue={0}
            pathConfig={AddressPageConfig.inputAddress.borderWidth}
            data={props.pageConfig.inputAddress.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input width:"
            minValue={0}
            pathConfig={AddressPageConfig.inputAddress.width}
            data={props.pageConfig.inputAddress.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input height:"
            minValue={0}
            pathConfig={AddressPageConfig.inputAddress.height}
            data={props.pageConfig.inputAddress.style.height}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input position left:"
            minValue={0}
            pathConfig={AddressPageConfig.inputAddress.left}
            data={props.pageConfig.inputAddress.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input position top:"
            minValue={0}
            pathConfig={AddressPageConfig.inputAddress.top}
            data={props.pageConfig.inputAddress.style.top}
            onChange={props.onChange}
        />

    </div>
};
