import React from 'react'

import AddressPage from './AddressPage'

import './style.css';


export default class SettingsPage extends React.Component {

    constructor() {
        super();

        this.state = {
            style: {
                maxHeigth: '460px'
            }
        };
    }

    componentWillMount() {
        console.log(document.documentElement.clientHeight);
    }

    render () {
        const {props} = this;
        return <div className="components-LeftPanel-SettingPage-root">
            <AddressPage
                className="components-LeftPanel-SettingPage-page"
                pageConfig={props.pageConfig}
                onChange={props.onChange}
            />
        </div>
    }
}
