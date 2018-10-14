import React from 'react'

import Fetch from '../../../../utils/fetch'
import configPage from '../../../config/configPage'

import './style.css';


export default class HeaderRight extends React.Component {

    constructor() {
        super();
    }

    onClick() {
        Fetch.Post('https://ec2-18-218-171-0.us-east-2.compute.amazonaws.com/deploy', {"idApp": "test"});
    };

    onChangePage() {
        this.props.onChangePage(configPage.loginPage)
    };

    render () {
        return <div className="components-RightPanel-HeaderRight-root">
            <div className="col-xs-8"/>
            <button className="components-RightPanel-HeaderRight-button" onClick={this.onClick}>deploy</button>
            <button
                className="components-RightPanel-HeaderRight-button"
                onClick={this.onChangePage.bind(this)}
            >
                log out
            </button>
        </div>
    }
}
