import React from 'react'

import AdminPanel from './AdminPanelPage'
import LoginPage from './LoginPage'
import LoadingPage from './LoadingPage'
import RegisterPage from './RegisterPage'
import Fetch from '../utils/fetch'
import configPage from "./config/configPage";
import cn from '../utils/cn'

import './style.css';


export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            page: 'loadingPage',
            appName: '',
            user: {}
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
                console.warn(res);
                if (res.status === 0) {
                    const {length: loginLength} = document.querySelectorAll('.root.loginPage');
                    const {length: registerLength} = document.querySelectorAll('.root.registerPage');
                    if (loginLength || registerLength) {
                        return;
                    }
                    this.onChangePage('loginPage');
                    return;
                }


                // брать прилажки польхователя, брать первую (пока нет экрана выбора) и записывать ее в state и сразу изменять в state страницу на админсую
                this.setState((state)=>(state.appName = 'test', state));

                // this.onChangePage('adminPanelPage');
            })
    }

    onChangeUser(newUser) {
        this.setState((state)=>(state.user = newUser, state));
    }

    onChangePage(newPage) {
        this.setState((state)=>(state.page = newPage, state));
    }

    render () {
        const {state} = this;

        this.isLogin();

        return <div className={cn('root', state.page)}>
            {state.page === configPage.adminPanelPage && <AdminPanel onChangePage={this.onChangePage.bind(this)}/>}
            <LoginPage onChangePage={this.onChangePage.bind(this)} onChangeUser={this.onChangeUser.bind(this)}/>
            <RegisterPage onChangePage={this.onChangePage.bind(this)} onChangeUser={this.onChangeUser.bind(this)}/>
            <LoadingPage />
        </div>
    }
};


/// почему смотрит на раge родителя в класс и none выключает а не на себя ??
