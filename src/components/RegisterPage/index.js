import React from "react";

import configPage from "../config/configPage";
import Fetch from "../../utils/fetch";

import './style.css';


export default class RegisterPage extends React.Component {

    constructor() {
        super();
    }

    onLoginClick() {
        this.props.onChangePage(configPage.loginPage);
    }

    onRegisterClick() {
        const email = document.querySelector('.RegisterPage-inputEMail').value;
        const login = document.querySelector('.RegisterPage-inputLogin').value;
        const serviceId = document.querySelector('.RegisterPage-inputId').value;
        const password = document.querySelector('.RegisterPage-inputPassword').value;
        Fetch.Post('/users', {email : email, login: login, password : password})
            .then(() => {
                const appName = login;
                Fetch.Post('/users/login', {loginEmail : email, password: password})
                    .then((user) => {
                        const config = this.props.pageConfig;
                        config.serviceId = serviceId;
                        Fetch.Post('/apps', {
                            appName : appName,
                            creatorLogin: login,
                            serviceId : serviceId,
                            config: JSON.stringify(config)
                        })
                            .then(() => {
                                this.props.onChangeUserAndApp(user, appName);
                            })
                            .catch(() => {
                                this.props.onChangePage(configPage.loginPage);
                                alert('ошибка создания приложения');
                            })
                    })
                    .catch(() => {
                        this.props.onChangePage(configPage.loginPage);
                        alert('Ошибка входа после регистрации');
                    })
            })
            .catch(() => {
                alert('Этот пользователь уже зарегестрирован');
                this.props.onChangePage(configPage.registerPage);
            });
        this.props.onChangePage(configPage.loadingPageLR);
    }

    render () {
        return <div className="RegisterPage-root">
            <div className="container">
                <div className="form-signin" role="form">
                    <h2 className="form-signin-heading">Sign up</h2>
                    <input className="RegisterPage-input RegisterPage-inputEMail form-control" placeholder="Email address" />
                    <input className="RegisterPage-input RegisterPage-inputLogin form-control" placeholder="Login" />
                    <input className="RegisterPage-input RegisterPage-inputId form-control" placeholder="Service id" />
                    <input className="RegisterPage-input RegisterPage-inputPassword form-control" placeholder="Password" />
                    <div>
                        <div
                            className="RegisterPage-button RegisterPage-buttonSignUp btn btn-lg btn-primary btn-block"
                            onClick={this.onRegisterClick.bind(this)}
                        >
                            Sing up
                        </div>
                        <div
                            className="RegisterPage-button RegisterPage-buttonSignIn btn btn-lg btn-primary btn-block"
                            onClick={this.onLoginClick.bind(this)}
                        >
                            Sign in
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
};

