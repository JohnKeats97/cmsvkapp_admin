import React from "react";

import configPage from "../config/configPage";

import './style.css';
import Fetch from "../../utils/fetch";


export default class LoginPage extends React.Component {

    constructor() {
        super();
    }

    onLoginClick() {
        const email = (document.querySelector('.LoginPage-inputEMail').value).trim();
        const password = (document.querySelector('.LoginPage-inputPassword').value).trim();
        if (!email || !password) {
            alert('Введите коректные данные');
            return;
        }
        Fetch.Post('/users/login', {loginEmail : email, password: password})
            .then((res) => {
                this.props.onChangeUser(res);
            })
            .catch(() => {
                this.props.onChangePage(configPage.loginPage);
                alert("Неверный email или пароль");
            });
        this.props.onChangePage(configPage.loadingPageLR);
    }

    onRegisterClick() {
        this.props.onChangePage(configPage.registerPage);
    }

    render () {
        const {state} = this;
        return <div className="LoginPage-root">
            <div className="container">
                <div className="form-signin" role="form">
                    <h2 className="form-signin-heading">Sign in</h2>
                    <input className="LoginPage-input LoginPage-inputEMail form-control" placeholder="Email address" />
                    <input className="LoginPage-input LoginPage-inputPassword form-control" placeholder="Password" />
                    <div>
                        <div
                            className="LoginPage-button LoginPage-buttonSignIn btn btn-lg btn-primary btn-block"
                            onClick={this.onLoginClick.bind(this)}
                        >
                            Sign in
                        </div>
                        <div
                            className="LoginPage-button LoginPage-buttonSignUp btn btn-lg btn-primary btn-block"
                            onClick={this.onRegisterClick.bind(this)}
                        >
                            Sing up
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
};

