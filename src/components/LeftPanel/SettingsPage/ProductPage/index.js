import React from 'react'

import ProductPageConfig from './config/ProductPageConfig'

import BackgroundChanger from '../common/BackgroundChanger'
import NumberChanger from '../common/NumberChanger'
import TextChanger from '../common/TextChanger'

import cn from '../../../../utils/cn'

import './style.css';

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-ProductPage-root', props.className)}>
        {ProductPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={ProductPageConfig.background.background}
            data={props.pageConfig.background.style.background}
            onChange={props.onChange}
        />

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

        Карточка блюда

        <BackgroundChanger
            title="Background:"
            pathConfig={ProductPageConfig.productContainer.background}
            data={props.pageConfig.productContainer.style.background}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button width:"
            minValue={0}
            pathConfig={ProductPageConfig.productContainer.width}
            data={props.pageConfig.productContainer.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button height:"
            minValue={0}
            pathConfig={ProductPageConfig.productContainer.height}
            data={props.pageConfig.productContainer.style.height}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position left:"
            minValue={0}
            pathConfig={ProductPageConfig.productContainer.left}
            data={props.pageConfig.productContainer.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position top:"
            minValue={0}
            pathConfig={ProductPageConfig.productContainer.top}
            data={props.pageConfig.productContainer.style.top}
            onChange={props.onChange}
        />

        Изображение блюда

        <BackgroundChanger
            title="Background:"
            pathConfig={ProductPageConfig.imageContainer.background}
            data={props.pageConfig.imageContainer.style.background}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button width:"
            minValue={0}
            pathConfig={ProductPageConfig.imageContainer.width}
            data={props.pageConfig.imageContainer.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button height:"
            minValue={0}
            pathConfig={ProductPageConfig.imageContainer.height}
            data={props.pageConfig.imageContainer.style.height}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position left:"
            minValue={0}
            pathConfig={ProductPageConfig.imageContainer.left}
            data={props.pageConfig.imageContainer.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position top:"
            minValue={0}
            pathConfig={ProductPageConfig.imageContainer.top}
            data={props.pageConfig.imageContainer.style.top}
            onChange={props.onChange}
        />
        <TextChanger
            title="Title text:"
            pathConfig={ProductPageConfig.imageContainer.imageSrc}
            data={props.pageConfig.imageContainer.image.src}
            onChange={props.onChange}
        />

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
            title="Title position left:"
            minValue={0}
            pathConfig={ProductPageConfig.title.width}
            data={props.pageConfig.title.style.width}
            onChange={props.onChange}
        />

        Описание блюда

        <TextChanger
            title="Title text:"
            pathConfig={ProductPageConfig.description.text}
            data={props.pageConfig.description.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={ProductPageConfig.description.color}
            data={props.pageConfig.description.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={ProductPageConfig.description.fontSize}
            data={props.pageConfig.description.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Title position left:"
            minValue={0}
            pathConfig={ProductPageConfig.description.left}
            data={props.pageConfig.description.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Title position top:"
            minValue={0}
            pathConfig={ProductPageConfig.description.top}
            data={props.pageConfig.description.style.top}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={ProductPageConfig.description.width}
            data={props.pageConfig.description.style.width}
            onChange={props.onChange}
        />

        Количество блюд

        <NumberChanger
            title="Button position left:"
            minValue={0}
            pathConfig={ProductPageConfig.inputCount.left}
            data={props.pageConfig.inputCount.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position top:"
            minValue={0}
            pathConfig={ProductPageConfig.inputCount.top}
            data={props.pageConfig.inputCount.style.top}
            onChange={props.onChange}
        />

    </div>
};
