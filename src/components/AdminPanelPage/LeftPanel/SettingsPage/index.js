import React from 'react'

import AddressPage from './AddressPage/index'
import BasketPage from './BasketPage/index'
import MenuPage from './MenuPage/index'
import LoadingPage from './LoadingPage/index'
import PayPage from './PayPage/index'
import ProductPage from './ProductPage/index'

import cn from '../../../../utils/cn'

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

        this.hrStyle = {
            background: 'rgba(0, 0, 0, 0.3)',
            height: '1px',
            margin: '20px 0 12px 0'
        };
    }

    onResize() {
        const {top} = document.querySelector(`.${this.ClassName}`).getBoundingClientRect();
        const maxHeight = document.documentElement.clientHeight - top - 15;
        this.setState((state => (state.style = {
            maxHeight: `${maxHeight}px`
        },state)));
    }

    componentDidMount() {
        this.onResize();
        window.addEventListener('resize', this.onResize.bind(this));
    }

    render () {
        const {state, props, ClassName, hrStyle} = this;
        return <div className={cn(ClassName, props.page)} style={state.style}>
            <LoadingPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.loadingPage}
                onChange={props.onChange}
                hrStyle={hrStyle}
            />
            <AddressPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.addressPage}
                onChange={props.onChange}
                hrStyle={hrStyle}
            />
            <BasketPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.basketPage}
                onChange={props.onChange}
                hrStyle={hrStyle}
            />
            <MenuPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.menuPage}
                onChange={props.onChange}
                hrStyle={hrStyle}
            />
            <PayPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.payPage}
                onChange={props.onChange}
                hrStyle={hrStyle}
            />
            <ProductPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig.productPage}
                onChange={props.onChange}
                hrStyle={hrStyle}
            />
        </div>
    }
}
