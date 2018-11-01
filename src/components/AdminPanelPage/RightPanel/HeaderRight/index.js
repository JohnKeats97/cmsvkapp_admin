import React from 'react'

import Fetch from '../../../../utils/fetch'
import configPage from '../../../config/configPage'

import './style.css';


export default class HeaderRight extends React.Component {

    constructor() {
        super();
    }

    onClickDeploy() {
        Fetch.Get(`/apps/${this.props.appName}/deploy`)
            .then((res)=>{
                console.log(res);
                alert(res.url)
            })
            .catch(() => {
                alert('Ошибка деплоя')
            });
    };

    onChangePage() {
        Fetch.Get('/users/logout')
            .then(()=>{
                this.props.onChangePage(configPage.loginPage)
            })
            .catch(() => {
                alert('Ошибка выхода')
            })
    };

    render () {
        return <div className="components-RightPanel-HeaderRight-root">
            <div className="col-xs-8"/>
            <button className="components-RightPanel-HeaderRight-button" onClick={this.onClickDeploy.bind(this)}>deploy</button>
            <button
                className="components-RightPanel-HeaderRight-button"
                onClick={this.onChangePage.bind(this)}
            >
                log out
            </button>
        </div>
    }
}
