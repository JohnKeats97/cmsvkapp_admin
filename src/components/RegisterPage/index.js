import React from "react";

import configPage from "../config/configPage";

import './style.css';


export default class RegisterPage extends React.Component {

    constructor() {
        super();
        // this.state = {
        //     pageConfig: pageConfig,
        //     page: 'basketPage'
        // };
    }
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
        this.props.onChangePage(configPage.loginPage);
    }

    onRegisterClick() {
        this.props.onChangePage(configPage.adminPanelPage);
    }

    render () {
        console.log(this.props)
        const {state} = this;
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

