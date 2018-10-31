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
        const password = document.querySelector('.RegisterPage-inputPassword').value;
        const address = 'https://cmsvkapp.herokuapp.com/api';
        Fetch.Post(`${address}/users`, {email : email, login: login, password : password})
            .then(() => {
                const appName = login;
                Fetch.Post(`${address}/users/login`, {loginEmail : email, password: password})
                    .then((user) => {
                        Fetch.Post(`${address}/apps`, {appName : appName, creatorLogin: login, serviceId : 16277})
                            .then(() => {
                                this.props.onChangeUserAndApp(user, appName);
                            })
                            .catch(() => {
                                alert('ошибка создания приложения')
                            })
                    })
            })
            .catch(() => {
                alert('Этот пользователь уже зарегестрирован')
            })
    }

    render () {
        return <div className="RegisterPage-root">
            <div className="container">
                <div className="form-signin" role="form">
                    <h2 className="form-signin-heading">Sign up</h2>
                    <input className="RegisterPage-input RegisterPage-inputEMail form-control" placeholder="Email address" />
                    <input className="RegisterPage-input RegisterPage-inputLogin form-control" placeholder="Login" />
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

