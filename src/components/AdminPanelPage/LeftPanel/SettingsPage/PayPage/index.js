import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger/index'
import SizeChanger from '../common/NumberChanger/index'
import PayPageConfig from './config/PayPageConfig'
import NumberChanger from "../common/NumberChanger";
import TextChanger from "../common/TextChanger";

import cn from '../../../../../utils/cn'

import './style.css';
import AddressPageConfig from "../AddressPage/config/AddressPageConfig";

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-PayPage-root', props.className)}>
        {PayPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.background.background}
            data={props.pageConfig.background.style.background}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Заголовок

        <TextChanger
            title="Title text:"
            pathConfig={PayPageConfig.leftPanel.title.text}
            data={props.pageConfig.leftPanel.title.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.title.color}
            data={props.pageConfig.leftPanel.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.title.fontSize}
            data={props.pageConfig.leftPanel.title.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Title position left:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.title.left}
            data={props.pageConfig.leftPanel.title.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Title position top:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.title.top}
            data={props.pageConfig.leftPanel.title.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Телефон

        <NumberChanger
            title="Position left:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.left}
            data={props.pageConfig.leftPanel.telephone.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position top:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.top}
            data={props.pageConfig.leftPanel.telephone.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Заголовок (телефон)

        <TextChanger
            title="Title text:"
            pathConfig={PayPageConfig.leftPanel.telephone.title.text}
            data={props.pageConfig.leftPanel.telephone.title.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.telephone.title.color}
            data={props.pageConfig.leftPanel.telephone.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.title.fontSize}
            data={props.pageConfig.leftPanel.telephone.title.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Поле ввода (телефон)

        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.leftPanel.telephone.input.background}
            data={props.pageConfig.leftPanel.telephone.input.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Placeholder:"
            pathConfig={PayPageConfig.leftPanel.telephone.input.placeholder}
            data={props.pageConfig.leftPanel.telephone.input.placeholder}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.telephone.input.color}
            data={props.pageConfig.leftPanel.telephone.input.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.input.fontSize}
            data={props.pageConfig.leftPanel.telephone.input.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border radius:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.input.borderRadius}
            data={props.pageConfig.leftPanel.telephone.input.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.input.borderWidth}
            data={props.pageConfig.leftPanel.telephone.input.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.input.width}
            data={props.pageConfig.leftPanel.telephone.input.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input height:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.input.height}
            data={props.pageConfig.leftPanel.telephone.input.style.height}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Адрес

        <TextChanger
            title="Address text:"
            pathConfig={PayPageConfig.leftPanel.address.text}
            data={props.pageConfig.leftPanel.address.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Address color:"
            pathConfig={PayPageConfig.leftPanel.address.color}
            data={props.pageConfig.leftPanel.address.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Address size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.address.fontSize}
            data={props.pageConfig.leftPanel.address.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Address position left:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.address.left}
            data={props.pageConfig.leftPanel.address.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Address position top:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.address.top}
            data={props.pageConfig.leftPanel.address.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Подъезд

        <NumberChanger
            title="Position left:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.entrance.left}
            data={props.pageConfig.leftPanel.entrance.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position top:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.entrance.top}
            data={props.pageConfig.leftPanel.entrance.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Заголовок (подъезд)

        <TextChanger
            title="Title text:"
            pathConfig={PayPageConfig.leftPanel.entrance.title.text}
            data={props.pageConfig.leftPanel.entrance.title.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.entrance.title.color}
            data={props.pageConfig.leftPanel.entrance.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.entrance.title.fontSize}
            data={props.pageConfig.leftPanel.entrance.title.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Поле ввода (подъезд)

        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.leftPanel.entrance.input.background}
            data={props.pageConfig.leftPanel.entrance.input.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Placeholder:"
            pathConfig={PayPageConfig.leftPanel.entrance.input.placeholder}
            data={props.pageConfig.leftPanel.entrance.input.placeholder}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.entrance.input.color}
            data={props.pageConfig.leftPanel.entrance.input.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.entrance.input.fontSize}
            data={props.pageConfig.leftPanel.entrance.input.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border radius:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.entrance.input.borderRadius}
            data={props.pageConfig.leftPanel.entrance.input.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.entrance.input.borderWidth}
            data={props.pageConfig.leftPanel.entrance.input.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.entrance.input.width}
            data={props.pageConfig.leftPanel.entrance.input.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input height:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.entrance.input.height}
            data={props.pageConfig.leftPanel.entrance.input.style.height}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Домофон

        <NumberChanger
            title="Position left:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.intercom.left}
            data={props.pageConfig.leftPanel.intercom.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position top:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.intercom.top}
            data={props.pageConfig.leftPanel.intercom.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Заголовок (домофон)

        <TextChanger
            title="Title text:"
            pathConfig={PayPageConfig.leftPanel.intercom.title.text}
            data={props.pageConfig.leftPanel.intercom.title.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.intercom.title.color}
            data={props.pageConfig.leftPanel.intercom.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.intercom.title.fontSize}
            data={props.pageConfig.leftPanel.intercom.title.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Поле ввода (домофон)

        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.leftPanel.intercom.input.background}
            data={props.pageConfig.leftPanel.intercom.input.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Placeholder:"
            pathConfig={PayPageConfig.leftPanel.intercom.input.placeholder}
            data={props.pageConfig.leftPanel.intercom.input.placeholder}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.intercom.input.color}
            data={props.pageConfig.leftPanel.intercom.input.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.intercom.input.fontSize}
            data={props.pageConfig.leftPanel.intercom.input.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border radius:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.intercom.input.borderRadius}
            data={props.pageConfig.leftPanel.intercom.input.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.intercom.input.borderWidth}
            data={props.pageConfig.leftPanel.intercom.input.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.intercom.input.width}
            data={props.pageConfig.leftPanel.intercom.input.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input height:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.intercom.input.height}
            data={props.pageConfig.leftPanel.intercom.input.style.height}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Квартира/Офис

        <NumberChanger
            title="Position left:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.apartment.left}
            data={props.pageConfig.leftPanel.apartment.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position top:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.apartment.top}
            data={props.pageConfig.leftPanel.apartment.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Заголовок (квартира/офис)

        <TextChanger
            title="Title text:"
            pathConfig={PayPageConfig.leftPanel.apartment.title.text}
            data={props.pageConfig.leftPanel.apartment.title.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.apartment.title.color}
            data={props.pageConfig.leftPanel.apartment.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.apartment.title.fontSize}
            data={props.pageConfig.leftPanel.apartment.title.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Поле ввода (квартира/офис)

        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.leftPanel.apartment.input.background}
            data={props.pageConfig.leftPanel.apartment.input.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Placeholder:"
            pathConfig={PayPageConfig.leftPanel.apartment.input.placeholder}
            data={props.pageConfig.leftPanel.apartment.input.placeholder}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.apartment.input.color}
            data={props.pageConfig.leftPanel.apartment.input.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.apartment.input.fontSize}
            data={props.pageConfig.leftPanel.apartment.input.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border radius:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.apartment.input.borderRadius}
            data={props.pageConfig.leftPanel.apartment.input.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.apartment.input.borderWidth}
            data={props.pageConfig.leftPanel.apartment.input.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.apartment.input.width}
            data={props.pageConfig.leftPanel.apartment.input.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input height:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.apartment.input.height}
            data={props.pageConfig.leftPanel.apartment.input.style.height}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Этаж

        <NumberChanger
            title="Position left:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.floor.left}
            data={props.pageConfig.leftPanel.floor.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position top:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.floor.top}
            data={props.pageConfig.leftPanel.floor.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Заголовок (этаж)

        <TextChanger
            title="Title text:"
            pathConfig={PayPageConfig.leftPanel.floor.title.text}
            data={props.pageConfig.leftPanel.floor.title.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.floor.title.color}
            data={props.pageConfig.leftPanel.floor.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.floor.title.fontSize}
            data={props.pageConfig.leftPanel.floor.title.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Поле ввода (этаж)

        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.leftPanel.floor.input.background}
            data={props.pageConfig.leftPanel.floor.input.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Placeholder:"
            pathConfig={PayPageConfig.leftPanel.floor.input.placeholder}
            data={props.pageConfig.leftPanel.floor.input.placeholder}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.floor.input.color}
            data={props.pageConfig.leftPanel.floor.input.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.floor.input.fontSize}
            data={props.pageConfig.leftPanel.floor.input.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border radius:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.floor.input.borderRadius}
            data={props.pageConfig.leftPanel.floor.input.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.floor.input.borderWidth}
            data={props.pageConfig.leftPanel.floor.input.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.floor.input.width}
            data={props.pageConfig.leftPanel.floor.input.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input height:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.floor.input.height}
            data={props.pageConfig.leftPanel.floor.input.style.height}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Оплата

        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.pay.color}
            data={props.pageConfig.leftPanel.pay.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.pay.fontSize}
            data={props.pageConfig.leftPanel.pay.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position left:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.pay.left}
            data={props.pageConfig.leftPanel.pay.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position top:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.pay.top}
            data={props.pageConfig.leftPanel.pay.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Комментарий к заказу

        <NumberChanger
            title="Position left:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.comment.left}
            data={props.pageConfig.leftPanel.comment.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position top:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.comment.top}
            data={props.pageConfig.leftPanel.comment.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Заголовок (комментарий)

        <TextChanger
            title="Title text:"
            pathConfig={PayPageConfig.leftPanel.comment.title.text}
            data={props.pageConfig.leftPanel.comment.title.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.comment.title.color}
            data={props.pageConfig.leftPanel.comment.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.comment.title.fontSize}
            data={props.pageConfig.leftPanel.comment.title.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Поле ввода (комментарий)

        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.leftPanel.comment.input.background}
            data={props.pageConfig.leftPanel.comment.input.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Placeholder:"
            pathConfig={PayPageConfig.leftPanel.comment.input.placeholder}
            data={props.pageConfig.leftPanel.comment.input.placeholder}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.comment.input.color}
            data={props.pageConfig.leftPanel.comment.input.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.comment.input.fontSize}
            data={props.pageConfig.leftPanel.comment.input.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border radius:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.comment.input.borderRadius}
            data={props.pageConfig.leftPanel.comment.input.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.comment.input.borderWidth}
            data={props.pageConfig.leftPanel.comment.input.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.comment.input.width}
            data={props.pageConfig.leftPanel.comment.input.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input height:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.comment.input.height}
            data={props.pageConfig.leftPanel.comment.input.style.height}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Карточка оплаты

        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.rightPanel.background}
            data={props.pageConfig.rightPanel.style.background}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Сумма заказа

        <BackgroundChanger
            title="Order text color:"
            pathConfig={PayPageConfig.rightPanel.textContainer.order.color}
            data={props.pageConfig.rightPanel.textContainer.order.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Order font size:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.textContainer.order.fontSize}
            data={props.pageConfig.rightPanel.textContainer.order.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Стоймость доставки

        <BackgroundChanger
            title="Delivery text color:"
            pathConfig={PayPageConfig.rightPanel.textContainer.delivery.color}
            data={props.pageConfig.rightPanel.textContainer.delivery.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Delivery font size:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.textContainer.delivery.fontSize}
            data={props.pageConfig.rightPanel.textContainer.delivery.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Общая стоймость заказа

        <BackgroundChanger
            title="Result text color:"
            pathConfig={PayPageConfig.rightPanel.textContainer.result.color}
            data={props.pageConfig.rightPanel.textContainer.result.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Result font size:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.textContainer.result.fontSize}
            data={props.pageConfig.rightPanel.textContainer.result.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Кнопка оформления заказа

        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.rightPanel.buttonOK.background}
            data={props.pageConfig.rightPanel.buttonOK.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Button text:"
            pathConfig={PayPageConfig.rightPanel.buttonOK.text}
            data={props.pageConfig.rightPanel.buttonOK.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.rightPanel.buttonOK.color}
            data={props.pageConfig.rightPanel.buttonOK.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.fontSize}
            data={props.pageConfig.rightPanel.buttonOK.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border width:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.borderWidth}
            data={props.pageConfig.rightPanel.buttonOK.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border radius:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.borderRadius}
            data={props.pageConfig.rightPanel.buttonOK.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button width:"
            minValue={0}
            maxValue={290}
            pathConfig={PayPageConfig.rightPanel.buttonOK.width}
            data={props.pageConfig.rightPanel.buttonOK.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button height:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.height}
            data={props.pageConfig.rightPanel.buttonOK.style.height}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position left:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.left}
            data={props.pageConfig.rightPanel.buttonOK.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position top:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.top}
            data={props.pageConfig.rightPanel.buttonOK.style.top}
            onChange={props.onChange}
        />

    </div>
};
