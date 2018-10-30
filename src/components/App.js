import React from 'react'

import AdminPanel from './AdminPanelPage'
import LoginPage from './LoginPage'
import LoadingPage from './LoadingPage'
import RegisterPage from './RegisterPage'
import Fetch from '../utils/fetch'
import configPage from "./config/configPage";
import pageConfig from '../config/pages'
import cn from '../utils/cn'

import './style.css';


export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            page: 'loadingPage',
            appName: '',
            user: {},
            pageConfig: pageConfig
        };
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
    isLogin() {
        const {length} = document.querySelectorAll('.root.adminPanelPage');
        if (length > 0) {
            return;
        }
        Fetch.Get('https://cmsvkapp.herokuapp.com/api/users/info')
            .then((res) => {
                if (res.status === 0) {
                    const {length: loginLength} = document.querySelectorAll('.root.loginPage');
                    const {length: registerLength} = document.querySelectorAll('.root.registerPage');
                    if (loginLength || registerLength) {
                        return;
                    }
                    this.setState((state) => {
                        state.page = configPage.loginPage;
                        state.user = {};
                        return state;
                    });
                    return;
                }

                Fetch.Get(`https://cmsvkapp.herokuapp.com/api/apps/${res.login}/config`)
                    .then(response => {
                        if(response.status === 9) {
                            this.setState((state)=>{
                                state.appName = res.login;
                                state.page = configPage.adminPanelPage;
                                return state
                            });
                            return;
                        }
                        this.setState((state)=>{
                            state.pageConfig = response;
                            state.appName = res.login;
                            state.page = configPage.adminPanelPage;
                            return state
                        });
                    })
                    .catch(() => {
                        alert('Ошибка получения конфига приложения');
                    })
            })
    }

    onChangeApp(appName) {
        this.setState((state)=>(state.appName = appName, state));
    }

    onChangeUser(newUser) {
        this.setState((state)=>(state.user = newUser, state));
    }

    onChangeUserAndApp(newUser, appName) {
        this.setState((state) => {
            state.user = newUser;
            state.appName = appName;
            return state
        });
    }

    onChangePage(newPage) {
        this.setState((state)=>(state.page = newPage, state));
    }

    render () {
        const {state} = this;

        setTimeout(() => {this.isLogin()}, 0);

        return <div className={cn('root', state.page)}>
            {state.page === configPage.adminPanelPage && <AdminPanel
                onChangePage={this.onChangePage.bind(this)}
                appName={state.appName}
                pageConfig={state.pageConfig}
            />}
            <LoginPage
                onChangePage={this.onChangePage.bind(this)}
                onChangeUser={this.onChangeUser.bind(this)}
            />
            <RegisterPage
                onChangePage={this.onChangePage.bind(this)}
                onChangeUser={this.onChangeUser.bind(this)}
                onChangeUserAndApp={this.onChangeUserAndApp.bind(this)}
            />
            <LoadingPage />
        </div>
    }
};


/// почему смотрит на раge родителя в класс и none выключает а не на себя ??
