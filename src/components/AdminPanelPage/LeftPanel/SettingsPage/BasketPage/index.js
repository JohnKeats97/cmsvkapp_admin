import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger/index'
import NumberChanger from '../common/NumberChanger/index'
import BasketPageConfig from './config/BasketPageConfig'
import cn from '../../../../../utils/cn'

import './style.css';
import ProductPageConfig from "../ProductPage/config/ProductPageConfig";
import TextChanger from "../common/TextChanger";

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-BasketPage-root', props.className)}>
        {BasketPageConfig.pageName}
        <BackgroundChanger
        title="Background:"
        pathConfig={BasketPageConfig.background.background}
        data={props.pageConfig.background.style.background}
        onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Карточка корзины

        <BackgroundChanger
            title="Background:"
            pathConfig={BasketPageConfig.productContainer.background}
            data={props.pageConfig.productContainer.style.background}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Basket position left:"
            minValue={0}
            maxValue={450}
            pathConfig={BasketPageConfig.productContainer.left}
            data={props.pageConfig.productContainer.style.left}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Карточка заказа

        <BackgroundChanger
            title="Background:"
            pathConfig={BasketPageConfig.foodContainer.background}
            data={props.pageConfig.foodContainer.style.background}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Сумма заказа

        <BackgroundChanger
            title="Order text color:"
            pathConfig={BasketPageConfig.textContainer.order.color}
            data={props.pageConfig.textContainer.order.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Order font size:"
            minValue={0}
            pathConfig={BasketPageConfig.textContainer.order.fontSize}
            data={props.pageConfig.textContainer.order.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Стоймость доставки

        <BackgroundChanger
            title="Delivery text color:"
            pathConfig={BasketPageConfig.textContainer.delivery.color}
            data={props.pageConfig.textContainer.delivery.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Delivery font size:"
            minValue={0}
            pathConfig={BasketPageConfig.textContainer.delivery.fontSize}
            data={props.pageConfig.textContainer.delivery.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Общая стоймость заказа

        <BackgroundChanger
            title="Result text color:"
            pathConfig={BasketPageConfig.textContainer.result.color}
            data={props.pageConfig.textContainer.result.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Result font size:"
            minValue={0}
            pathConfig={BasketPageConfig.textContainer.result.fontSize}
            data={props.pageConfig.textContainer.result.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Кнопка оформления заказа

        <BackgroundChanger
            title="Background:"
            pathConfig={BasketPageConfig.buttonOK.background}
            data={props.pageConfig.buttonOK.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Button text:"
            pathConfig={BasketPageConfig.buttonOK.text}
            data={props.pageConfig.buttonOK.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={BasketPageConfig.buttonOK.color}
            data={props.pageConfig.buttonOK.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={BasketPageConfig.buttonOK.fontSize}
            data={props.pageConfig.buttonOK.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border width:"
            minValue={0}
            pathConfig={BasketPageConfig.buttonOK.borderWidth}
            data={props.pageConfig.buttonOK.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border radius:"
            minValue={0}
            pathConfig={BasketPageConfig.buttonOK.borderRadius}
            data={props.pageConfig.buttonOK.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button width:"
            minValue={0}
            pathConfig={BasketPageConfig.buttonOK.width}
            data={props.pageConfig.buttonOK.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button height:"
            minValue={0}
            pathConfig={BasketPageConfig.buttonOK.height}
            data={props.pageConfig.buttonOK.style.height}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position left:"
            minValue={0}
            pathConfig={BasketPageConfig.buttonOK.left}
            data={props.pageConfig.buttonOK.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position top:"
            minValue={0}
            pathConfig={BasketPageConfig.buttonOK.top}
            data={props.pageConfig.buttonOK.style.top}
            onChange={props.onChange}
        />


    </div>
};
