import React from "react";

import configPage from "../config/configPage";

import './style.css';
import Fetch from "../../utils/fetch";


export default class LoginPage extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         pageConfig: pageConfig,
    //         page: 'basketPage'
    //     };
    //
    //     Fetch.Post('https://cmsvkapp.herokuapp.com/api/apps/test/config', pageConfig);
    //
    //     // Fetch.Get('https://cmsvkapp.herokuapp.com/api/apps/test/config')
    //     //     .then(response => {
    //     //         if (response) {
    //     //             this.setState((state)=>{
    //     //                 state.pageConfig = response;
    //     //                 return state;
    //     //             });
    //     //         }
    //     //     });
    // }
    //
    // onChange (args) {
    //     this.setState((state)=>{
    //         state.pageConfig = SetObjectValue(state.pageConfig, args.pathConfig, '.', args.value);
    //         Fetch.Post('https://cmsvkapp.herokuapp.com/api/apps/test/config', state.pageConfig);
    //         return state;
    //     });
    // }
    //
    // onClickItemListPages (page) {
    //     this.setState((state)=>(state.page = page, state));
    // }

    onLoginClick() {
        const email = document.querySelector('.LoginPage-inputEMail').value;
        const password = document.querySelector('.LoginPage-inputPassword').value;
        const address = 'https://cmsvkapp.herokuapp.com/api';
        Fetch.Post(`${address}/users/login`, {loginEmail : email, password: password})
            .then((res) => {
                this.props.onChangeUser(res);
            })
            .catch((err) => {
                alert("Неверный email или пароль");
            })
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

