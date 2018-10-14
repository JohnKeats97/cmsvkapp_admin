import React from 'react'

import ProductPageConfig from './config/ProductPageConfig'

import BackgroundChanger from '../common/BackgroundChanger/index'
import NumberChanger from '../common/NumberChanger/index'
import TextChanger from '../common/TextChanger/index'

import cn from '../../../../../utils/cn'

import './style.css';
import AddressPageConfig from "../AddressPage/config/AddressPageConfig";

export default (props) => {
    const productContainerWidth = props.pageConfig.productContainer.style.width;

    return <div className={cn('components-LeftPanel-SettingPage-ProductPage-root', props.className)}>
        {ProductPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={ProductPageConfig.background.background}
            data={props.pageConfig.background.style.background}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Кнопка закрыть

        <NumberChanger
            title="Button position left:"
            minValue={0}
            pathConfig={ProductPageConfig.buttonClose.left}
            data={props.pageConfig.buttonClose.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position top:"
            minValue={0}
            pathConfig={ProductPageConfig.buttonClose.top}
            data={props.pageConfig.buttonClose.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Карточка блюда

        <BackgroundChanger
            title="Background:"
            pathConfig={ProductPageConfig.productContainer.background}
            data={props.pageConfig.productContainer.style.background}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Width:"
            minValue={0}
            pathConfig={ProductPageConfig.productContainer.width}
            data={productContainerWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Height:"
            minValue={0}
            pathConfig={ProductPageConfig.productContainer.height}
            data={props.pageConfig.productContainer.style.height}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position left:"
            minValue={0}
            maxValue={850 - (productContainerWidth.slice(0, productContainerWidth.length -2) | 0)}
            pathConfig={ProductPageConfig.productContainer.left}
            data={props.pageConfig.productContainer.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position top:"
            minValue={0}
            pathConfig={ProductPageConfig.productContainer.top}
            data={props.pageConfig.productContainer.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Изображение блюда

        <BackgroundChanger
            title="Background:"
            pathConfig={ProductPageConfig.imageContainer.background}
            data={props.pageConfig.imageContainer.style.background}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Width:"
            minValue={0}
            pathConfig={ProductPageConfig.imageContainer.width}
            data={props.pageConfig.imageContainer.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Height:"
            minValue={0}
            pathConfig={ProductPageConfig.imageContainer.height}
            data={props.pageConfig.imageContainer.style.height}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position left:"
            minValue={0}
            pathConfig={ProductPageConfig.imageContainer.left}
            data={props.pageConfig.imageContainer.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position top:"
            minValue={0}
            pathConfig={ProductPageConfig.imageContainer.top}
            data={props.pageConfig.imageContainer.style.top}
            onChange={props.onChange}
        />
        <TextChanger
            title="URL image:"
            pathConfig={ProductPageConfig.imageContainer.imageSrc}
            data={props.pageConfig.imageContainer.image.src}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Заголовок

        <TextChanger
            title="Title text:"
            pathConfig={ProductPageConfig.title.text}
            data={props.pageConfig.title.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={ProductPageConfig.title.color}
            data={props.pageConfig.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={ProductPageConfig.title.fontSize}
            data={props.pageConfig.title.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Title position left:"
            minValue={0}
            pathConfig={ProductPageConfig.title.left}
            data={props.pageConfig.title.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Title position top:"
            minValue={0}
            pathConfig={ProductPageConfig.title.top}
            data={props.pageConfig.title.style.top}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Title width:"
            minValue={0}
            pathConfig={ProductPageConfig.title.width}
            data={props.pageConfig.title.style.width}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Описание блюда

        <TextChanger
            title="Description text:"
            pathConfig={ProductPageConfig.description.text}
            data={props.pageConfig.description.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Description text color:"
            pathConfig={ProductPageConfig.description.color}
            data={props.pageConfig.description.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Description font size:"
            minValue={0}
            pathConfig={ProductPageConfig.description.fontSize}
            data={props.pageConfig.description.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Description position left:"
            minValue={0}
            pathConfig={ProductPageConfig.description.left}
            data={props.pageConfig.description.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Description position top:"
            minValue={0}
            pathConfig={ProductPageConfig.description.top}
            data={props.pageConfig.description.style.top}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Description width:"
            minValue={0}
            pathConfig={ProductPageConfig.description.width}
            data={props.pageConfig.description.style.width}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Количество блюд

        <NumberChanger
            title="Input position left:"
            minValue={0}
            pathConfig={ProductPageConfig.inputCount.left}
            data={props.pageConfig.inputCount.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input position top:"
            minValue={0}
            pathConfig={ProductPageConfig.inputCount.top}
            data={props.pageConfig.inputCount.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Кнопка добавить

        <BackgroundChanger
            title="Background:"
            pathConfig={ProductPageConfig.buttonOK.background}
            data={props.pageConfig.buttonOK.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Button text:"
            pathConfig={ProductPageConfig.buttonOK.text}
            data={props.pageConfig.buttonOK.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={ProductPageConfig.buttonOK.color}
            data={props.pageConfig.buttonOK.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={ProductPageConfig.buttonOK.fontSize}
            data={props.pageConfig.buttonOK.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border width:"
            minValue={0}
            pathConfig={ProductPageConfig.buttonOK.borderWidth}
            data={props.pageConfig.buttonOK.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border radius:"
            minValue={0}
            pathConfig={ProductPageConfig.buttonOK.borderRadius}
            data={props.pageConfig.buttonOK.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button width:"
            minValue={0}
            pathConfig={ProductPageConfig.buttonOK.width}
            data={props.pageConfig.buttonOK.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button height:"
            minValue={0}
            pathConfig={ProductPageConfig.buttonOK.height}
            data={props.pageConfig.buttonOK.style.height}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position left:"
            minValue={0}
            pathConfig={ProductPageConfig.buttonOK.left}
            data={props.pageConfig.buttonOK.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position top:"
            minValue={0}
            pathConfig={ProductPageConfig.buttonOK.top}
            data={props.pageConfig.buttonOK.style.top}
            onChange={props.onChange}
        />

    </div>
};
