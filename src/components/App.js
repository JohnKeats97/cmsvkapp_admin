import React from 'react'

import AdminPanel from './AdminPanelPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import Fetch from '../utils/fetch'
import configPage from "./config/configPage";
import cn from '../utils/cn'

import './style.css';


export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            page: 'loginPage'
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

    onChangePage(newPage) {
            this.setState((state)=>(state.page = newPage, state));
    }

    render () {
        const {state} = this;
        return <div className={cn('root', state.page)}>
            {state.page === configPage.adminPanelPage && <AdminPanel onChangePage={this.onChangePage.bind(this)}/>}
            <LoginPage onChangePage={this.onChangePage.bind(this)}/>
            <RegisterPage onChangePage={this.onChangePage.bind(this)}/>
        </div>
    }
};


/// почему смотрит на раge родителя в класс и none выключает а не на себя ??
