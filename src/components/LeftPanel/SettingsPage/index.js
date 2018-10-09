import React from 'react'

import AddressPage from './AddressPage'
import BasketPage from './BasketPage'
import MenuPage from './MenuPage'
import LoadingPage from './LoadingPage'
import PayPage from './PayPage'
import ProductPage from './ProductPage'

import cn from '../../../utils/cn'

import './style.css';


export default class SettingsPage extends React.Component {

    constructor() {
        super();

        this.state = {
            style: {
                maxHeight: '466px'
            }
        };

        this.ClassName = "components-LeftPanel-SettingPage-root";
    }

    componentDidMount() {
        const {top} = document.querySelector(`.${this.ClassName}`).getBoundingClientRect();
        const maxHeight = document.documentElement.clientHeight - top - 15;
        this.setState((state => (state.style = {
            maxHeight: `${maxHeight}px`
        },state)));
    }

    render () {
        const {state, props, ClassName} = this;
        return <div className={cn(ClassName, props.page)} style={state.style}>
            <LoadingPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.loadingPage}
                onChange={props.onChange}
            />
            <AddressPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.addressPage}
                onChange={props.onChange}
            />
            <BasketPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.basketPage}
                onChange={props.onChange}
            />
            <MenuPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.menuPage}
                onChange={props.onChange}
            />
            <PayPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.payPage}
                onChange={props.onChange}
            />
            <ProductPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.productPage}
                onChange={props.onChange}
            />
        </div>
    }
}
