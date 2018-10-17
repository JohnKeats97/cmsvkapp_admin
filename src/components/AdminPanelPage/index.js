import React from 'react'

import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import pageConfig from '../../config/pages'
import {SetObjectValue} from '../../utils/GetSetObjectValue'
import Fetch from '../../utils/fetch'

import './style.css';


export default class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            pageConfig: pageConfig,
            page: 'basketPage'
        };

        // Fetch.Post('https://cmsvkapp.herokuapp.com/api/apps/test/config', pageConfig);

        Fetch.Get('https://cmsvkapp.herokuapp.com/api/apps/test/config')
            .then(response => {
                if (response) {
                    this.setState((state)=>{
                        state.pageConfig = response;
                        return state;
                    });
                }
            });
    }

    onChange (args) {
        this.setState((state)=>{
            state.pageConfig = SetObjectValue(state.pageConfig, args.pathConfig, '.', args.value);
            Fetch.Post('https://cmsvkapp.herokuapp.com/api/apps/test/config', state.pageConfig);
            return state;
        });
    }

    onClickItemListPages (newPage) {
        this.setState((state)=>(state.page = newPage, state));
    }

    render () {
        const {state} = this;
        return <div className='AdminPanelPage-root'>
            <LeftPanel
                pageConfig={state.pageConfig}
                page={state.page}
                onChange={this.onChange.bind(this)}
                onClick={this.onClickItemListPages.bind(this)}
            />
            <RightPanel
                onChangePage={this.props.onChangePage}
                pageConfig={state.pageConfig}
                page={state.page}
            />
        </div>
    }
};
